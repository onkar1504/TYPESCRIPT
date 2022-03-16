function sequence() {
    console.log("demonstration of sequence");
    var arr = [10, 20, 30, 40];
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr[3]);
}
function iteration1() {
    console.log("demonstration of sequence");
    var arr = [10, 20, 30, 40];
    var icnt = 0;
    var isum = 0;
    isum = isum + arr[0]; //0+10 =10
    isum = isum + arr[1]; //10+20 =30
    isum = isum + arr[2]; //30+30 =60
    isum = isum + arr[3]; //60+40 = 100
    return isum; //100
}
function iteration2() {
    console.log("demonstration of sequence");
    var arr = [10, 20, 30, 40];
    var icnt = 0;
    var isum = 0;
    //   1              2               3
    for (icnt = 0; icnt < arr.length; icnt++) {
        isum = isum + arr[icnt]; //4
    }
    return isum; //100
}
function iteration3() {
    console.log("demonstration of sequence");
    var arr = [10, 20, 30, 40];
    var icnt = 0;
    var isum = 0;
    var ivalue = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        ivalue = arr_1[_i];
        isum = isum + ivalue;
    }
    return isum; //100
}
function iteration4() {
    console.log("demonstration of sequence");
    var arr = [10, 20, 30, 40];
    var isum = 0;
    for (var iIndex in arr) // in array travel with index no
     {
        isum = isum + arr[iIndex];
    }
    return isum; //100
}
// var iret : number = 0;
// iret = iteration4()
// console.log(iret);
// sequence();
//while loop
function iteration5() {
    console.log("demonstration of sequence");
    var arr = [10, 20, 30, 40];
    var icnt = 0; //1
    var isum = 0;
    //     //   1              2               3
    //    for(icnt =0 ; icnt < arr.length ; icnt++ )
    //    {
    //        isum =isum + arr[icnt];      //4
    //    }
    while (icnt < arr.length) //2
     {
        isum = isum + arr[icnt];
        icnt++; //3
    }
    return isum;
}
function iteration6() {
    console.log("demonstration of sequence");
    var arr = [10, 20, 30, 40];
    var icnt = 0; //1
    var isum = 0;
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
    do {
        isum = isum + arr[icnt];
        icnt++;
    } while (icnt < arr.length);
    return isum;
}
var iret = 0;
iret = iteration6();
console.log("addition is", iret);
