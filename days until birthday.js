
function countdown() {
    for (days = 60; days >= 0; days--) {
        if (days < 60 && days >= 30){ 
            console.log ("Sad Panda");
        }
        if (days < 30 && days >5) {
            console.log ("Almost Happy");
        }
        if (days <= 5){
            console.log ("WHOOOO");
        }
        if (days == 0) {
            console.log ("HAPPPY BDAY");
        }
    }
}
countdown();