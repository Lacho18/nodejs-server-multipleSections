const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const data = fs.readFileSync("./BrowserFiles/index.html", 'utf-8');
    const style = fs.readFileSync("./BrowserFiles/Style.css", 'utf-8');
    const script = fs.readFileSync("./BrowserFiles/Script.js", 'utf-8');
    const photoImage = fs.readFileSync("./BrowserFiles/menuImage.png");

    console.log(req.url);
    if(req.url === "/") {
        try {
            res.writeHead(200, {'content-type' : 'text/html'});
            res.write(data);
            res.end();
        }
        catch(err) {
            res.writeHead(404);
            res.end(err);
        }
    }
    else if(req.url === "/Style.css") {
        res.writeHead(200, {'content-type' : 'text/css'});
        res.write(style);
        res.end();
    }
    else if(req.url === "/Script.js") {
        res.writeHead(200, {'content-type' : 'text/javascript'});
        res.write(script);
        res.end();
    }
    else if(req.url = "/menuImage.png") {
        res.writeHead(200, {'content-type' : 'image/png'});
        res.write(photoImage);
        res.end();
    }
    else {
        try {
            fs.writeFileSync("./ErrorFile", "404 File not found!");
            let data = fs.readFileSync('./ErrorFile', 'utf-8');
            res.writeHead(404, {'content-type' : 'text/txt'});
            res.end(data);
        }
        catch(err) {
            res.writeHead(404);
            res.end(err);
        }
    }
});

server.listen(3000);
