
window.onload = function () {
var cache = [];

  function multiAB(){
    return function (a,b){
      let cached = false;
      cache.forEach((val,i)=>{
        (val.a==a && val.b==b) || (val.a==b && val.b==a) ? cached=`Такие числа уже были: ${cache[i].mult}`:null
      })
      if(cached) return cached;
      if(cache.length!=3){
        cache.push({
          a:a,
          b:b,
          mult: a*b
        })
      }
      else {
        cache.push({
          a:a,
          b:b,
          mult: a*b
        });
        cache.shift();
      }
      return `Новый результат: ${cache[cache.length-1].mult}`;
    }
  }
  console.log(multiAB()(2,5));
  console.log(multiAB()(3,7));
  console.log(multiAB()(2,5));
  console.log(multiAB()(5,2));
  console.log(multiAB()(-2,5));
  console.log(multiAB()(56,5));
  console.log(multiAB()(24,2));
}
