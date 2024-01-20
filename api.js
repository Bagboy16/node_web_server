import { urls } from './urls.js';
import { parser } from './parser.js';
import data from './db/products.json' assert { type: 'json' };

export const home = (req, res) => {
	if (req.method !== 'GET') {
		res.writeHead(405);
		res.end('Method Not Allowed');
		return;
	}
	let rutas = [];
	for (const ruta of Object.keys(urls)) {
		rutas = [...rutas, ruta];
	}

	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.write(JSON.stringify({ rutas: rutas }));
	res.end();
};

export const products = async (req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ products: data.productos }));
        res.end();
        return;
    }
    if (req.method === 'POST') {
        const json = await parser(req);
        console.log(json);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ books: json }));
        res.end();
        return;
    }
    res.writeHead(405);
    res.end('Method Not Allowed');
};
