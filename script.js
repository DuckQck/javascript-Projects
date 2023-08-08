var n=Math.floor(Math.random()*6)+1;
var x=Math.floor(Math.random()*6)+1;
console.log(n);
switch(n){
    case 1:
        document.querySelector("img.img1").src="images/dice1.png";
        break;
    case 2:
        document.querySelector("img.img1").src="images/dice2.png";
        break;
    case 3:
        document.querySelector("img.img1").src="images/dice3.png";
        break;
    case 4:
        document.querySelector("img.img1").src="images/dice4.png";
        break;
    case 5:
        document.querySelector("img.img1").src="images/dice5.png";
        break;
    case 6:
        document.querySelector("img.img1").src="images/dice6.png";
        break;
        }
switch(x){
        case 1:
        document.querySelector("img.img2").src="images/dice1.png";
        break;
    case 2:
        document.querySelector("img.img2").src="images/dice2.png";
        break;
    case 3:
        document.querySelector("img.img2").src="images/dice3.png";
        break;
    case 4:
        document.querySelector("img.img2").src="images/dice4.png";
        break;
    case 5:
        document.querySelector("img.img2").src="images/dice5.png";
        break;
    case 6:
        document.querySelector("img.img2").src="images/dice6.png";
        break;

}

var title= document.querySelector("div.container h1");
if(n>x){
    title.textContent="Player 1 Wins";
}
else if(x>n){
    title.textContent ="Player 2 Wins";
}
else{
    title.textContent="Draw";
}
