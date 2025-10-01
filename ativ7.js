/*Crie um endpoint /ifc que redireciona o usuário para https://www.videira.ifc.edu.br 
usar o status HTTP 302 (redirecionamento temporário). */

const http = require('http')

const servidor = http.createServer((req, res) =>{
    if (req.url === '/ifc'){
        res.writeHead(302, {"Location": "https://www.videira.ifc.edu.br"})
        res.end()
    }else{
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Pagina não encontrada!");
    }
})

servidor.listen(3000, () => console.log("Servidor rodando na porta 3000"));