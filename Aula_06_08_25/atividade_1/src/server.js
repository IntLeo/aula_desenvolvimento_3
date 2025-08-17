import http from 'http';

const server = http.createServer((request, response) => {
    const now = new Date();

    // Formatando para dd/mm/yyyy hh:mm:ss
    const dia = now.getDate();
    const mes = now.getMonth() + 1;
    const ano = now.getFullYear();

    const horas = now.getHours();
    const minutos = now.getMinutes();
    const segundos = now.getSeconds();

    const dataHora = `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;

    response.end(`Data e hora atual: ${dataHora}`);
});

server.listen(3333, () => {
    console.log('Servidor rodando em http://localhost:3333');
});
