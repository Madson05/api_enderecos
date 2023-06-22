import express from "express";
import dotenv from "dotenv";
import router from "./Aplication/Routes/Router";

dotenv.config();

const app = express();

app.use("/", router);

app.listen(process.env.APLICATION_PORT, () => {
    console.log(`Server is running on port ${process.env.APLICATION_PORT}`);
    }
);