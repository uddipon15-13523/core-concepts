// function isEven(number){
//     const rimedar = number%2;
//    if(rimedar == 0){
//     console.log("number is even");
//    }
//    else{
//     console.log("number id odd");
//    }
// }
// isEven(1280);
// isEven(380);


function isEven (number){
    const rimedar =number %2;
    if(rimedar == 0){
        return true;

    }
    else{
        return false;
    }
}
const myNumberIsEven = isEven (303);
console.log(myNumberIsEven)
const herNumberIsEven = isEven(1280);
console.log(herNumberIsEven);