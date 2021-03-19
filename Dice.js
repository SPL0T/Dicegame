const d1 = document.querySelector("#d1");
const d2 = document.querySelector("#d2");
const pointdisplay = document.querySelector("#points");
let score = 0;
let dice1 = 0;
let dice2 = 0;
let players = [{ name: "Player1", points: 0 }, { name: "Player2", points: 0 }];
let Player1 = "Player1";
let Player2 = "Player2";
let palyer1_points = 0;
let palyer2_points = 0;
let win_condition = 100;

function turn ()
{
    win_state()
    dice1 = Math.floor((Math.random() * 6) + 1);
    dice2 = Math.floor((Math.random() * 6) + 1);
    if(dice1 == 1 || dice2 == 1){
    score = 0;
    console.log ("1")}
    else if(dice1 === dice2) {
    dicetotal = dice1 * 2 + dice2 * 2;
    console.log(dicetotal);
    console.log ("doubles");
    score += dicetotal;}
    else{
    dicetotal = dice1 + dice2;;
    console.log(dicetotal);
    console.log ("single");
    score += dicetotal;}
    printer();
}

function rolldice() {
    dicetotal = dice1 + dice2;
    console.log(dice1)
    console.log(dice2)
    score += dicetotal;
};

function double_check() {

}

function printer() {
    dice1show();
    dice2show();
    pointdisplay.innerHTML ="Points: " + score ;
};

    function dice1show() {
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
    }

    function win_state() {
    if (score >= win_condition)
    alert("sinä voitit")
    else
    rolldice()
    }

    function dice2show() {
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
    }