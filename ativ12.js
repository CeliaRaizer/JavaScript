/*Enunciado: Crie um endpoint / que retorne o conteúdo de um arquivo index.html.
Use fs.readFile para ler o arquivo de forma assíncrona. */

const http = require('http');
const fs = require('fs'); // módulo para manipular arquivos

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Erro ao ler arquivo');
      } else {
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.end(data)
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Pagina não encontrada')
  }
});

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));