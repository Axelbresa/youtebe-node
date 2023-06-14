function saludar(nombre){
    return "hola " + nombre;
}
function estado(){
    return "¿como estas?" 
}
//exportar cada funcion 
//module.exports.hola=saludar;
//module.exports.animo=estado;

//para exportar de forma desectucturada
module.exports={
    hola: saludar,
    animo: estado
}