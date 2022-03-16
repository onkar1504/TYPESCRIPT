// function details(name:string , passport ?, nationality = "indian")    // 
// {
//     if(passport==undefined)
//     {
//         console.log("so")
//     }
// }
function fun1() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    console.log(data);
}
fun1();
