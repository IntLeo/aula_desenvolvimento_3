import http from "http";

const startTime = new Date();

const server = http.createServer((request, response) => {
  const now = new Date();
  const uptimeMilliseconds = now - startTime;

  const hours = Math.floor(uptimeMilliseconds / (1000 * 60 * 60));
  const minutes = Math.floor((uptimeMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((uptimeMilliseconds % (1000 * 60)) / 1000);

  const uptimeString = `Tempo de atividade: ${hours}h ${minutes}m ${seconds}s`;

  if (request.url === '/') {
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Tempo de Atividade do Servidor</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1>Tempo de Atividade do Servidor</h1>
      <p id="uptime">${uptimeString}</p>
      <script>
        const uptimeElement = document.getElementById('uptime');
        setInterval(async () => {
          const response = await fetch('/uptime');
          const newUptime = await response.text();
          uptimeElement.textContent = newUptime;
        }, 1000);
      </script>
    </body>
    </html>
    `;
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end(html);
  }
  if (request.url === '/uptime') {
    response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(uptimeString);
  }
});

server.listen(3333, () => {
  console.log("Servidor rodando em http://localhost:3333");
});
