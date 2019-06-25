const http = require('http');

const server = http.createServer(function(request, response){
    response.writeHead(200, {"content-type": "text/html"});
    response.write("<!DOCTYPE html >");
    response.write("<html>");
    response.write("<head>");
    response.write("<title> first server </title>")
    response.write("</head>")
    response.write("<body>")
    response.write("Im Da Big Dog!!!!")
    response.write("</body>")
    response.write("</html>")
    response.end();
});

server.listen(3000)
console.log('the big dogs server is up and running on port 3000....')


