import http from 'node:http';

import express from 'express';
import compression from 'compression';
import cors from 'cors';

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 8080;
app.set('port', port);

app.use(
	cors({
		origin: '*',
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		preflightContinue: false,
		optionsSuccessStatus: 204
	})
);
app.use(compression());
app.use(express.json());

app.get('/hello', (req, res, _next) => {
	res.send('hello');
});

// starting listening
server.listen(app.get('port'), () => {
	console.info(new Date().toISOString(), 'Web server listening on', app.get('port'));
});
