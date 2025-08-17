import http from "http";

const server = http.createServer((request, response) => {
  /**
     * Enunciado:
Crie um servidor que, ao ser acessado, mostre há quanto tempo o servidor
está rodando, em horas, minutos e segundos em tempo real .

    Orientação:
Para que a hora "atualize automaticamente" na tela do navegador sem
recarregar a página, é necessário usar JavaScript no lado do cliente
(navegador) para fazer requisições periódicas ao servidor ou atualizar o
conteúdo dinamicamente. Sendo preciso criar uma variável que contenha um
código HTML, para realizar a atualização de maneira automática.
     */

  const msg = ``;

  response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  response.end(msg);
});

server.listen(3333, () => {
  console.log("Servidor rodando em http://localhost:3333");
});
