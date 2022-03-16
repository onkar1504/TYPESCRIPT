
export class arithematic
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

export var fun = function(no1:number , no2:number)              // anonomoyus function
{
    return no1+no2;
}

export function addition(no1:number , no2:number) :number
{
    var ans : number=0;

    ans= no1+no2;

    return ans;
}


export function subtraction(no1:number , no2:number) :number
{
    var ans : number=0;

    ans= no1 -no2;

    return ans;
}
