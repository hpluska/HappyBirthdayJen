window.requestAnimationFrame(moveLetters);

document.body.style.backgroundColor = "black";
var xPos = 5, yPos= 5, spacing =2, dDelta, xDelta, yDelta;
var L1 = new letter(xPos*1.5, yPos, "H", "yellow", 50);
var L2 = new letter(xPos*2.5 + spacing, yPos, "a", "red", 25);
var L3 = new letter(xPos*3.5 + spacing*2, yPos, "P", "green", 0);
var L4 = new letter(xPos*4.5 + spacing*3, yPos, "P", "blue", 0);
var L5 = new letter(xPos*5.5 + spacing*4, yPos, "y", "orange", 30);

var L6 = new letter(xPos*.5 + spacing, yPos*3.3, "b", "pink", 30);
var L7 = new letter(xPos*1.5 + spacing*2, yPos*3.3, "I", "lime", 50);
var L8 = new letter(xPos*2.5 + spacing*3, yPos*3.3, "r", "aqua", 0);
var L9 = new letter(xPos*3.5 + spacing*4, yPos*3.3, "T", "olive", 10);
var L10 = new letter(xPos*4.5 + spacing*5, yPos*3.3, "H", "blue", 50);
var L11 = new letter(xPos*5.5 + spacing*6, yPos*3.3, "d", "fuchsia", 0);
var L12 = new letter(xPos*6.5 + spacing*7, yPos*3.3, "A", "orange", 25);
var L13 = new letter(xPos*7.5 + spacing*8, yPos*3.3, "Y", "green", 0);

var L14 = new letter(xPos*3 + spacing*1, yPos*5.5, "j", "red", 50);
var L15 = new letter(xPos*4 + spacing*2, yPos*5.5, "E", "lime", 0);
var L16 = new letter(xPos*5 + spacing*3, yPos*5.5, "n", "purple", 25);

function moveLetters(){
    L1.moveLetter();
    L2.moveLetter();
    L3.moveLetter();
    L4.moveLetter();
    L5.moveLetter();
    L6.moveLetter();
    L7.moveLetter();
    L8.moveLetter();
    L9.moveLetter();
    L10.moveLetter();
    L11.moveLetter();
    L12.moveLetter();
    L13.moveLetter();
    L14.moveLetter();
    L15.moveLetter();
    L16.moveLetter();
    window.requestAnimationFrame(moveLetters);
}