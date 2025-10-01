/*Anunciado: Crie um servidor HTTP que responde "Olá, Mundo!"com status 200. 
O servidor deve escutar na porta 3000.*/

const http = require('http');

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain' });
    res.end('Olá, Mundo');
})

server.listen(3000, () =>{
        console.log('Servidor rodando em http://localhost:3000');
})