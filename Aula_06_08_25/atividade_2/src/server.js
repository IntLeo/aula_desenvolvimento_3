import http from "http";
import os from "os";

const server = http.createServer((request, response) => {
  /**
   * Crie um servidor HTTP que conte quantas vezes foi acessado desde que foi
   * iniciado. Toda vez que um usuário acessar, ele verá o número de acessos.
   */


  let msg = `O servidor foi acessado ${request.headers['x-access-count'] || 0} vez(es).`;

  response.end(msg);
});

server.listen(3334, () => {
  console.log("Servidor rodando em http://localhost:3334");
  //estava dando erro de porta duplicada dai utilizei a 3334
});
