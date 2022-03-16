
function add(no1:number , no2:number)                              //function defination start from fun name         
{                                           //fun start  
    var ans:number =0;
    ans =no1 + no2;
    return  ans; 
}                                           //fun close

var i:number =20;
var j : number =11;
var ret : number; 
ret =add(i,j);        //add(10,11)           //function call

console.log("addition is:" ,ret);