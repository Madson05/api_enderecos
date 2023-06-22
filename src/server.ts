import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.listen(process.env.APLICATION_PORT, () => {
    console.log(`Server is running on port ${process.env.APLICATION_PORT}`);
    }
);