import 'reflect-metadata'
import express from "express";
import "./database";

const app = express();



/**
 * GET = Buscar
 * POST = Salvar informação
 * PUT = Alterar
 * DELETE = Deletar
 * PATCH = Alterar algo específico
 */

 // http:/localhost:3333/users

app.get("/", (request, response) => {
    return response.send("Hello World!");
})

app.post("/", (resquest, response) => {
    // receu os dados para salvar
    return response.json({message: "Os dados foram salvos com sucesso!"});

})

app.listen(3333, () => console.log("server is running!"));
