import { S3Client } from "@aws-sdk/client-s3";

import Aws from "aws-sdk";

import config from "config";

export const s3Client = new S3Client({
  credentials: {
    accessKeyId: config.get("AWS.AWS_ACCESS_KEY_ID") as string,
    secretAccessKey: config.get("AWS.AWS_SECRET_ACCESS_KEY") as string,
  },
  region: config.get("AWS.AWS_REGION") as string,
});

export const s3 = new Aws.S3({
  apiVersion: "2006-03-01",
  accessKeyId: config.get("AWS.AWS_ACCESS_KEY_ID") as string,
  secretAccessKey: config.get("AWS.AWS_SECRET_ACCESS_KEY") as string,
});
