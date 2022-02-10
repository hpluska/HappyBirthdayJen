class letter{
    constructor(x, y, lt, color, r, dim){
        this.x = x;
        this.startX = x;
        this.y = y;
        this.startY = y;
        this.l = document.createElement("div");
        this.l.style.position = "absolute";
        this.l.style.left = this.x + "%";
        this.l.style.top = this.y + "%";
        this.l.style.width = dim + "em";
        this.l.style.height = dim + "em";
        this.l.style.border = "thin gold solid";
        this.l.style.backgroundColor = color;
        this.l.style.fontSize = "3em";
        this.l.style.textAlign = "center";
        this.l.style.fontStyle = "bold";
        this.l.style.fontFamily = "Verdana, Arial, sans-serif";
        this.l.style.borderRadius = r + "%";
        this.l.style.paddingTop = ".5em";
        this.l.innerHTML = lt;
        this.position = 0;
        this.rDelta = Math.random()/4 - .12;
        this.xDelta = Math.random()/5;
        this.yDelta = Math.random()/5;
        document.body.append(this.l);
        
    }

    moveLetter(){
        
        
        this.range = 1;
        if(this.x > this.startX+this.range || this.x < this.startX - this.range){
            this.xDelta *= -1;
        }
        if(this.y > this.startY+this.range || this.y < this.startY - this.range){
            this.yDelta *= -1;
        }
        this.x += this.xDelta;
        this.y += this.yDelta;
        this.l.style.left = this.x + "%";
        this.l.style.top = this.y + "%";
        this.position += this.rDelta;
        this.l.style.transform = "rotate("+ this.position+"deg)";
    }
}