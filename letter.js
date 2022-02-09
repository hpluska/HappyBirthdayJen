class letter{
    constructor(x, y, lt, color, r){
        this.x = x;
        this.startX = x;
        this.y = y;
        this.startY = y;
        this.l = document.createElement("div");
        this.l.style.position = "absolute";
        this.l.style.left = this.x + "%";
        this.l.style.top = this.y + "%";
        this.l.style.width = "1.5em";
        this.l.style.height = "1.5em";
        this.l.style.border = "thin gold solid";
        this.l.style.backgroundColor = color;
        this.l.style.fontSize = "2.5em";
        this.l.style.textAlign = "center";
        this.l.style.fontFamily = "cursive";
        this.l.style.borderRadius = r + "%";
        this.l.innerHTML = lt;
        this.xDelta = Math.random()/2;
        this.yDelta = Math.random()/2;
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
    }
}