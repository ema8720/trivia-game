$("#start").on("click", function() {
    $("#start").remove();
    game.loadQuestion();
})

$(document).on('click', '.answer-button', function(e) {
    game.clicked(e);
})
$(document).on('click', '#reset', function() {
    game.reset();
})

var questions = [{
    question: "What color was the car that Adam and Barbara had?",
    answers: ["White", "Blue", "Yellow", "Red"],
    correctAnswer: "Yellow",
    image: "../images/yellow-giphy.gif"

}, {
    question: "What color does Otho say Viridian is?",
    answers: ["Blue/Purple", "Red/Orange", "Blue/Green", "Yellow"],
    correctAnswer: "Blue/Green",
    image: ""


}, {
    question: "Delia is an artist.",
    answers: ["True", "False"],
    correctAnswer: "True",
    image: ""

}, {
    question: "What game does Beetlejuice play with Lydia to get her to guess his name?",
    answers: ["Charades", "Scrabble", "20 Questions", "Clue"],
    correctAnswer: "Charades",
    image: ""

}, {
    question: "Where did Adam and Barbara live?",
    answers: ["Winter River, Pennsylvania", " Winter River, Maine", "Winter River, New Hampshire", "Winter River, Connecticut"],
    correctAnswer: "Winter River, Connecticut",
    image: ""


}, {
    question: "What is the name of Adam and Barbara's caseworker??",
    answers: ["Jenna", "Jennifer", "Juno", "Julie"],
    correctAnswer: "Juno",
    image: ""


}, {
    question: "Who takes credit for decorating Adam and Barbara's home?",
    answers: ["Barbara", "Jane", "Adam", "Delia"],
    correctAnswer: "Jane",
    image: ""
}, {
    question: "What kind of food do the Deetzes have for dinner their first night in the house?",
    answers: ["Mongolian", "Japanese", "Cantonese", "Fast Food"],
    correctAnswer: "Cantonese",
    image: ""
}, {
    question: "Do Lydia and Beetlejuice end up as a married couple at the end of the movie",
    answers: ["Yes", "No"],
    correctAnswer: "Yes",
    image: ""
}];

var game = {
    questions: questions,
    currentQuestion: 0,
    counter: 30,
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    countdown: function() {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            console.log("TIMES UP!");
            game.timeUp();
        }
    },
    loadQuestion: function() {
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').html("<h2>TIME REMAINING <span id= 'counter'>30</span> Seconds</h2>");
        $("#subwrapper").append("<h2>" + questions[game.currentQuestion].question + "</h2>");
        for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            $('#subwrapper').append('<button class= "answer-button" id="button-' + i + '" data-name="' + questions[game.currentQuestion].answers[i] + '">' + questions[game.currentQuestion].answers[i] + '</button>');

        }
    },
    nextQuestion: function() {
        game.counter = 30;
        $('#counter').html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },
    timeUp: function() {
        clearInterval(timer);
        game.unanswered++;
        $('#subwrapper').html('<h2>OUT OF TIME!</h2>');
        $('#subwrapper').append('<h3>The correct answer was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    results: function() {
        clearInterval(timer);
        $('#subwrapper').html('<h2>All DONE!</h2>');
        $('#subwrapper').append("<h3>Correct: " + game.correct + "</h3>");
        $('#subwrapper').append("<h3>Incorrect " + game.incorrect + "</h3>");
        $('#subwrapper').append("<h3>Unanswered " + game.unanswered + "</h3>");
        $('#subwrapper').append("<button id = 'reset'>RESET</button>");
    },
    clicked: function(e) {
        clearInterval(timer);
        if ($(e.target).data('name') === questions[game.currentQuestion].correctAnswer) {
            game.answeredCorrectly();
        } else {
            game.answeredIncorrectly();
        }
    },
    answeredCorrectly: function() {
        console.log("You Got it!");
        clearInterval(timer);
        game.correct++;
        $("#subwrapper").html('<h2>YOU GOT IT RIGHT!</h2>');
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    answeredIncorrectly: function() {
        console.log("Wrong!");
        clearInterval(timer);
        game.incorrect++;
        $("#subwrapper").html('<h2>YOU GOT IT WRONG!</h2>');
        $('#subwrapper').append('<h3>The correct answer was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    reset: function() {
        game.currentQuestion = 0;
        game.counter = 0;
        game.correct = 0;
        game.incorrect = 0;
        game.unanswered = 0;
        game.loadQuestion();

    }
}