function pr(start, final, skip) {
    for (var x = start, x < final; x += skip;)
    console.log(x);
    }
pr(2, 10, 2);