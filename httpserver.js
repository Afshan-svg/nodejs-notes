const { Console } = require('console')

const http = require ('http')

const port = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
    
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>This is Afshan </h1> <p> Ready to rock the world</p>')  
})

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})