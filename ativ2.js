/*Enunciado: Crie um servidor que responda de acordo com o caminho da URL:
/→ "Página inicial", status com 200
/sobre→ "Sobre nós", status com 200
Qualquer outro caminho → "Página não encontrada"com status 404*/

const http = require('http');

const  servidor  =  http . createServer ( ( req ,  res )  =>  { 
  if  ( req . url  ===  '/' )  { 
    res . writeHead ( 200 ,  {  'Content-Type' : 'text/plain'  } ) ; 
    res . end ( 'Página inicial' ) ; 
  }  else  if  ( req . url  ===  '/sobre' )  { 
    res . writeHead ( 200 , { 'Content-Type' : 'text/plain' });
    res . end ('Sobre nos')
  }  else  { 
    res . writeHead ( 404 , { 'Content-Type' : 'text/plain' });
    res . end ('Página não encontrada')
  } 
} ) ;

servidor . listen ( 3000 ,  ( )  =>  console.log ( 'Servidor rodando na porta 3000 ' ) ) ;