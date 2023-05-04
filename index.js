const http = require('http');
const server = http.createServer();
server.listen(3000, function () {
    console.log('Estamos en los años 3000');
});
    // http.createServer(function (req, res) {
    //     res.writeHead(200, {
    //         'Content-type': 'text.html'
    //     });
    //     res.write('<h1>Bienvenidos a mi web de nodejs</h1>');
    //     res.end();
    // }).listen(3000);
//servidor local
const colors = require('colors');