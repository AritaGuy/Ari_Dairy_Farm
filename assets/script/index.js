
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
var name;
var volume;
//production volume function
let perShed = function()
{   
    var i ;
    for (i=0; i<production.length ; i++){
     console.log(`Your production in ${production[i].name} is ${production[i].volume} litres per day`);
      
    };
    
};

const milkProd = document.getElementById("milkProd");
const change = () => {  
    
    s.innerHTML = perShed();
};
let s = document.getElementById("results");
milkProd.addEventListener("click", change); 
var totalProd;
const vol = () => 
{
    totalProd = a.volume + b.volume + c.volume + d.volume;
    return totalProd;
}

const changeVolPerDay = () =>{
    n.innerHTML = `The total production is ${vol()} litres per day`;
}
let n = document.getElementById("volperday")
const volumPerDay = document.getElementById("vol");
volumPerDay.addEventListener("click", changeVolPerDay);

//function calculating total payments to be made by Brookside

var year;
var tot; 
let selling_price = 45;
let time = 7; 
var totalProd = 1876;
let calc = function(selling_price, time){
    tot = 1876 * 45* 7;
    console.log(`Your weekly income will be Ksh ${tot}`);
    year = 1876 * 45 * 7 * 4 * 12;
    let weeklyy = `Your weekly income will be Ksh ${tot}`,
        yearyear = `Your yearly income will be Ksh ${year}`;

    return [weeklyy, yearyear];
    
};


const earnPerYear = () =>{
    z.innerHTML = calc();
}
let z = document.getElementById("amount")
const earnings = document.getElementById("earnings");
earnings.addEventListener("click", earnPerYear);


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
let yr = totalProd * yearArray[i].days * 45;
//Leap year function
let lpyr = function leapyear(){
    
    var i;
    
    for(i=0; i<yearArray.length; i++){
        console.log(`Your income for ${yearArray[i].name} is ${yr}`)
    };
};
lpyr()
