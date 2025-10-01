/*Anunciado: Crie um endpoint /frutas que retorna um array JSON com frutas. */

const http = require('http');

const servidor = http.createServer((req, res) => { 
  if(req.url === '/frutas') { 
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(["Melancia","banana","mamão"]));
  } else { 
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Pagina não encontrada");
  } 
});

servidor.listen(3000, () => console.log( 'Servidor rodando na porta 3000 ' ) ) ;