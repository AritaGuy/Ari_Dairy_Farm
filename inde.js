
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


