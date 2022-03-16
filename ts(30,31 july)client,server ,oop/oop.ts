//class declaration

class arithematic
{
    //characteristics
    no1 :  number;
    no2 :  number;
    ans : number;

    //constructor

    constructor(x:number , y:number)
    {
        this.no1=x;
        this.no2=y;
        this.ans=0;
    }


    //behavoiur
    Addition():number
    {
        this.ans = this.no1 + this.no2 ;

        return this.ans;
    }

    Subtraction():number
    {
        this.ans = this.no1  - this.no2 ;

        return this.ans;
    }

}

var ret:number=0;

var obj1 = new arithematic(10,11);
var ret=obj1.Addition()

console.log("addition is:", ret)

var obj2 = new arithematic(20,11); 
var ret=obj1.Subtraction()

console.log("subtraction  is:", ret)