import { NextFunction, Request, Response } from "express";
import { decode, verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;
    
    if (!authToken) {
        return response.status(401).json({
            message: "Não foi encontrado o token de autenticação!"
        });
    }

    const [, token] = authToken.split(" ");

    try {
        const {sub} = verify(token, "b86a5966d8cd71df8d4614c64a9f81ad") as IPayload;

        request.user_id = sub;

    }
    catch (error) {
        return response.status(401).json({
            message: "Token inválido!"
        });
    }

    

    return next();
}