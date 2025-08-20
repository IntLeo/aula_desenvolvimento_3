import http from "http";

let cont = 0;
const server = http.createServer((request, response) => {
  /**
     * Crie um servidor HTTP que conte quantas vezes foi acessado desde que foi
     * iniciado. Toda vez que um usuário acessar, ele verá o número de acessos.
     */
  if(request.url === '/'){

    cont ++;
    
    const msg = `O servidor foi acessado ${cont} vez(es).`;
    
    response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(msg);
  } else response.end();
});

server.listen(3333, () => {
  console.log("Servidor rodando em http://localhost:3333");
});
