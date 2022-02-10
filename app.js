window.requestAnimationFrame(moveLetters);

document.body.style.backgroundColor = "black";
var xPos = 5.2, yPos= 5, spacing =9, dDelta, xDelta, yDelta, dim = 2.5;
var L1 = new letter(dim*4 + spacing, yPos, "H", "yellow", 50, 2.5);
var L2 = new letter(dim*5 + spacing*2, yPos, "a", "red", 25, 2.5);
var L3 = new letter(dim*6 + spacing*3, yPos, "P", "green", 0, 2.5);
var L4 = new letter(dim*7 + spacing*4, yPos, "P", "blue", 0, 2.5);
var L5 = new letter(dim*8 + spacing*5, yPos, "y", "orange", 30, 2.5);

var L6 = new letter(dim*0 + spacing*.5, yPos*5.5, "b", "pink", 30, 2.5);
var L7 = new letter(dim*1 + spacing*1.5, yPos*5.5, "I", "lime", 50, 2.5);
var L8 = new letter(dim*2 + spacing*2.5, yPos*5.5, "r", "aqua", 0, 2.5);
var L9 = new letter(dim*3 + spacing*3.5, yPos*5.5, "T", "olive", 10, 2.5);
var L10 = new letter(dim*4 + spacing*4.5, yPos*5.5, "H", "blue", 50, 2.5);
var L11 = new letter(dim*5 + spacing*5.5, yPos*5.5, "d", "fuchsia", 0, 2.5);
var L12 = new letter(dim*6 + spacing*6.5, yPos*5.5, "A", "orange", 25, 2.5);
var L13 = new letter(dim*7 + spacing*7.5, yPos*5.5, "Y", "green", 0, 2.5);

var L14 = new letter(dim*5 + spacing*1, yPos*10, "j", "red", 50, 2.5);
var L15 = new letter(dim*6 + spacing*2, yPos*10, "E", "lime", 0, 2.5);
var L16 = new letter(dim*7 + spacing*3, yPos*10, "n", "purple", 25, 2.5);
var L17 = new letter(dim*8 + spacing*4, yPos*10, "!!!", "aqua", 25, 2.5);

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
    L17.moveLetter();
    window.requestAnimationFrame(moveLetters);
}