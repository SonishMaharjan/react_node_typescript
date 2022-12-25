import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export interface INurseDetailPageProps {}

/**
 * Component for nurse detail page.
 * 
 * @returns 
 */
const NurseDetailPage: React.FC<INurseDetailPageProps> = () => {
  const [message, setMessage] = useState("");

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setMessage("th nurse id " + id);
    } else {
      setMessage("invalid nurse id ");
    }
  }, [id]);

  return (
    <div>
      {message}
      <div>Nurse detail page</div>
      validateion token <span> {message}</span>
    </div>
  );
};

export default NurseDetailPage;
