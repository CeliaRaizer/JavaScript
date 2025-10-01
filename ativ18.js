const http = require('http');

let produtos = [];

const server = http.createServer((req, res) => {
    if (req.url === '/produtos') {
        //Listar
        if (req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(produtos));
        }else if (req.method === 'POST') { //adicionar
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
                const novo = JSON.parse(body);
                produtos.push(novo);
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ mensagem: 'Produto adicionado!' }));
            });
        }else if (req.method === 'PUT') {
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
                const atualizado = JSON.parse(body);
                let encontrado = false;

                produtos = produtos.map(p => {
                if (p.id === atualizado.id) {
                    encontrado = true;
                    return atualizado; 
                }
                return p;
                });

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(
                encontrado ? { mensagem: 'Produto atualizado!' } 
                            : { mensagem: 'Produto não encontrado!' }
                ));
            });
        }else if (req.method === 'DELETE') {
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
                const { id } = JSON.parse(body);
                const antes = produtos.length;
                produtos = produtos.filter(p => p.id !== id);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(
                produtos.length < antes ? { mensagem: 'Produto removido!' } 
                                        : { mensagem: 'Produto não encontrado!' }
                ));
            });
        } else {
        res.writeHead(405);
        res.end('Método não permitido');
        }

    } else {
        res.writeHead(404);
        res.end('Pagina não encontrada');
    }
    });

server.listen(3000, () => console.log('Servidor rodando na porta 3000 🚀'));
