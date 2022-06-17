function roll(img1,img2){
    var table=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
    var n=Math.floor(Math.random()*6)+1;
    var x=Math.floor(Math.random()*6)+1;
    img1.src=table[n-1];
    img2.src=table[x-1];
    if(n>x){
        document.querySelector(".container h1").textContent="Player 1 won !";
    }else if(x>n){
        document.querySelector(".container h1").textContent="Player 2 won !";
    }else{
        document.querySelector(".container h1").textContent="It's a draw  !";
    }
}