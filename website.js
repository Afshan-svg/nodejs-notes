const fs = require("fs")
const http = require ('http')

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url);
    if(req.url == "/") {
        res.statusCode = 200;
        const data = fs.readFileSync("index.html")
        res.end(data.toString())
    }
    else if (req.url == '/hello') {
        res.statusCode == 200;
        
        res.end('<h1>This is Afshan </h1> <p> Ready to rock the world!</p>')        
    }
    else if (req.url === '/about') {
        res.statusCode = 200;
        
        res.end('<h1>About Afshan </h1> <p> This is about Afshan</p>')        
    }
    else  {
        res.statusCode == 404;
        
        res.end('<h1>Not found </h1> <p> Requested url was not found on this server</p>')        
    }
  
})

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})