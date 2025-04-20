import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Guys welcome to leetlab🔥");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 8081");
});
