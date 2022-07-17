
// Creating object
let a ={
    name : "Shed A",
    volume : 510 
};
let b ={
    name : "Shed B",
    volume : 308 
};
let c={
    name : "Shed C",
    volume : 486 
};
let d={
    name : "Shed D",
    volume : 572 
};
//production array
var production = [a, b, c, d];
//production volume function
let perShed = function(a)
{
    for (i=0; i<production.length; i++){
        console.log(`Your production in ${production[i].name} is ${production[i].volume} litres per day`)
         
       
    };
    //let totalProd = a.volume + b.volume + c.volume + d.volume
};
perShed();
let totalProd = a.volume + b.volume + c.volume + d.volume
console.log(`Your total production is ${totalProd} litres`)


//function calculating total payments to be made by Brookside
let selling_price = 45
let time = 7  
let calc = function(a,b){
    let tot = totalProd * a * b;
    console.log(`Your weekly income will be Ksh ${tot}`);
    let year = totalProd * a * b * 4 * 12;
    console.log(`Your yearly income will be Ksh ${year}`);
};
calc(selling_price, time);

// Creating yearly object
let jan ={
    name : "January",
    days : 31 
};
let feb ={
    name : "February",
    days : 29 
};
let mar={
    name : "March",
    days : 31
};
let apr={
    name : "April",
    days : 30 
};
let may={
    name : "May",
    days : 31
};
let jun={
    name : "March",
    days : 30
};
let jul={
    name : "July",
    days : 31
};
let aug={
    name : "August",
    days : 31
};
let sept={
    name : "Sept",
    days : 30
};
let oct={
    name : "October",
    days : 31
};
let nov={
    name : "November",
    days : 30
};
let dec={
    name : "December",
    days : 31
};

//leap year array
let yearArray = [jan,feb,mar,apr,may,jun,jul,aug,sept,oct,nov,dec]

//Leap year function
let lpyr = function leapyear(){
    let yr = totalProd * yearArray[i].days * 45;
    for(i=0; i<yearArray.length; i++){
        console.log(`Your income for ${yearArray[i].name} is ${yr}`)
    };
};
lpyr()
