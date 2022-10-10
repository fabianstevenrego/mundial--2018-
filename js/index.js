$("#selh3").click(function(event){
    $("#contenedor").load('colombia.html')
});

$("#form").click(function(event){
    $("#contenedor").load('formulario.html')
});

$("#part").click(function(event){
    $("#contenedor").load('partido.html')
});

document.querySelector('#partidos').addEventListener('click',traerDatos);

function traerDatos(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET','partidos.json',true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if (this.readyState ==  4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            for(let partido of datos.partidos){
            // console.log(items);
            $("#contenido").append("<tr>"+
            "<td>"+partido["fecha"]+"</td><td>"+partido["equipo1"]+"</td><td>"
            +partido.equipo2+"</td>"+"</tr>");
            }

        }
    }

}



// En principio el uso más lógico que podemos darle a estos atributos personalizados consiste en 
// generar desde una base de datos un código HTML con datos adicionales sin necesidad de recurrir a 
// elementos ocultos o notación legible para JavaScript.

// $("lia").click(function(event){
//     event.preventDefault();
//     if ($(this).data('Seleccion')!=null){
//         $("#contenedor").load('seleccion/'+$(this).data('seleccion')+'.html')
//     }
// });
