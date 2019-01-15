var questions = [
    {
        question: 'Which blood type is known as the "Universal Donor"?',
        answers: ["O-", "A+", "B-", "O+", "AB+"],
        rightAnswer: "O-",
    },
    {
        question: 'Which blood type is known as the "Universal Recipient and can use blood from any donor?',
        answers: ["AB+", "A+", "B-", "O+", "O-"],
        rightAnswer: "AB+",
    },
    {
        question: "How many different blood types are there?",
        answers: ["4", "8", "6", "12", "18"],
        rightAnswer: "4",
    },
    {
        question: "What's the rarest type of blood?",
        answers: ["A", "B", "O", "AB"],
        rightAnswer: "AB",
    },
    {
        question: "another random question",
        answers: ["right", "B", "O", "AB"],
        rightAnswer: "right",
    },
    {
        question: "How many units of blood are needed in the US on a daily basis?",
        answers: ["100,000", "36,000", "63,000", "1,800"],
        rightAnswer: "36,000",
    },

];
var answerDriver;
var randomNum;
var timer = 5;
var numRight = 0;
var gameGo;
$(document).ready(function () {



    getRandomNum();
    writeQandA();
    // gameClock();

    function getRandomNum() {
        // Pick a random number
        randomNum = Math.floor(Math.random() * questions.length);

    };

    function newQuestion() {
        if (questions.length > 0) {
            $("btn").remove();
            getRandomNum();
            $("#right").text(numRight);
            writeQandA();
            timer = 5;
        }
        else {
            $("#qSpace").remove();
            console.log("done");
            clearInterval(gameGo);
            // $("#qSpace").html(
            //     "<h1 class = 'jumbotron jumbotron-fluid justify-content-center'>Game Over</h1>"+
            //     "<h3>'Let's see how you did'</h3>"+
            //     "<h4>'You got ' + numRight + 'right!'</h4>"
            // );
        }
    }

    function writeQandA() {
        $("#right").text(numRight);
        // Pull question
        var workingQuestion = questions[randomNum].question;
        // Mark question to DOM
        $("#question").text(workingQuestion);

        // Pull relevent answers
        questions[randomNum].answers.forEach(function (element) {
            // For each possible answer make an HTML btn element
            var answerButton = $("<btn>");
            // Add Bootstrap classes for the pretty
            answerButton.addClass("btn btn-primary btn-block")
            // Put the answers on the buttons
            answerButton.text(element);
            // Give the buttons elements
            answerButton.attr("answerClick", element);
            // Put the button with the stuff on the page
            $(".answerRow").append(answerButton);
        });
    };

    // Clicks won't log still, attribute undefined due to randomNum
    $(document).on("click", ".btn", function () {
        var myGuess = ($(this).attr("answerClick"));
        if (myGuess == questions[randomNum].rightAnswer && questions.length > 0) {
            // correct++;
            $("#question").empty();
            questions.splice(randomNum, 1);
            newQuestion();
            numRight++;
        }
        else if (myGuess != questions[randomNum].rightAnswer && questions.length > 0) {
            // wrong ++;
            $("#question").empty();
            questions.splice(randomNum, 1);
            newQuestion();
        }

        else {
            console.log("done)");
        }
    });


    function gameClock() {
        timer = 5
        setInterval(gameGo, 1000);
        function gameGo() {
            if (timer === 0) {
                newQuestion();
            }
            if (timer > 0) {
                timer--;
            }
            $("#timer").text(timer + " Seconds");
        };
    };






});