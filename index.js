var http = require('http');
var hostname = '127.0.0.1';
var port = 8080;

const server = http.createServer((req,res)=>{
    const path = req.url;
    const method = req.method;
    if(path === '/products'){
        if(method === 'GET'){
            res.writeHead(200,{'Content-Type': 'application/json'})
            res.end(JSON.stringify([{
                name: "넝구공",
                price: 5000
            }
        ]))
        }else if(method === 'POST'){

        }
    }

    res.end("GoodBye!");
});

server.listen(port, hostname); //이 번호들로 기다리고 있을께! 요청할 때 까지!

console.log("taro market on!")