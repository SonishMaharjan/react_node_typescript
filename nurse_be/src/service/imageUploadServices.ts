import multer from "multer";

multer.memoryStorage();

// below variable is define to check the type of file which is uploaded
/**
 * Function to validate the uploaded file.
 * 
 * @param req 
 * @param file 
 * @param cb 
 */
const fileFilter = (req: any, file: any, cb: any) => {
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

export const uploadImageService = multer({ fileFilter: fileFilter });
