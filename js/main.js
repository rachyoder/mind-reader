var currentState = 0;
var states = ["home", "pick num", "add", "subtract", "symbol", "end"];
var symbols = ["!", "@", "#", "$", "%", "*", "&"];
var numbers = [];
var previousSymbol

var bigText = document.querySelector(".bigText");
var nextBtn = document.getElementById("nextBtn");
var smallText = document.querySelector(".smallText");
var resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", resetState);
nextBtn.addEventListener("click", changeState);

function randomInt(int) {
    return Math.floor(Math.random() * Math.floor(int));
}
function resetState() {
    currentState = 0;
    renderState();
}
function changeState() {
    currentState++;
    renderState();
}
function renderState() {
    
    switch (states[currentState]) {

        case "home": 
            bigText.textContent = "I can read your mind";
            nextBtn.style.visibility = 'visible';
            resetBtn.style.visibility = 'hidden';
            smallText.style.visibility = 'hidden';
            nextBtn.textContent = "Next";
            resetBtn.textContent = "GO";
            break;
        
        case "pick num": 
            bigText.textContent = "Pick a number between 01 - 99";
            nextBtn.style.visibility = 'visible';
            smallText.style.visibility = 'visible';
            resetBtn.style.visibility = 'visible';
            nextBtn.textContent = "Next";
            smallText.textContent = "When you have picked your number hit \'Next\'";
            resetBtn.textContent = "Reset";
            break;
        
        case "add": 
            bigText.textContent = "Add both digits together to get a new number";
            nextBtn.style.visibility = 'visible';
            smallText.style.visibility = 'visible';
            resetBtn.style.visibility = 'visible';
            nextBtn.textContent = "Next";
            smallText.textContent = "Ex: 42 is 4 + 2 = 6";
            resetBtn.textContent = "Reset";
            break;
        
        case "subtract": 
            bigText.textContent = "Subtract your new number from the original number";
            nextBtn.style.visibility = 'visible';
            smallText.style.visibility = 'visible';
            resetBtn.style.visibility = 'visible';
            nextBtn.textContent = "Next";
            smallText.textContent = "Ex: 42 - 6 = 36";
            resetBtn.textContent = "Reset";
            break;
        
        case "symbol": 
            bigText.innerHTML = "";
            do {
                numSymbolNine = symbols[randomInt(symbols.length)];
            } while (numSymbolNine === previousSymbol);
            for (i = 0; i < 100; i++) {
                if (i % 9 == 0) {
                    numSymbolNineString = i + " - " + numSymbolNine + "<br>";
                    numbers.push(numSymbolNineString);
                    bigText.innerHTML += numSymbolNineString;
                } else {
                    numSymbol = i + " - " + symbols[randomInt(symbols.length)] + "<br>";
                    numbers.push(numSymbol);
                    bigText.innerHTML += numSymbol;
                }
            }
            nextBtn.style.visibility = 'visible';
            smallText.style.visibility = 'visible';
            resetBtn.style.visibility = 'visible';
            nextBtn.textContent = "Reveal";
            smallText.textContent = "Find your new number";
            resetBtn.textContent = "Reset";
            break;
        case "end": 
            previousSymbol = numSymbolNine;
            bigText.textContent = numSymbolNine;
            nextBtn.style.visibility = 'hidden';
            smallText.style.visibility = 'visible';
            resetBtn.style.visibility = 'visible';
            smallText.textContent = "Your symbols is: " + numSymbolNine;
            resetBtn.textContent = "Reset";
            break;
    }
}
renderState();