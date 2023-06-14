//Se trajo el archivo json a javascrip
//const curso=require("./curso.json");
//console.log(curso);



let infoCurso={
    "titulo":"aprende node.js",
    "numVistas": 45642,
    "numLikes":21123,
    "temas":[
        "javascrip",
        "node.js"
    ],
    "pubico":true
};
//stringify para convertir a cadena de caracteres en formato json
//cadena de caracteres<-objeto
let infoCursoJSON= JSON.stringify(infoCurso);
console.log(infoCursoJSON);

//objeto<-cadena de caracteres
//parse nos permite convetir de tipo de dato
let infoCursoObjeto= JSON.parse(infoCursoJSON);
console.log(infoCursoObjeto);

//get: obtener o solicitar recursos
//post: crear recursos nuevos
//put: modificar recursos
//delete: eleminar recursos




