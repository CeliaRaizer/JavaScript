/*Anunciado: Crie um endpoint /usuario que retorna um objeto JSON com nome e idade.*/

const http = require ('http');

const servidor = http.createServer((req, res) => {
    if (req.url === '/usuario'){
        const usuario = {
            nome: 'Célia',
            idade: 19
        }
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(usuario))
    } else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Página não encontrada');
    }
})

servidor.listen(3000 , () => console.log('Servidor rodando na porta 3000'));