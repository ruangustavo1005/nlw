import express from "express";

const app = express();

app.get("/ping", (request, response) => {
    return response.send('pong');
});

app.post("/teste-post", (request, response) => {
    return response.send('post funcionando!');
});

app.listen(3000, () => {
    console.log("Running...");
});