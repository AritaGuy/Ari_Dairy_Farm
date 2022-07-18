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
let perShed = function()
{   let l
    var i ;
    for (i=0; i<production.length ; i++){
      
            l = `Your production in ${production[i].name} is ${production[i].volume} litres per day`;
        
       
      
    };
    return l;
};

const milkProd = document.getElementById("milkProd");
const change = () => {  
    
    s.innerHTML = perShed();
};
let s = document.getElementById("results");
milkProd.addEventListener("click", change); 
