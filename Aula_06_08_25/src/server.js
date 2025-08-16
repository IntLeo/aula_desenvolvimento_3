import http from 'http';

const server = http.createServer((request, response) => {
    const dataNow = new Date;
    
    return response.end('Hello Word');
})

server.listen(3333);