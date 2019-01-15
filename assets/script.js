$(document).ready(function () {

    var questionArray = [
        'Which blood type is known as the "Universal Donor"?',
        'Which blood type is known as the "Universal Recipient and can use blood from any donor?',
        "How many different blood types are there?",
        "What's the rarest type of blood?",
        "Question",
    ];

    var answerArray = [
        ["O-", "A+", "B-", "O+", "AB+"],
        ["AB+", "A+", "B-", "O+", "O-",],
        ["4", "8", "6", "12", "18"],
        ["A", "B", "O", "AB"],
        ["A", "B", "O", "AB"],

    ];

    var rightAnswer = [
        "O-", "AB+", "4", "AB", "B"
    ];
    var randomNum = Math.floor(Math.random() * questionArray.length);
    var correct = 0;
    var wrong = 0; 
    var timer = 40;
    var workingQuestion = questionArray[randomNum];

    test();
    getQuestion();
    getAnswers();
    // gameClock();

    function test() {
        // console.log("Random Number: " + randomNum);
        // console.log("Chosen Question: " + questionArray[randomNum]);
        // console.log("Possible answers: " + answerArray[randomNum]);
        console.log("Correct Answer: " + rightAnswer[randomNum]);
        
    }

    function getQuestion() {
        $("#question").text(workingQuestion);
    };
    
    function getAnswers() {
        answerArray[randomNum].forEach(function (element) {
            var answerButton = $("<btn>");
            answerButton.addClass("btn btn-primary btn-block")
            answerButton.text(element);
            answerButton.attr("answerClick", element);
            $(".answerRow").append(answerButton);
        });
    };
    
    function next() {
        
    }
    
    $(document).on("click", ".btn", function () {
        var myGuess = ($(this).attr("answerClick"));
        if (myGuess == rightAnswer[randomNum]) {
            // console.log("awesomeSauce");
            correct++;
            questionArray.splice(randomNum, 1);
            
        }
        else {
            // console.log("shame");
            wrong ++;
            questionArray.splice([randomNum], 1);
            
            
        }
    });




    // function gameClock() {
    //     setInterval(function () {
    //         $("#timer").text(timer + " Seconds");
    //         timer--;
    //     }, 1000)
    // };

    // $(document).on("click", ".btn", function () {
    //     console.log(order[i]);

})