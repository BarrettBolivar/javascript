function slots() {
    var pocketquarters = 1; //presumably number changes with input by customer
    if (pocketquarters > 0) {
        var roll = Math.random () * 101;
        roll = Math.floor (roll);
        if (roll == 1) {
            //You Win!
            var win = (Math.random () * 51) + 50;
            win = Math.floor (win);
            pocketquarters += win;
            console.log("You Win" + win + "quarters.");
        }
        else { 
            console.log("Sorry, you lost.");
        }
        pocketquarters --
        console.log("You have " + pocketquarters + " left.");
    }
}
slots();

//bonus 
function slots2() {
    var pocketquarters = 199; //presumably number changes with input by customer
    while (pocketquarters < 200) {
        if (pocketquarters > 0) {
            var roll = Math.random () * 101;
            roll = Math.floor (roll);
            if (roll == 1) {
                //You Win!
                var win = (Math.random () * 51) + 50;
                win = Math.floor (win);
                pocketquarters += win;
                console.log("You Win " + win + " quarters.");
            }
            else { 
                console.log("Sorry, you lost.");
            }
            pocketquarters --
            console.log("You have " + pocketquarters + " left.");
            if (pocketquarters <= 0){
                break;
            }
        }
    }
}
slots2();