
import{fun ,addition, subtraction,arithematic} from "./server"         // apn ithe baherun function aanla mhnje server file kadun but titheun export krla pahije 


var x:number =11;
var y:number =20;
var ret :number =0 ;

ret=fun(x,y)

console.log("addition is:",ret);


ret=addition(x,y)

console.log("addition is:",ret);


ret=subtraction(x,y);

console.log("subtraction is:",ret);


var ret:number=0;

//oop
var obj1 = new arithematic(10,11);
var ret=obj1.Addition()

console.log("addition is:", ret)

var obj2 = new arithematic(20,11); 
var ret=obj1.Subtraction()

console.log("subtraction  is:", ret)