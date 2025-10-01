/*Enunciado: Crie um endpoint /somaque receba consultas ae bna URL (ex.: /soma?a=3&b=5) 
e retorne o resultado da soma em JSON. */

const http = require('http') ; 
const url = require('url') ;

const server = http.createServer((req,res) => {
    const q = url.parse(req.url, true).query;

    if(req.url.startsWith('/soma')) { 
        const a = Number(q.a)
        const b =Number(q.b)
        const resultado = a + b

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ resultado: resultado }));
    }else { 
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Pagina não encontrada!");
    } 
    
}) ; 
    
server.listen(3000, () => console.log('Servidor rodando na porta 3000') ) ;