import "reflect-metadata";
import "express-async-errors";
import "./database";
import express, { Request, Response, NextFunction } from "express";
import { router } from "./routers";

const app = express();

app.use(express.json());

app.use(router);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error) {
        return response.status(400).json({
            error: error.message
        });
    }

    return response.status(500).json({
        status: "error",
        message: "Erro interno do servidor."
    });
});

app.listen(3000, () => {
    console.log("Running...");
});