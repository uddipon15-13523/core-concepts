function inchToFeet(inches){
    const feet = inches/12;
    return feet;
}
const dadaInches = 144;
const dadafeet = inchToFeet(dadaInches);
console.log(dadafeet);

const nanaInhes = 168;
const nanaFeet = inchToFeet(nanaInhes);
console.log("nana feet" , nanaFeet);