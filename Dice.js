const d1 = document.querySelector("#d1");
const d2 = document.querySelector("#d2");
let points = [];
let dice1 = [];
let dice2 = [];
let players = [{ name: "Player1", points: 0 }, { name: "Player2", points: 0 }];
let Player1 = "Player1";
let Player2 = "Player2";
let palyer1_points = 0;
let palyer2_points = 0;


function rolldice() {
        dice1 = Math.floor((Math.random() * 6) + 1);
        dice2 = Math.floor((Math.random() * 6) + 1);
        console.log(dice1);
        console.log(dice2);
        dicetotal = 0;
        points =+ dicetotal;
        printer();
      };

function printer() {
    if(dice1 == 1){
        d1.innerHTML = "<img src=Noppa1.png>";
        }
    else if(dice1 ==2){
        d1.innerHTML = "<img src=Noppa2.png>";
    }
    else if(dice1 ==3){
        d1.innerHTML = "<img src=Noppa3.png>";
    }
    else if(dice1 ==4){
        d1.innerHTML = "<img src=Noppa4.png>";
    }
    else if(dice1 ==5){
        d1.innerHTML = "<img src=Noppa5.png>";
    }
    else if(dice1 ==6){
        d1.innerHTML = "<img src=Noppa6.png>";
    }
        else {
            console.error("Dice 1 broken");
            
        };

    if(dice2 ==1){
        d2.innerHTML = "<img src=Noppa1.png>";
    }
    else if(dice2 ==2){
        d2.innerHTML = "<img src=Noppa2.png>";
    }
    else if(dice2 ==3){
        d2.innerHTML = "<img src=Noppa3.png>";
    }
    else if(dice2 ==4){
        d2.innerHTML = "<img src=Noppa4.png>";
    }
    else if(dice2 ==5){
        d2.innerHTML = "<img src=Noppa5.png>";
    }
    else if(dice2 ==6){
        d2.innerHTML = "<img src=Noppa6.png>";
    }
        else {
            console.error("Dice 2 broken");
            
        }
};