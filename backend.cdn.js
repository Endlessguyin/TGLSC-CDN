const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const fs = require('fs');
const path = require('path');
const app = express();

const tglsc = './assets';

app.use('/assets/*', (req, res, next) => {
    const localPath = path.join(process.cwd(), req.path);
    
    if (fs.existsSync(localPath)) {
        return express.static('.')(req, res, next);
    }
    
    const proxy = createProxyMiddleware({
        target: 'https://glseries.net',
        changeOrigin: true,
        on: {
            error: (err, req, res) => {
                res.status(502).json({ error: 'proxy failed' });
            }
        }
    });
    
    proxy(req, res, next);
});

app.use(express.static('./public'));

app.listen(67676, () => { // or whatever port bro idk
    console.log('CDN proxy server running on port 6767');
    console.log('served ./assets/');
    console.log('missing files proxied from glseries.net');
});
