const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end("welcome to home page");
        return;
    }
    if(req.url === '/about'){
        res.end("welcome to about page");
        return;
    }

    res.end(`
        <p>can't find page</p>
        <a href="/">back home</a>
    `);
});

server.listen(3000);