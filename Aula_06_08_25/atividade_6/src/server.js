import http from "http";

const server = http.createServer((request, response) => {
  /**
     * Enunciado:
Crie um servidor HTTP que, ao ser acessado, responda com a data e hora
atual formatada no padrão brasileiro (dd/mm/aaaa hh:mm:ss), e deve ficar
atualizando a hora em tempo real.


    Orientação:
Para que a hora "atualize automaticamente" na tela do navegador sem
recarregar a página, é necessário usar JavaScript no lado do cliente
(navegador) para fazer requisições periódicas ao servidor ou atualizar o
conteúdo dinamicamente. Sendo preciso criar uma variável que contenha um
código HTML, para realizar a atualização de maneira automática. 
     */

    const now = new Date();

    const dia = now.getDate();
    const mes = now.getMonth();
    const ano = now.getFullYear();

    const horas = now.getHours();
    const minutos = now.getMinutes();
    const segundos = now.getSeconds();


  const DataHora = `Data: ${dia}/${mes}/${ano} Hora: ${horas}h ${minutos}m ${segundos}s`;

  if (request.url === '/') {
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Data e hora atual</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1>Data e hora atual</h1>
      <p id="dataHora">${DataHora}</p>
      <script>
        const dataHoraElement = document.getElementById('dataHora');
        setInterval(async () => {
          const response = await fetch('/dataHora');
          const DataHora = await response.text();
          dataHoraElement.textContent = DataHora;
        }, 1000);
      </script>
    </body>
    </html>
    `;
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end(html);
  }
  if (request.url === '/dataHora') {
    response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(DataHora);
  }
});

server.listen(3333, () => {
  console.log("Servidor rodando em http://localhost:3333");
});