/*Enunciado: Crie uma rota /node que retorne um HTML com <h1>Minha Página Node.js</h1> e <p>Esta é uma página de teste</p>.*/

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === "/node"){
        res.writeHead(200({'Content-Type': 'text/html'}))
        res.end( `<h1>Minha Página Node.js</h1>
            <p>Esta é uma pagina de teste</p>`)
    }else{
         res.writeHead(404, { 'Content-Type': 'text/plain' });
         res.end('Pagina não encontrada!')
    }
});

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));