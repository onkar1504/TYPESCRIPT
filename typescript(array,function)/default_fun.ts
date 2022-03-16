function area(radius: number , pi : number=3.14)
{
    var ans : number =0 ;
    ans = pi * radius *radius ;
    return ans
}

var no : number =10.2;
var ret : number = 0;

ret = area(no,7.12);

console.log("area is: ", ret);



//default parameter


ret = area(no);

console.log("area is: ", ret);