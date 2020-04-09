function dice(){
    //create a random integer between 0 and 5
    var randomdice=Math.round(Math.random()*5)
    document.images["mydice"].src=eval("face"+randomdice+".src")
    }

console.log(dice)