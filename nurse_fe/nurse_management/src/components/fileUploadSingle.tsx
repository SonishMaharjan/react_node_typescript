import { ChangeEvent, useState, useRef, useEffect } from "react";

import { authenticatedHttp } from "../services/http";

export interface IFileUploadSingeProps {
  onFileUploaded: (data: any) => void;
  resetFileValue: boolean;
}

const FileUploadSingle: React.FC<IFileUploadSingeProps> = ({
  onFileUploaded,
  resetFileValue,
}) => {
  const [file, setFile] = useState<File | null>();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (resetFileValue) {
      setFile(null);
    }
  }, [resetFileValue]);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    setFile(e.target.files[0]);

    let formData = new FormData();
    formData.append("nurseImage", file || "");

    const { data } = await authenticatedHttp.post("/nurses/images", formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    onFileUploaded(data);
  };

  const handleUploadClick = async (event: any) => {
    event.preventDefault();

    fileInputRef.current?.click();
  };

  return (
    <div>
      <input
        style={{ display: "none" }}
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
      />

      <div>{file && `${file.name} - ${file.type}`}</div>

      <button onClick={handleUploadClick}>Upload Photo</button>
    </div>
  );
};

export default FileUploadSingle;
