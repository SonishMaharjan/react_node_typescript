import multer from "multer";

const upload = multer({ dest: "uploads/" });

multer.memoryStorage();

// below variable is define to check the type of file which is uploaded

const imageFilefilter = (req: any, file: any, cb: any) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

export const uploadImageService = multer({ fileFilter: imageFilefilter });
