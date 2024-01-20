import http from 'http';
import { router } from './router.js';

const server = http.createServer((request, response) => {
    router(request, response);
});

server.listen(3000, () => {
    console.log('Servidor en el puerto 3000');
});