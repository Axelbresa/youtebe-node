const http=require("http");

//req significa solicitud de http
//res significa respuesta
const servidor = http.createServer((req, res)=>{
console.log(req.method);
console.log(req.url);
console.log(req.headers);
console.log(res);

    console.log("solicitud");
res.end("hola mundo");
});
const puerto=3000;
//listen significa escuchar

servidor.listen(puerto, ()=>{
    console.log ("el servidor esta escuchando en el puerto " + puerto);
});
