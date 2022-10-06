// javascript

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();


app.use('/', createProxyMiddleware('/docs',{ target: 'http://localhost:4200', changeOrigin: true }));
app.use('/', createProxyMiddleware('/',{ target: 'https://angular.io', changeOrigin: true }));

app.listen(3000);