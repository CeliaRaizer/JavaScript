/*Enunciado: Crie um endpoint /saudacao que receba um parâmetro nome na URL (ex.: /saudacao?nome=Maria) 
e responda "Olá, Maria!". Se não houver parâmetro, retorne "Olá, visitante!".*/

const  http  =  require ('http') ; 
const  url  =  require ('url') ;

const  server  =  http .createServer ((req, res) => { 
    const q = url.parse(req.url, true).query;
   

    if( req.url.startsWith ( '/saudacao')) { 
        if(q.nome){
            res.end (`Olá, ${q.nome}!`); 
        } 
    }else { 
        res.end ('Olá, visitante!');
    } 
}) ; 

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));