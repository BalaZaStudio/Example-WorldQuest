$(document).ready(function () {
    var totalQuestions = 2; // Cambiar esto si agregas más preguntas
    var correctAnswers = ['c', 'a']; // Respuestas correctas, ordenadas según el orden de las preguntas.

    $('#submit-btn').click(function () {
        var userAnswers = [];
        var score = 0;

        // Obtener las respuestas del usuario
        for (var i = 1; i <= totalQuestions; i++) {
            var selectedOption = $('input[name=q' + i + ']:checked').val();
            if (selectedOption) {
                userAnswers.push(selectedOption);
            }
        }

        // Calcular el puntaje
        for (var j = 0; j < userAnswers.length; j++) {
            if (userAnswers[j] === correctAnswers[j]) {
                score++;
            }
        }

        // Mostrar el resultado
        var resultMessage = "Tu puntaje: " + score + " de " + totalQuestions;
        $('#result-container').text(resultMessage);
    });
});
