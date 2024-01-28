const http = require('http')

const server = http.createServer((req,res)=>{
if(req.url === '/'){
res.end('This is the home page')
}
if(req.url === '/about'){
 res.end('This is the about Page')
}
{
 res.end(`<h1>Opps doesn't exist</h1> <a href="/">Home</a>`)
}
})

server.listen(3000)