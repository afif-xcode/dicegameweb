var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomimage = "images/dice" + randomnumber1 + ".png";

var column1 = document.querySelectorAll("img")[0];

column1.setAttribute("src",randomimage);

var randomnumber2 = Math.floor(Math.random()*6) +1;
var randomimage2 ="images/dice" + randomnumber2 + ".png";

var column2 = document.querySelectorAll("img")[1];
column2.setAttribute("src",randomimage2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins"
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩"
}
else{
    document.querySelector("h1").innerHTML = "Draw"
}