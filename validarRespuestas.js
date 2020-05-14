var userInput = [];
var solucion = [];
solucion[0] = "Verde, rojo y amarillo";
solucion[1] = "Saturno";
solucion[2] = "Bucarest";
solucion[3] = "Indonesia";
solucion[4] = "Volgogrado";
solucion[5] = "1912";
solucion[6] = "118";
solucion[7] = "Kabul";
solucion[8] = "Inglaterra";
solucion[9] = "Tokyo";
var completado = false;

function getScore() {
    var score = 0;
    var numQuestions = 10;
    var form = document.getElementById('quiz');

    userInput[0] = quiz.primeraPregunta.value;
    userInput[1] = quiz.segundaPregunta.value;
    userInput[2] = quiz.terceraPregunta.value;
    userInput[3] = quiz.cuartaPregunta.value;
    userInput[4] = quiz.quintaPregunta.value;
    userInput[5] = quiz.sextaPregunta.value;
    userInput[6] = quiz.septimaPregunta.value;
    userInput[7] = quiz.octavaPregunta.value;
    userInput[8] = quiz.novenaPregunta.value;
    userInput[9] = quiz.decimaPregunta.value;

    for (var i = 0; i < numQuestions; i++) {
        console.log(userInput[i]);
        if (userInput[i] === solucion[i]) {
            score += 1;
        } 
        if (userInput[i] === ""){
            alert("Por favor, responde a todas las preguntas."); 
            completado = false; 
            break;
        } 
    }
    completado = i===numQuestions?true:false;

    return score;
} 

function returnScore() {
    alert("Tu puntuación fue de " + getScore() + "/10");
    if(completado == true){
        var confirmacion = confirm("¿Deseas ser redireccionado a la página de respuestas?");
            if (confirmacion === true) {
                window.open("SolucionPreguntas.html",'_blank');
            } else {
                if (confirm("Ir a la página de los columpios") == true) {
                    window.open("Pagina_Columpios.html",'_blank');
                } else false;
            }
    } 
}

// export function getScore() ;