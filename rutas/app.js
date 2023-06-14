const http=require("http");
const cursos=require("./cursos");

const servidor=http.createServer((req, res)=>{
    const {method}=req;
    switch(method){
        case "GET":

        
        return manejarSolictudes(req, res);
        default:
        console.log("el metodo usado no puede ser manejado por el servidor" + method)
    }
});
function manejarSolictudes(req, res){
    const path=req.url;
    if (path==="/"){
        res.statusCode=200;
        res.end("bienvenido a m primer servidor y api");
    }else if (path==="/cursos"){
        res.statusCode=200;
        res.end(JSON.stringify(cursos.infoCursos));
    }else if(path==="/cursos/programacion"){ 
        res.statusCode=200;
        res.end(JSON.stringify(cursos.infoCursos.progrmacion));
    }
    res.statusCode=404;
    res.end("el servidor no existe")
}
const puerto=3000;
servidor.listen(puerto, ()=>{
    console.log("el servdor esta escuchando en el puerto " + puerto);
})