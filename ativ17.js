/*Enunciado: Crie um endpoint /usuarios:

GET → retorna a lista de usuários cadastrados (array em memória).
POST → recebe JSON { "nome": "Maria", "idade": 25 } e adiciona à lista.*/

const http = require('http');

let usuarios = [];

const server = http.createServer((req, res) => {
  if (req.url === '/usuarios') {
    if (req.method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(usuarios));
    } else if (req.method === 'POST') {
      let body = '';

      req.on('data', chunk => {
        body += chunk;
      });

      req.on('end', () => {
        const novoUsuario = JSON.parse(body); 
        usuarios.push(novoUsuario); 

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ mensagem: 'Usuario adicionado!' }));
      });
    } else {
      res.writeHead(405);
      res.end('Método não permitido');
    }

  }else {
    res.writeHead(404);
    res.end('Página não encontrada');
  }
});

server.listen(3000, () => console.log('Servidor rodando na porta 3000 '));
