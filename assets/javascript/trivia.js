// start variable declaration

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var userChoice = "";
var questionDisplay = 0;
var audio;
var questionTimer = 20;
var completedQuestions = 0;
var responseImage = 0;
var showImage = 0;

// Questions Objects Variable


var questionOne = {
    question: "What color was the car that Adam and Barbara had?",
    responseOne: "White",
    responseTwo: "Blue",
    responseThree: "Yellow",
    responseFour: "Red",
    correctAnswer: "Yellow",
    image: "../images/question-1.gif"

};


var questionTwo = {
    question: "What color does Otho say Viridian is?",
    responseOne: "Blue/Purple",
    responseTwo: "Red/Orange",
    responseThree: "Blue/Green",
    responseFour: "Yellow",
    correctAnswer: "Blue/Green",
    image: "../images/question-2.gif"
};
var questionThree = {
    question: "Delia is an artist.",
    responseOne: "True",
    responseTwo: "False",
    correctAnswer: "True",
    image: "../images/question-3.gif"
};

var questionFour = {
    question: "What game does Beetlejuice play with Lydia to get her to guess his name?",
    answers: ["", "", "", ""],
    responseOne: "Charades",
    responseTwo: "Scrabble",
    responseThree: "20 Questions",
    responseFour: "Clue",
    correctAnswer: "Charades",
    image: "../images/question-4.gif"
};

var questionFive = {
    question: "Where did Adam and Barbara live?",
    responseOne: "Winter River, Pennsylvania",
    responseTwo: "Winter River, Maine",
    responseThree: "Winter River, New Hampshire",
    responseFour: "Winter River, Connecticut",
    correctAnswer: "Winter River, Connecticut",
    image: "../images/question-5.gif"
};

var questionSix = {
    question: "What is the name of Adam and Barbara's caseworker??",
    responseOne: "Jenna",
    responseTwo: "Jennifer",
    responseThree: "Juno",
    responseFour: "Julie",
    correctAnswer: "Juno",
    image: "../images/question-6.gif"
};


var questionSeven = {
    question: "Who takes credit for decorating Adam and Barbara's home?",
    responseOne: "Barbara",
    responseTwo: "Jane",
    responseThree: "Adam",
    responseFour: "Julie",
    correctAnswer: "Jane",
    image: "../images/question-7.gif"
};
var questionEight = {
    question: "What kind of food do the Deetzes have for dinner their first night in the house?",
    responseOne: "Mongolian",
    responseTwo: "Japanese",
    responseThree: "Cantonese",
    responseFour: "Fast Food",
    correctAnswer: "Cantonese",
    image: "../images/question-8.gif"

};
var questionNine = {
    question: "Do Lydia and Beetlejuice end up as a married couple at the end of the movie",
    responseOne: "Yes",
    responseTwo: "No",
    correctAnswer: "Yes",
    image: "../images/question-9.gif"
};
// Declared Questions array: 
var questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine];
// Declared Giphy images:

var images = ["assets/images/correct.gif", "assets/images/incorrect.gif", "assets/images/unanswered.gif"]


// on hover change background of possible answer
$(".answer").hover(function() {
    $(this).css("background-color", "blue");
}, function() {
    $(this).css("background-color", "black");
});

// reset function
function reset() {
    correctAnswers = 0;
    incorrectAnswers = 0;
    unanswered = 0;
    userChoice = "";
    questionDisplay = 0;
    questionTimer = 15;
    completedQuestions = 0;
}

// correct answer function
function correctResponse() {
    $("#image-holder").show();
    $(".timeTitle").hide();
    $(".triviaQuestion").hide();
    $("#textAreaOne").show();
    $("#textAreaTwo").show();
    $("#textAreaOne").html("Correct!");
    $("#textAreaTwo").html("Your answer of: " + questionArray[questionDisplay].correctAnswer + " was right");
    $("#answerOne").hide();
    $("#answerTwo").hide();
    $("#answerThree").hide();
    $("#answerFour").hide();
    responseImage = 0;
    displayImage();
    correctAnswers++;
    questionDisplay++;
    completedQuestions++;
    questionTimer = 18;
    setTimeout(nextQuestion, 3000);
}

