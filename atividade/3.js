//Crie um servidor que na rota /dados retorne:
//{ "curso": "Node.js", "nivel": "iniciante" }

const http = require('http')

const server = http.createServer((req, res) =>{
    if(req.url === '/dados'){
        res.writeHead(200, {'Content-Type' : 'application/json'})
        res.end(JSON.stringify({Curso : 'Node.js', nivel: 'iniciante'}))
    } else{
        res.writeHead(404)
        res.end('Pagina não encontrada!')
    }
})

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));