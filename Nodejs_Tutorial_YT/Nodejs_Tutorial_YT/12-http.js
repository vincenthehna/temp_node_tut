const http = require('http');

const server  = http.createServer((req,res)=>{
    if(req.url === '/'){
        console.log(req);
        res.end('<script>const num1=2;const num2=3;const func = function(x,y){console.log(x+y)};func(num1,num2)</script><h1>WElchome to our homepage</h1>');
    }
    if(req.url === '/about'){
        res.end('jajajajajaja')
    }
    res.end('fu')
    
})

server.listen(5000);