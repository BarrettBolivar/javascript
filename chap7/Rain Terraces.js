// Rain terraces
function rain(arr){
    if (arr.length < 2){
        console.log('Insufficient length');
        return false;
    }
    var sum = 0;
    var i = 0;
    var sectallest = 0;
    var firstTall = arr[0];
    var lastTall = arr[0];
    var count = 0;
    // initialize the first building
    if (i == 0){
        while (arr[0] < arr[i+1]){
            var firstTall = arr[i+1];
            count++;
            i += 1;
        }
    }
    while (i < arr.length){
        var y = i;
        while (arr[y + 1] <= arr[y + 2]){
            var lastTall = arr[y+2];
            count++;
            y++;
        }
        if (firstTall >= lastTall){
            sectallest = lastTall;
        } else { 
            sectallest = firstTall;
        }
        // count represents the amount of buildings in between two taller buildings. 
        while (count > i){
            sum = (sectallest - arr[count]) + sum;
            count--;
        }
        i = y + 2;
    }  
    return sum;
}
var arr1 = [3,1,1,4,2];
var arr2 = [1,8,1,9,6,4,4];
var arr3 = [4,2,3,8]
console.log(rain(arr3));
