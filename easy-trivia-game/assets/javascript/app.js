$('#start').on('click', function() {
    //$("#subwrapper").remove();
    // $("#start").remove();
    // Creat a function that will take in a for loop
    // for (var i = 0; i < questions.length; i++) {
    //   $("#subwrapper").append('<h2>' + questions[i].question + '</h2>');
    //  for (var j = 0; j < questions[i].answers.length; j++) {
    //      $("#subwrapper").append("<input type= 'radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
    //   }
    // }
    game.start();
})
$(document).on('click', '#end', function() {
    game.done();
})


var questions = [{
    question: "In what decade is the Netflix original series set?",
    answers: ["1980S", "1970S", "1990S", "1960S"],
    correctAnswer: "1980S",
    image: ""
}, {
    question: "Where does Season 1's suspenseful opening scene take place??",
    answers: ["laboratory", "Spaceship", "The Byers' House", "A creepy farm in the middle of nowhere"],
    correctAnswer: "laboratory",
    image: ""

}, {
    question: "The chilling first Season 1 scene is a reference to which of these prominent '80s sci-fi films?",
    answers: ["Star Wars", "Alien", "Blade Runner", "Close Encounters of The third Kind"],
    correctAnswer: "Alien",
    image: ""

}, {
    question: "Where does the story occur?",
    answers: ["Kansas", "Indiana", "Mississipi", "Oklahoma"],
    correctAnswer: "Indiana",
    image: ""

}, {
    question: "Name the game that the boys are always playing.",
    answers: ["Dungeons & Dragons", "Super Mario Bros", "The Legend of Zelda", "Pac-Man"],
    correctAnswer: "Dungeons & Dragons",
    image: ""

}, {
    question: "What is the girl with weird powers, Character's name",
    answers: ["Barb", "Eleven", "Millie", "Nancy"],
    correctAnswer: "Eleven",
    image: ""

}, {
    question: "What is El's favorite food is ____",
    answers: ["Eggos", "Twinkies", "Pop-Tarts"],
    correctAnswer: "Eggos",
    image: ""
}, {
    question: "Which of these sci-fi/fantasy movies does 'Stranger Things' draw from?",
    answers: ["Supper", "Star Wars", "E.T.", "All of Them"],
    correctAnswer: "All of Them",
    image: ""

}, {
    question: "Name the actress who plays this character.?",
    answers: ["Winona Ryder", "Lena Heady", "Katie Mcgrath", "Ashley Judd"],
    correctAnswer: "Winona Ryder",
    image: ""

}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function() {
        game.counter--;
        $("#counter").html(game.counter)
        if (game.counter <= 0) {
            console.log("Time is up!")
            game.done();
        }

    },
    start: function() {
        timer = setInterval(game.countdown, 1000);
        $("#subwrapper").prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
        $("#start").remove();
        // Creat a function that will take in a for loop
        for (var i = 0; i < questions.length; i++) {
            $("#subwrapper").append('<h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type= 'radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }

        }
        $("#subwrapper").append('<br><button id="end">DONE</button>')
    },
    done: function() {
        $.each($('input[name=question-0]":checked'), function() {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name=question-1]":checked'), function() {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name=question-2]":checked'), function() {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name=question-3]":checked'), function() {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name=question-4]":checked'), function() {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name=question-5]":checked'), function() {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name=question-6]":checked'), function() {
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name=question-7]":checked'), function() {
            if ($(this).val() == questions[7].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name=question-8]":checked'), function() {
            if ($(this).val() == questions[8].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name=question-9]":checked'), function() {
            if ($(this).val() == questions[9].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        this.result();
    },
    result: function() {
        clearingInterval(timer);
        $('#subwrapper h2').remove();
        $('#subwrapper').html("<h2>All Done!</h2>");
        $('#subwrapper').append("<h3>Correct Answer:" + this.correct + "</h3>")
        $('#subwrapper').append("<h3>Incorrect Answer:" + this.incorrect + "</h3>")
        $('#subwrapper').append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }
}