// src/dynamodb/createTable.ts
import {
  CreateTableCommand,
  AttributeDefinition,
  CreateTableCommandInput,
} from "@aws-sdk/client-dynamodb";
import { dynamoDBClient } from "./dynamodbClient";

export const createTable = async () => {
  const params: CreateTableCommandInput = {
    TableName: "Table0909",
    KeySchema: [
      { AttributeName: "PrimaryKey", KeyType: "HASH" },
      { AttributeName: "SortKey", KeyType: "RANGE" },
    ],
    AttributeDefinitions: [
      {
        AttributeName: "PrimaryKey",
        AttributeType: "S",
      } as AttributeDefinition,
      { AttributeName: "SortKey", AttributeType: "S" } as AttributeDefinition,
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
  };

  try {
    const data = await dynamoDBClient.send(new CreateTableCommand(params));
    console.log("Table created successfully:", data);
  } catch (error) {
    console.error("Error creating table:", error);
  }
};
