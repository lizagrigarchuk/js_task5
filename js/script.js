
window.onload = function () {
    let set = new Set();

    function sumAB(a,b){
        var sum = a+b;
        if(set.has(`${a}+${b}=${sum}`)){
            console.log('Такое значение уже есть');
        }
        if(set.size<3){
            set.add(`${a}+${b}=${sum}`);
        }
        return sum;
    }

    sumAB(2,5);
    sumAB(3,7);
    sumAB(2,5);
    sumAB(-2,5);
    sumAB(56,5);
    sumAB(7878,5);

    console.log(set);
}   