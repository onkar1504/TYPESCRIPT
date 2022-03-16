function addition(no1:number , no2:number):number
{
    return no1+no2;
}

function subtraction(no3:number , no4:number) :number
{
    return no3-no4;
}

var ret:number =0;

ret =addition(10,11);           //behaviour

console.log("addition is:",ret);

ret =subtraction(10,11);

console.log("subtraction is:", ret);