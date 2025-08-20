import http from 'http';
import os from 'os';

const server = http.createServer((request, response) => {
/**
 * Servidor Node ativo há 125 segundos.
 * Sistema Operacional: linux
 * Memória: 350 MB livre de 8000 MB
 * 
 * https://nodejs.org/api/os.html
 */

const memoriaTotal = (os.totalmem() / 1024**2).toFixed();
const memoriaLivre = (os.freemem() / 1024**2).toFixed();


const msg = `
Servidor Node rodando a ${process.uptime().toFixed()} segundo(s).
Sistema Operacional: ${os.type}.
Memoria: ${memoriaLivre} MB livre de ${memoriaTotal} MB.
 `;

    response.end(msg);


});

server.listen(3334, () => {
    console.log('Servidor rodando em http://localhost:3334');
    //estava dando erro de porta duplicada dai utilizei a 3334
});