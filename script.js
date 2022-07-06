var player1_score=Math.floor(Math.random()*6+1);
var player2_score=Math.floor(Math.random()*6+1);
// alert("Hello World");
document.querySelector(".img1").setAttribute("src","images/dice"+player1_score+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+player2_score+".png");
if(player1_score >player2_score){
    document.querySelector("h1").innerHTML="Player 1";
}
else if(player2_score > player1_score){
    document.querySelector("h1").innerHTML="Player 2";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}