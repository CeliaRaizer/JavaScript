//Crie uma rota /teste que retorne:
//Você acessou a rota de teste

const http = require('http')

const server = http.createServer((req, res) =>{
    if(req.url === '/teste'){
        res.writeHead(200, {'Content-Type' : 'text/plain'})
        res.end('Você acessou a rota teste')
    } else{
        res.writeHead(404)
        res.end('Pagina não encontrada!')
    }
})

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));