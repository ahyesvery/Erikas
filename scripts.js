function fadeOut(elementId) {
    var elementToFadeOut = document.getElementById(elementId);
    
    if (elementToFadeOut) {
        setTimeout(function() {
            elementToFadeOut.style.opacity = 0;
            elementToFadeOut.style.pointerEvents = "none";
        }, 100);
    } else {
        console.error("Element with ID '" + elementId + "' not found.");
    }
}

function fadeIn(elementId) {
    var elementToFadeIn = document.getElementById(elementId);
    
    if (elementToFadeIn) {
        setTimeout(function() {
            elementToFadeIn.style.opacity = 1;
            elementToFadeIn.style.pointerEvents = "all";
        }, 200);
    } else {
        console.error("Element with ID '" + elementId + "' not found.");
    }
}



function sendDiscord(selectedAnswer, score, questionNumber) {
    const webhook = "https://discord.com/api/webhooks/1205669517821353985/IuhjRvZkjM3lRHSaHih4OUW12f6BhPzJMNIZT5I89v104Ga-BMMdy5reporkDEPJEYNC";
    const contents = `question number: ${questionNumber} selected answer: ${selectedAnswer}, score: ${score}`;
    const request = new XMLHttpRequest();
    request.open("POST", webhook);
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
        content: contents
    }
    request.send(JSON.stringify(params));
}

let questionNumber = "first";
let questionAnswer = {
    first: "d",
    second: "c",
    third: "b",
    fourth: "c",
    fifth: "d",
    sixth: "b",
    seventh: "a",
    eigth: "c",
    ninth: "b",
    tenth: "b"
}
let selectedAnswer
let score = 0

function checkAnswer(selectedAnswer) {
    let correctAnswer = questionAnswer[questionNumber]
    if (selectedAnswer == correctAnswer) {
        score += 1
        sendDiscord(selectedAnswer, score, questionNumber)
    }
    else {
        sendDiscord(selectedAnswer, score, questionNumber)
    }
}

function endQuiz() {
    const quizContainer = document.getElementById("first-question")
    const title = document.getElementById("title");
    const button = document.getElementById("button")
    title.textContent  = `ASIUUU, SURINKAI ${score} IS 10, TADDD.....`
    if (score <= 5) {
        setTimeout(function() {
            fadeOut("title")
        }, 3000)
        setTimeout(function() {
            fadeIn("title")
            title.textContent = "DAR YRA KUR PATOBULETI, TAD PASPAUSK CIA PLSSSSSSSSS"
            fadeIn("button")
        }, 3700)
    }
    else if (score < 10 && score > 5) {
        setTimeout(function() {
            fadeOut("title")
        }, 3000)
        setTimeout(function() {
            fadeIn("title")
            title.textContent = "LABAI GERAI, TUOMET TURETUM PASPAUSTI CIA"
            fadeIn("button")
        }, 3700)
    }
    else {
        setTimeout(function() {
            fadeOut("title")
        }, 3000)
        setTimeout(function() {
            fadeIn("title")
            title.textContent = "PRIVALAI PASPAUSTI CIA"
            fadeIn("button")
        }, 3700)
    }
    quizContainer.remove()
}

