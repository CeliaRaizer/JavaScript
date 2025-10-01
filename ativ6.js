/*Enunciado: Crie um endpoint /visitas que conte quantas vezes ele foi acessado desde que o 
servidor foi iniciado. Armazene o contador em memória (pode ser uma variável global). */

const http = require ('http');

let visitas = 0

function lerCorpo(req){
    return new Promise((resolver, reject) => {
        let body = '';
        req.on('data', chunk => body += chunk.toString());
        req.on('end', () => resolve(body));
        req.on('error', err => reject(err));
    })
}

const server = http.createServer(async (req, res) =>{
    if (req.url === '/visitas') {
        visitas++
        res.end(`O endpoint /visitas já foi acessado ${visitas} vezes.`);
    }else{
        res.end('Rota não encontrada')
    }
})

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));