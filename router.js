import url from 'url';
import { urls } from './urls.js';

export const router = (req, res) => {
	const parsedUrl = url.parse(req.url, true);
	const path = parsedUrl.pathname;
	const trimmedPath = path.replace(/^\/+|\/+$/g, '');
	const handler = urls[trimmedPath];
	if (handler) {
		handler(req, res);
	} else {
		res.writeHead(404);
		res.end('Not Found');
	}
};
