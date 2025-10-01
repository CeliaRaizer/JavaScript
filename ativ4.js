/* Anunciado: Crie um endpoint /horaque retorna à hora atual do servidor em formato "HH:MM:SS".*/

const http = require('http') ;

const servidor = http.createServer((req, res) => { 
  if  (req.url === '/hora')  { 
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2,'0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');

    res.end(`${horas}:${minutos}:${segundos}`); 
  }  else  { 
    res.end('Pagina não encontrada')
  } 
} ) ;

servidor.listen(3000, () => console.log('Servidor rodando na porta 3000')) ;