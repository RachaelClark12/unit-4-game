$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var score = 0;

    var randomNumber = 0;

    var crystalOne = 0;
    var crystalTwo = 0;
    var crystalThree = 0;
    var crystalFour = 0;

    function updateScreen() {
        $(".score").text(score);
        $(".wins").text(+ wins);
        $(".losses").text( +losses);
    }

    //1. Assign and display values
    function startGame() {
        //Assign random value to target number
        randomNumber = Math.floor(Math.random() * (121 - 19)) + 19;
        console.log(randomNumber);
        $(".random-number").text(randomNumber);
        //Assign random values to each crystal
        crystalOne = Math.floor(Math.random() * (13 - 1)) + 1;
        crystalTwo = Math.floor(Math.random() * (13 - 1)) + 1;
        crystalThree = Math.floor(Math.random() * (13 - 1)) + 1;
        crystalFour = Math.floor(Math.random() * (13 - 1)) + 1;
    }

    //2. Alert value to player and increase score
    function playGame() {
        $(".crystal-one").on("click", function () {
            alert("Crystal Value:" + " " + crystalOne);
            //Add values upon each click
            score += crystalOne;
            //Display score on screen
            updateScreen();
            //completeGame();
            setTimeout(completeGame, 5000);
        });

        $(".crystal-two").on("click", function () {
            alert("Crystal Value:" + " " + crystalTwo);
            //Add values upon each click
            score += crystalTwo;
            //Display score on screen
            updateScreen();
            //completeGame();
            setTimeout(completeGame, 5000);
        });

        $(".crystal-three").on("click", function () {
            alert("Crystal Value:" + " " + crystalThree);
            //Add values upon each click
            score += crystalThree;
            //Display score on screen
            updateScreen();
            setTimeout(completeGame, 5000);
        });

        $(".crystal-four").on("click", function () {
            alert("Crystal Value:" + " " + crystalFour);
            //Add values upon each click
            score += crystalFour;
            //Display score on screen
            updateScreen();
            //completeGame();
            setTimeout(completeGame, 5000);
        });

    }

    //3. Complete Game
    function completeGame() {
        //Win: Value is equal to random number
        if (score === randomNumber) {
            alert("You Win!")
            wins++;
            $(".wins").append(wins);
            resetGame();
        }
        //Lose: Value is greater than random number
        else if (score > randomNumber) {
            alert("You Lose!")
            losses++;
            $(".losses").append(losses);
            resetGame();
        }
    }


    //4. Reset Game
    function resetGame() {
        score = 0;
        updateScreen();
        startGame();
    }

    //Game
    startGame()
    updateScreen();
    playGame();






});