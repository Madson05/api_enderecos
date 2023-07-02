import express from "express";
import dotenv from "dotenv";
import router from "./Aplication/Routes/Router";
import ErrorMiddleware from "./Aplication/Middlewares/ErrorMiddleware";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/", router);

app.use(ErrorMiddleware.handle)

app.listen(process.env.APLICATION_PORT, () => {
    console.log(`O servidor está rodando no endereço: https://localhost:${process.env.APLICATION_PORT}`);
    }
);