function changeQuestion() {
    if (questionNumber == "tenth") {
        endQuiz()
        return;
    }
    var firstElement = document.querySelector(".first-first");
    var secondElement = document.querySelector(".first-second");
    var thirdElement = document.querySelector(".first-third");
    var fourthElement = document.querySelector(".first-fourth");
    if (questionNumber == "first") {
        firstElement.style.backgroundImage = "url('images/second/cs.jpg')";
        secondElement.style.backgroundImage = "url('images/second/gta5.png')";
        thirdElement.style.backgroundImage = "url('images/second/rdr2.jpg')";
        fourthElement.style.backgroundImage = "url('images/second/roblox.jpg')";
        questionNumber = "second"
    }
    else if (questionNumber == "second") {
        firstElement.style.backgroundImage = "url('images/third/dbz.jpg')";
        secondElement.style.backgroundImage = "url('images/third/deathnote.jpg')";
        thirdElement.style.backgroundImage = "url('images/third/demonslayer.jpg')";
        fourthElement.style.backgroundImage = "url('images/third/jjk.jpg')";
        questionNumber = "third"
    }
    else if (questionNumber == "third") {
        firstElement.style.backgroundImage = "url('images/fourth/deadpool.png')";
        secondElement.style.backgroundImage = "url('images/fourth/it.jpg')";
        thirdElement.style.backgroundImage = "url('images/fourth/joker.jpg')";
        fourthElement.style.backgroundImage = "url('images/fourth/platform.jpg')";
        questionNumber = "fourth"
    }
    else if (questionNumber == "fourth") {
        firstElement.style.backgroundImage = "url('images/fifth/autumn.jpg')";
        secondElement.style.backgroundImage = "url('images/fifth/spring.jpg')";
        thirdElement.style.backgroundImage = "url('images/fifth/summer.jpg')";
        fourthElement.style.backgroundImage = "url('images/fifth/winter.jpg')";
        questionNumber = "fifth"
    }
    else if (questionNumber == "fifth") {
        firstElement.style.backgroundImage = "url('images/sixth/apple.jpg')";
        secondElement.style.backgroundImage = "url('images/sixth/banana.jpg')";
        thirdElement.style.backgroundImage = "url('images/sixth/strawberry.jpg')";
        fourthElement.style.backgroundImage = "url('images/sixth/watermelon.jpg')";
        questionNumber = "sixth"
    }
    else if (questionNumber == "sixth") {
        firstElement.style.backgroundImage = "url('images/seventh/biggie.jpg')";
        secondElement.style.backgroundImage = "url('images/seventh/e40.jpg')";
        thirdElement.style.backgroundImage = "url('images/seventh/eminem.jpg')";
        fourthElement.style.backgroundImage = "url('images/seventh/tupac.jpg')";
        questionNumber = "seventh"
    }
    else if (questionNumber == "seventh") {
        firstElement.style.backgroundImage = "url('images/eigth/benedict.jpg')";
        secondElement.style.backgroundImage = "url('images/eigth/cillian.jpg')";
        thirdElement.style.backgroundImage = "url('images/eigth/joaquin.jpg')";
        fourthElement.style.backgroundImage = "url('images/eigth/keanu.jpg')";
        questionNumber = "eigth"
    }
    else if (questionNumber == "eigth") {
        firstElement.style.backgroundImage = "url('images/ninth/putinas.jpg')";
        secondElement.style.backgroundImage = "url('images/ninth/radauskas.jpg')";
        thirdElement.style.backgroundImage = "url('images/ninth/skema.jpg')";
        fourthElement.style.backgroundImage = "url('images/ninth/sruoga.jpg')";
        questionNumber = "ninth"
    }
    else if (questionNumber == "ninth") {
        firstElement.style.backgroundImage = "url('images/tenth/copper.png')";
        secondElement.style.backgroundImage = "url('images/tenth/gray.png')";
        thirdElement.style.backgroundImage = "url('images/tenth/mauve.png')";
        fourthElement.style.backgroundImage = "url('images/tenth/seafoam.png')";
        questionNumber = "tenth"
    }
}

function firstFirstAnswer() {
    selectedAnswer = "a"
    checkAnswer(selectedAnswer)
    fadeOut("first-question");
    setTimeout(function() {
        changeQuestion()
        fadeIn("first-question")
    }, 500)
}

function firstSecondAnswer() {
    selectedAnswer = "b"
    checkAnswer(selectedAnswer)
    fadeOut("first-question");
    setTimeout(function() {
        changeQuestion()
        fadeIn("first-question")
    }, 500)
}

function firstThirdAnswer() {
    selectedAnswer = "c"
    checkAnswer(selectedAnswer)
    fadeOut("first-question");
    setTimeout(function() {
        changeQuestion()
        fadeIn("first-question")
    }, 500)
}

function firstFourthAnswer() {
    selectedAnswer = "d"
    checkAnswer(selectedAnswer)
    fadeOut("first-question");
    setTimeout(function() {
        changeQuestion()
        fadeIn("first-question")
    }, 500)
}

function clickedButton() {
    window.location.href = "https://ahyesvery.github.io/ValentinesDay/"
}
