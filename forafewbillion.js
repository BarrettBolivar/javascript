var startpenny = .01;
function reward() {
    for (days = 1; days <= 30; days++) {
        startpenny = startpenny * 2;
    }
    console.log(startpenny);
}
reward();