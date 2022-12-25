import { s3 } from "../awsConfing";

import config from "config";

/**
 * Function to upload image to AWS.
 * 
 * @param filename 
 * @param file 
 * @param type 
 * @returns 
 */
export const uploadImageToAws = async (
  filename: string,
  file: any,
  type: string
) => {
  try {
    // Set the parameters
    const uploadParams = {
      Bucket: config.get("AWS.AWS_BUCKET_NAME") as string,
      Key: `${config.get("AWS.AWS_BUCKET_FOLDER_NAME")}/${filename}`,
      Body: file,
      ContentType: type,
    };

    const data = await s3.upload(uploadParams).promise();

    return data;
  } catch (err) {
    console.log("Error", err);
  }
};
