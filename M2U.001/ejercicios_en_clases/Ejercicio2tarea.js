alert("Bienvenidos a mi mundo");

//Agrego en js la funcion que contara los caracteres:
function contador(){
    var total = 50;
    setTimeout(function(){
        var valor = document.getElementById('contador');
        var respuesta = document.getElementById('resultado');
        var cantidad = valor.value.length;
        document.getElementById('resultado').innerHTML = cantidad + ' caracteres restantes ' + (total - cantidad);
        if (cantidad > total) 
        {
            respuesta.style.color = "red";

        }
        else {
            respuesta.style.color = "black";

        }

    });
}