// incorrect answer function
function incorrectResponse() {
    $("#image-holder").show();
    $(".timeTitle").hide();
    $(".triviaQuestion").hide();
    $("#textAreaOne").show();
    $("#textAreaTwo").show();
    $("#textAreaOne").html("Wrong!");
    $("#textAreaTwo").html("The correct answer is " + questionArray[questionDisplay].correctAnswer);
    $("#answerOne").hide();
    $("#answerTwo").hide();
    $("#answerThree").hide();
    $("#answerFour").hide();
    responseImage = 1;
    displayImage();
    incorrectAnswers++;
    questionDisplay++;
    completedQuestions++;
    questionTimer = 18;
    setTimeout(nextQuestion, 3000);

}


// no answer given
function noResponse() {
    $("#image-holder").show();
    $(".timeTitle").hide();
    $(".triviaQuestion").hide();
    $("#textAreaOne").show();
    $("#textAreaTwo").show();
    $("#textAreaOne").html("What?! You're too slow");
    $("#textAreaTwo").html("You didn't answer");
    $("#answerOne").hide();
    $("#answerTwo").hide();
    $("#answerThree").hide();
    $("#answerFour").hide();
    responseImage = 2;
    displayImage();
    unanswered++;
    questionDisplay++;
    completedQuestions++;
    questionTimer = 18;
    setTimeout(nextQuestion, 3000);
}

// change source of reaction image
function displayImage() {
    $("#image-holder").html("<img src=" + images[responseImage] + ">");
}

// countdown function
function startTimer() {
    var countdownTimer = setInterval(function() {
        questionTimer = questionTimer - 1;
        if (questionTimer < 0) {
            noResponse();
        }
        $("#timeKeeper").html("Time Remaining: " + questionTimer + " seconds");
    }, 1000);
}

// function to run the game
function nextQuestion() {
    $("#image-holder").hide();
    if (completedQuestions < 9) {
        $(".timeTitle").show();
        $(".triviaQuestion").show();
        $("#answerOne").show();
        $("#answerTwo").show();
        $("#answerThree").show();
        $("#answerFour").show();

        $("#textAreaOne").hide();
        $("#textAreaTwo").hide();
        $("#textAreaThree").hide();

        $(".triviaQuestion").html(questionArray[questionDisplay].question);
        $("#answerOne").html(questionArray[questionDisplay].responseOne);
        $("#answerTwo").html(questionArray[questionDisplay].responseTwo);
        $("#answerThree").html(questionArray[questionDisplay].responseThree);
        $("#answerFour").html(questionArray[questionDisplay].responseFour);
        $("#countdown").html(questionTimer);
        console.log(completedQuestions);
    }

    if (completedQuestions === 9) {
        endGame();
    }

}

function endGame() {
    $(function() {
        $('#restart').removeClass('hidden');
    });
    $("#image-holder").hide();
    $("#answerThree").hide();
    $("#textAreaThree").show();
    $(".triviaQuestion").html("You have complete the Game of Thrones");
    $("#textAreaOne").html("Correct Answers: " + correctAnswers);
    $("#textAreaTwo").html("Incorrect Answers: " + incorrectAnswers);
    $("#textAreaThree").html("Unanswered Questions: " + unanswered);
    setTimeout(reset, 500);
}

// to play audio upon starting the game
var x = document.getElementById("myAudio");

function playAudio() {
    x.play();
}

function pauseAudio() {
    x.pause();
}

// Loops the audio
audio = $("audio");
audio.loop = true;

// Running the games
$("#startButton").on("click", function() {
    startTimer();
    nextQuestion();
    playAudio();
    x.loop = true;
    $(this).hide();

})

// Running the restart button
$("#restart").on("click", function() {
    questionTimer = 15;
    $("#restart").addClass("hidden");
    nextQuestion();
})

// Gameplay
$(".answer").on("click", function() {
    userChoice = $(this).html();
    console.log(userChoice);
    if (userChoice === questionArray[questionDisplay].correctAnswer) {
        correctResponse();
        return;
    }
    if (userChoice !== questionArray[questionDisplay].correctAnswer) {
        incorrectResponse();
        return;
    }
})