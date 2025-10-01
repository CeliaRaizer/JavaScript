/*Enunciado: Crie um endpoint /metodo que retorna em JSON o método HTTP usado na requisição. 
Use req.method para obter o método e JSON.stringify para formatar a resposta. O status deve ser 200. */

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/metodo'){
        const metodo = req.method
        const resposta = JSON.stringify({metodo})

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(resposta);
    }else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Pagina não encontrada')
    }
});

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));