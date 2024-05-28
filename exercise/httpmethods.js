const http = require('http')

const server = http.createServer((req,res)=>{
if(req.url === '/'){
    res.end('Welcome to our home page')
}

else if(req.url ==='/about') {
    res.end('This is about page')
}

else res.end(`<p>Oops</p>
 <a href="/" > back home </a>`)

})

server.listen(5000) 