import http from "http";

const server = http.createServer((request, response) => {
  /**
     * Crie um servidor HTTP que, ao ser acessado, sorteia aleatoriamente uma
     * mensagem motivacional de um array com 5 frases diferentes

    * Mensagem do dia:
    “Você está no caminho certo!”
     */

  const messages = [
    "Cada pequeno passo já é um avanço!",
    "Você é mais capaz do que imagina.",
    "A persistência constrói resultados duradouros.",
    "Desafios são oportunidades de crescimento.",
    "Sua dedicação hoje será seu orgulho amanhã.",
  ];

  const sort = Math.floor(Math.random() * 5);
  //console.log(sort);

  const msg = `Mensagem do dia: 
${messages[sort]}
`;

  response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  response.end(msg);
});

server.listen(3333, () => {
  console.log("Servidor rodando em http://localhost:3333");
});
