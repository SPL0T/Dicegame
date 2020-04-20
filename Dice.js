const d1 = document.querySelector("#d1");
const d2 = document.querySelector("#d2");
let points = [];
let dice = [];
let players = [{ name: "Player1", points: 0 }, { name: "Player2", points: 0 }];
let Player1 = "Player1";
let Player2 = "Player2";
let palyer1_points = 0;
let palyer2_points = 0;


function rolldice() {
        dice = Math.floor((Math.random() * 6) + 1);
        console.log(dice);
        dicetotal = 0;
        printer();
      };

function printer() {
    if(dice == 1){
        diceside1();
        }
    else if(dice ==2){
        diceside2();
    }
    else if(dice ==3){
        diceside3();
    }
    else if(dice ==4){
        diceside4();
    }
    else if(dice ==5){
        diceside5();
    }
    else if(dice ==6){
        diceside6();
    }
        else {
            console.error("Nyt jotain on rikki tai muu kuin 1");
            
        }
};

function diceside1() {
d1.innerHTML = "<img src=Noppa1.png>";
};
function diceside2() {
    d1.innerHTML = "<img src=Noppa2.png>";
};
function diceside3() {
    d1.innerHTML = "<img src=Noppa3.png>";
};
function diceside4() {
    d1.innerHTML = "<img src=Noppa4.png>";
};
function diceside5() {
    d1.innerHTML = "<img src=Noppa5.png>";
};
function diceside6() {
    d1.innerHTML = "<img src=Noppa6.png>";
};