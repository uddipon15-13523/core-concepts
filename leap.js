function isleapYear (year){
    const remainder = year % 4;
    if (remainder == 0){
        console.log("Your year is  a leap year");
    }
    else{
        console.log("Your year is not a leap year");
    }
}
isleapYear(2023);