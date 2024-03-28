function validarMensaje(){
    let salida = document.getElementById("salida");
    let entrada = document.getElementById("entrada");
    let imagen = document.getElementById("imagen");

    if(entrada.value!=''){
        imagen.style.display= "none";
        salida.rows='20';
        return true;
    }else{        
        imagen.style.display= "block";
        salida.rows='2';
        return false;
    }
}
function encriptar() {    
    let salida = document.getElementById("salida");
    let entrada = document.getElementById("entrada").value;    
    let mensaje = Array.from(entrada);
    let valido = validarMensaje();
    if(valido==true){
        for (let i = 0; i < mensaje.length; i++) {
            switch (mensaje[i]) {
                case 'e':
                    mensaje[i]='enter';
                    break;
                case 'i':
                    mensaje[i]='imes';
                    break;
                case 'a':
                    mensaje[i]='ai';
                    break;
                case 'o':
                    mensaje[i]='ober';
                    break;
                case 'u':
                    mensaje[i]='ufat';
                    break;    
                    
                default:
                    break;
            }            
        }
    }   
    salida.innerHTML=mensaje.join('');
}
function desencriptar(){
    let salida = document.getElementById("salida");
    let entrada = document.getElementById("entrada").value;    
    let valido = validarMensaje();
    let valores = ['enter','imes','ai','ober','ufat'];
    let vocales = ['e','i','a','o','u']    
    if(valido!=null){
        for (let j = 0; j < valores.length; j++) {    
            let val = valores[j];
            let rgx = new RegExp(val,'g')
            var cant = entrada.match(rgx)
            if(cant!=null){
                for (let i = 0; i < cant.length; i++) {
                entrada = entrada.replace(valores[j], vocales[j]);
                }
            }
        }
    }
    salida.innerHTML = entrada;
}
function copiar(){
    let salida = document.getElementById("salida");
    navigator.clipboard.writeText(salida.value);
}