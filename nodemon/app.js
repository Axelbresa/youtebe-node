// npm install -g nodemon
//nodemon "nombre del archvo" en la terminal command prompt
const http=require("http");

const servidor=http.createServer((req, res)=>{
    res.end("hola mundo");
});

const puerto=3000;

servidor.listen(puerto,()=>{
    console.log("el servdor esta escuchando "+ puerto);
});