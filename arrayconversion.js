
function collectnum(arr){
    var sortedarr = [];
    for (var i = 0; i < arr.length; i++){
        if (typeof(arr[i]) == "number") {
            sortedarr.push(arr[i]);
        }    
    }
    console.log(sortedarr);
    return sortedarr;
}
collectnum([1, "apple", -3, "orange", 0.5]);
