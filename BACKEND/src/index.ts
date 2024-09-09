import express, { Request, Response } from "express";
import cors from "cors";
import pool from "./database";
import { createTable } from "./dynamodb/createTable";

createTable()
  .then(() => {
    console.log("DynamoDB table creation initiated.");
  })
  .catch((error) => {
    console.error("Failed to create DynamoDB table:", error);
  });

const app = express();
const port = process.env.PORT || 3000;

app.get("/create-table", async (req, res) => {
  try {
    await createTable();
    res.send("Table created successfully");
  } catch (error) {
    res.status(500).send("Error creating table");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Kết nối thành công đến RDS!");
    connection.release(); // Trả kết nối lại cho pool sau khi kiểm tra xong
  } catch (error) {
    console.error("Kết nối thất bại:", error);
  }
};

testConnection();

// Sử dụng CORS middleware
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Anh Tú Đẹp Trai");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
