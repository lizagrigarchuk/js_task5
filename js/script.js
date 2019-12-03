
window.onload = function () {
  /*  let set = new Set();
    console.log(set);

    function multiAB(a,b){
        var multi = a*b;
        if(set.has(`${b}*${a}=${multi}`)){
            console.log('Такое значение уже есть');
            return multi;
        }
        else if(set.size==3){ //?? удаления первого
          var k = 0;
          set.forEach(
            user => {
              if(k!=1){
                var temp = user;
                k++;
                set.delete(temp);
              }
            } );
              console.log("Удаляем ");
              console.log(set);
            var str = `${a}*${b}=${multi}`
            set.add(`${a}*${b}=${multi}`);
            return multi;
        }
        else {
          console.log("Добавляем");
          console.log(set);
          console.log(set);
          set.add(`${a}*${b}=${multi}`);
          return multi;
        }
    }
    multiAB(2,5);
    multiAB(3,7);
    multiAB(5,2);
    multiAB(-2,5);
    multiAB(56,5);
*/

let array = [];
var sizeArray = 0;

  function multiAB(a,b){
    var flag = 0;

    for (var i = 0; i < array.length; i++) {
      if(array[i].a==a && array[i].b==b || array[i].a==b && array[i].b==a){
        flag=1;
          return `Такие числа уже были, произведение = ${array[i].mult}`;
      }
    }

    if(flag!=1){
      if(array.length<3){
        array[sizeArray]={
          a:a,
          b:b,
          mult:a*b
        };
        sizeArray++;
        return a*b;
      }
      else if(array.length==3){
          array.shift();
          array[2]={
            a:a,
            b:b,
            mult:a*b
          };
            return a*b;
      }
    }
  }

  console.log(multiAB(2,5));
  console.log(multiAB(3,7));
  console.log(multiAB(2,5));
  console.log(multiAB(5,2));
  console.log(multiAB(-2,5));
  console.log(multiAB(56,5));
  console.log(multiAB(24,2));
}
