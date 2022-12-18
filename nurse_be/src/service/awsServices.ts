import { PutObjectCommand } from "@aws-sdk/client-s3"; // ES Modules import
import { s3Client, s3 } from "../awsConfing";

import config from "config";

export const uploadImageToAws = async (
  filename: string,
  file: any,
  type: string
) => {
  try {
    // Set the parameters
    const uploadParams = {
      Bucket: config.get("AWS.AWS_BUCKET_NAME") as string,
      Key: `nurse_images/${filename}`,
      Body: file,
      ContentType: type,
    };

    const data = await s3.upload(uploadParams).promise();

    return data;
  } catch (err) {
    console.log("Error", err);
  }
};