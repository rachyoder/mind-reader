var currentState = 0;
var states = ["home", "pick num", "add", "subtract", "symbol", "end"];

var bigText = document.querySelector(".bigText");
var nextBtn = document.getElementById("nextBtn");
var smallText = document.querySelector(".smallText");
var resetBtn = document.getElementById("resetBtn");

nextBtn.addEventListener("click", changeState());

function changeState() {
    
    switch (states[currentState]) {

        case "home": 
            bigText.textContent = "I can read your mind";
            nextBtn.style.visibility = 'visible';
            nextBtn.textContent = "Next";
            resetBtn.textContent = "GO";
            currentState = 1;
            break;
        
        case "pick num": 
            bigText.textContent = "Pick a number between 01 - 99";
            nextBtn.style.visibility = 'visible';
            nextBtn.textContent = "Next";
            smallText.textContent = "When you have picked your number hit \'Next\'";
            resetBtn.textContent = "Reset";
            currentState = 2;
            break;
        
        case "add": 
            bigText.textContent = "Add both digits together to get a new number";
            nextBtn.style.visibility = 'visible';
            nextBtn.textContent = "Next";
            smallText.textContent = "Ex: 42 is 4 + 2 = 6 <br>Ex: 06 is 0 + 6 = 6";
            resetBtn.textContent = "Reset";
            currentState = 3;
            break;
        
        case "subtract": 
            bigText.textContent = "Subtract your new number from the original number";
            nextBtn.style.visibility = 'visible';
            nextBtn.textContent = "Next";
            smallText.textContent = "Ex: 42 - 6 = 36 <br>Ex: 06 - 6 = 0";
            resetBtn.textContent = "Reset";
            currentState = 4;
            break;
        
        case "symbol": 
            bigText.textContent = "Filler Content";
            nextBtn.style.visibility = 'visible';
            nextBtn.textContent = "Reveal";
            smallText.textContent = "Find your new number<br>Take note of the symbol beside your number";
            resetBtn.textContent = "Reset";
            currentState = 5;
        
        case "end": 
            bigText.textContent = "Your Symbol Goes here";
            nextBtn.style.visibility = 'hidden';
            smallText.textContent = "Your symbol is: "
            resetBtn.textContent = "Reset";
        
    }
}