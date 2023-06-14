const { fs } = require("fs");
const saludo=require("./saludos.js");

//console.log(saludo.hola("chamo"));
//console.log(saludo.animo());
//desectruturacion solo incluimos las funciones que deseemos
//const {hola, animo}=require("./saludos.js");

//console.log(saludo.hola("animo"));
//console.log(saludo.animo());
//console.warn("0currio un error...");  
//warn es advertir
//console.error(new error("¡ocurrio un error!"));
// es un error grave

//console.log(process);
//console.log(process.env);

//console.log(process.argv);
//
//console.log(process.memoryUsage()); para saber la memoria que se esta usando

//modulo os es para saber la informacion del sistema operativo
const os=require("os");

//para saber el sistema operativo
//console.log(os.type());

//para saber el lugar del directorio
//console.log(os.homedir());

//para saber cuanto tiempo se a estado ejecutando el sistema operativo en segundos
//console.log(os.uptime());

//informacion del usuario
//console.log(os.userInfo());

//setTimeout es para decir en cuento milisegundos quiere que se ejecute 1segundo=1000milisegundos
//function mostrarTema(tema){
//console.log("estoy aprendiendo " + tema);
//}
//settimeTime(nombre de la funcion/retraso/argumentos)
//setTimeout(mostrarTema, 1000, "node.js");


//setInmediate() es para ejecutar el codigo asincrono lo mas rapido posible
//console.log("antes del setInmediate");
//setImmediate(mostrarTema, "node.js");
//console.log("despues del setInmediate");

//function mostrarTema(tema){
//    console.log("estoy aprendiendo" + tema);

//}
//setInterval(mostrarTema, 1500, "node.js");


// para traer un archivo html
 //const fs=require("fs");

// fs.readFile("index.html", "utf-8", (err, contenido)=>{
// if (err){
// console.log(err);
// }else{
//     console.log(contenido);
// }
// });

//para cambiar el nombre de un archivo html
// const fs=require("fs");

// fs.rename("index.html", "main.html", (err)=>{
//     if (err){
//         throw err;
//     }
//     console.log("nombre cambiado exitosamente")
// });

//agregar contenido al final de un archivo.
// const fs=require("fs");
// fs.appendFile("index.html", "<p>hola</p>", (err)=>{
//     if(err){
//         throw err;
//     }
//     console.log("archivo actualizado");
// });

//Remplazar todo el contenido del archivo
// const fs=require("fs");
// fs.writeFile("index.html", "contenido nuevo",(err)=>{
//         if (err){
//             throw err;
//         }
//         console.log("contenido remplazado")
//     });

//eliminar archivos
// const fs=require("fs");



// fs.unlink("index2.html", (err)=>{
//             if (err){
//                 throw err;
//             }
//             console.log("archivo eliminado")
//         });

//sync hay que agregarle para que se ejeute de manera sincrona todos


