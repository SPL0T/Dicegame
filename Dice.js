const d1 = document.querySelector("#d1");
const d2 = document.querySelector("#d2");
const pointdisplay = document.querySelector("#points");
const p1_point_display = document.querySelector("#player1");
const p2_point_display = document.querySelector("#player2");
const on_turn_point_display = document.querySelector("#on_turn");
const change_mode = document.querySelector("#change_mode");
const win_points = document.querySelector("#win_points");
let score = 0;
let dice1 = 0;
let dice2 = 0;
let players = ["player1", "player2"];
let points = [0, 0];
let win_condition = 100;
let gamemode = "solo";
let turn = 0;
let x;

function name_changer(){
    o = document.querySelector("#name2").value;
    console.log(players[0])
    printer();
};

document.addEventListener('change',function() {
win_points.onchange=max_point_update;
},false);

function logic (){
    dice1 = Math.floor((Math.random() * 6) + 1);
    dice2 = Math.floor((Math.random() * 6) + 1);
    if(dice1 == 1 && dice2 == 1){
    score += 25;
    printer();
    alert("Sait tupla nollat. Sait 25 Pistettä");}
    else if(dice1 == 1 || dice2 == 1){
    score = 0;
    printer();
    alert("Toinen nopista oli 1. pisteesi nollattin");}
    else if(dice1 === dice2) {
    dicetotal = dice1 * 2 + dice2 * 2;
    score += dicetotal;
    printer();
    alert("sait tuplat. Saadut pisteesi tuplattiin");}
    else{
    dicetotal = dice1 + dice2;
    score += dicetotal;
    printer();}
}

function push(){
    /*
    if(turn = 0){
        x = points[0]
    }
    else{
        x = points[1]
    }*/
    x = points[0]
    x += score
    score = 0
    printer()
    win_state()
}


function max_point_update(event){
    if(event.target.value < 1){
        alert("Numero täytyy olla vähintään 1");
        event.target.value = 0;}
    else{
    win_condition = win_points.valueAsNumber;
    console.log(win_condition);}
}

function mode_change(){
    if(change_mode.class == "solo"){
        gamemode = "duo"
        change_mode.class = "duo"
        change_mode.innerHTML = "Kaksin peli"
        return;
    }
    else;{
        gamemode = "solo"
        change_mode.class = "solo"
        change_mode.innerHTML = "Yksin peli"
        
    };
}

function printer() {
    dice1show();
    dice2show();
    on_turn_point_display.innerHTML = "Vuoron pisteet: " + score ;
    p1_point_display.innerHTML = "Player1: " + points[0] ;
    p2_point_display.innerHTML = "Player2: " + points[1] ;
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
            return;
        };
    }

    function win_state() {
    if (points[0] >= win_condition || points[1] >= win_condition)
    alert("sinä voitit")
    else{}
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
            return;
        }
    }