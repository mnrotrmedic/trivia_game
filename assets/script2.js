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

];
$(document).ready(function () {

    var answerDriver;
    var randomNum;
    var timer = 5;


    getRandomNum();
    writeQandA();
    gameClock();

    function getRandomNum() {
        // Pick a random number
        randomNum = Math.floor(Math.random() * questions.length);

    };

    function newQuestion() {
        $("btn").remove();
        getRandomNum();

        writeQandA();
    }

    function writeQandA() {
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
    console.log("Q: " + questions[randomNum])
    // Clicks won't log still, attribute undefined due to randomNum
    $(document).on("click", ".btn", function () {
        var myGuess = ($(this).attr("answerClick"));
        if (myGuess == questions[randomNum].rightAnswer) {
            // correct++;
            $("#question").empty();
            questions[randomNum].splice(randomNum, 1);
            newQuestion();
        }
        else {
            // wrong ++;
            $("#question").empty();
            questions[randomNum].splice(randomNum, 1);
            newQuestion();
        }
    });


    function gameClock() {
        // var timer = 10
        setInterval(function () {
            $("#timer").text(timer + " Seconds");
            timer--;
        }, 1000);
        if (timer == 0) {
            // clearInterval(gameClock);
            newQuestion();
        }
    };



    // $(document).on("click", ".btn", function () {
    //     console.log(order[i]);













});