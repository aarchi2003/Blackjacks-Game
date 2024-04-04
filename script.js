

let sum= 0;
let cards=[];
let hasBlackJack=false;
let isAlive=false;
let message="";
let  messageEL=document.getElementById("message-el");
let crdaEL=document.getElementById("cards-el");
let sumEl=document.querySelector("#sum-el");

let player={
    name:"aarchi",
    chips:145,
}


document.getElementById("player-el").textContent=player.name+" "+": $"+player.chips;

function getRandomCard(){
    let randomNumber=Math.floor(Math.random()*13);
    if(randomNumber === 1 || randomNumber === 0){
        return 11;
    }
    else if (randomNumber === 11 || randomNumber === 12 || randomNumber === 13) {
        return 10;
    } else {
        return randomNumber; 
    }
}

function startGame(){
    cards=[];
    isAlive=true;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards.push(firstCard);
    cards.push(secondCard);
    sum= firstCard+ secondCard;
    renderGame();
}

function renderGame(){
    sumEl.textContent= "Sum:"+sum;
    crdaEL.textContent="Card:"+" ";
    for(let i=0;i<cards.length;i++){
        crdaEL.textContent+=cards[i] +" ";
    }

    if(sum <= 20){
        message="Do you want to draw a new card?";
    }
    else if (sum === 21) {
        message="whoo, you got a BlackJack!";
        hasBlackJack=true;
    }
    else{
        message="Sorry,you are out of Game!";
        isAlive=false;
   }

   messageEL.textContent=message;
   console.log(message);

}

function newCard(){
   if(isAlive===true && hasBlackJack===false)
   { 
    let card=getRandomCard();
    sum+=card;
    cards.push(card);
    renderGame();}
}