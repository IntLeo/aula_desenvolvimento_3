import http from "http";

let cont = 0;
const server = http.createServer((request, response) => {
  /**
     * Crie um servidor HTTP que conte quantas vezes foi acessado desde que foi
     * iniciado. Toda vez que um usuário acessar, ele verá o número de acessos.
     */

  cont ++;
  console.log(`Acesso número: ${cont}`);

  const msg = `O servidor foi acessado ${cont} vez(es).
  O navegador parece fazer mais de uma requisição, por isso o contador aumenta mais de uma vez.`;

  response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  response.end(msg);
  //O navegado parece fazeer mais de uma requisição, por isso o contador aumenta mais de uma vez, utilizando no console.log para verificar o número de acessos.
});

server.listen(3333, () => {
  console.log("Servidor rodando em http://localhost:3333");
});
