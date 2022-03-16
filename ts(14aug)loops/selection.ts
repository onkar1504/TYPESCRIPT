function sequence()
{
    console.log("demonstration of sequence");
    var arr : number[] = [10,20,30,40];
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr[3]);
}

function iteration1():number
{
    console.log("demonstration of sequence");
    var arr : number[] = [10,20,30,40];
    var icnt:number =0;
    var isum : number =0;
    isum = isum +arr[0];   //0+10 =10
    isum = isum +arr[1];    //10+20 =30
    isum = isum +arr[2];    //30+30 =60
    isum = isum +arr[3];    //60+40 = 100

    return isum;            //100

}

function iteration2():number
{
    console.log("demonstration of sequence");
    var arr : number[] = [10,20,30,40];
    var icnt:number =0;
    var isum : number =0;

    //   1              2               3
   for(icnt =0 ; icnt < arr.length ; icnt++ )
   {
       
       isum =isum + arr[icnt];      //4
   }

    return isum;            //100
}

function iteration3():number
{
    console.log("demonstration of sequence");
    var arr : number[] = [10,20,30,40];
    var icnt:number =0;
    var isum : number =0;
    var ivalue :number = 0 ;
  
   for(ivalue of arr )                //of arrtravel with value
   {
       
       isum =isum + ivalue  
   }

    return isum;            //100
}

function iteration4():number
{
    console.log("demonstration of sequence");
    var arr : number[] = [10,20,30,40];
    var isum : number =0;
  

    for( var iIndex in arr)         // in array travel with index no
    {
        isum =isum + arr[iIndex];  
    }

    return isum;            //100
}
// var iret : number = 0;
// iret = iteration4()
// console.log(iret);

// sequence();


//while loop

function iteration5():number
{
    console.log("demonstration of sequence");
    var arr : number[] = [10,20,30,40];
    var icnt:number =0;                     //1
    var isum : number =0;

//     //   1              2               3
//    for(icnt =0 ; icnt < arr.length ; icnt++ )
//    {
       
//        isum =isum + arr[icnt];      //4
//    }

    while(icnt < arr.length )    //2
    {
        isum =isum + arr[icnt];

        icnt++                      //3
    }

    return isum;            
}



function iteration6():number
{
    console.log("demonstration of sequence");
    var arr : number[] = [10,20,30,40];
    var icnt:number =0;                     //1
    var isum : number =0;

//     //   1              2               3
//    for(icnt =0 ; icnt < arr.length ; icnt++ )
//    {
       
//        isum =isum + arr[icnt];      //4
//    }

    // while(icnt < arr.length )    //2
    // {
    //     isum =isum + arr[icnt];

    //     icnt++                      //3
    // }
    do
    {
        isum =isum + arr[icnt];
        icnt++     

    }while(icnt < arr.length ) 

    return isum;            
}

var iret : number = 0;
iret = iteration6()
console.log("addition is",iret);
