/*Anunciado: Crie um endpoint /login que aceite requisições POST com JSON contendo usuario e senha.

Veja usuario === "admin" e senha === "1234", retorne { "sucesso": true, "mensagem": "Login bem-sucedido" }.
Caso contrário, retorne { "sucesso": false, "mensagem": "Usuário ou senha inválidos" }.*/

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/login' && req.method === 'POST') {
    let body = '';

    // Lendo os dados do corpo da requisição
    req.on('data', chunk => { 
      body += chunk.toString(); 
    });
    
    // Quando terminar de receber os dados
    req.on('end', () => {
      try {
        const dados = JSON.parse(body);
        const sucesso = (dados.usuario === 'admin' && dados.senha === '1234');
        const mensagem = sucesso ? 'Login bem-sucedido' : 'Usuário ou senha inválidos';

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ sucesso, mensagem }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ sucesso: false, mensagem: 'JSON inválido' }));
      }
    });

  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página não encontrada');
  }
});

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));