// src/dynamodb/dynamodbClient.ts
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const dynamoDBClient = new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export { dynamoDBClient };
