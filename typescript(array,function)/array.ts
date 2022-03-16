var batches = ["ppa","angular",11000,false ,3.14];

console.log("first element is",batches[0]);
console.log("second element is",batches[1]);
console.log("third element is",batches[2]);



batches[1]="angular MEAN";                      //edit kela  
batches[3]="logic building";                  // add kela mhnje append



console.log("second element is",batches[1]);

console.log("fourth element is",batches[3]);


console.log("length of array is:",batches.length);      //length mhnje kiti aray length ahe

console.log("all batches are:",batches);

console.log(typeof batches[4]);

////////////////////////////////////////////////////////////////////////////////

var arr:any[]= [10,20,30]

arr[3]="hello";
arr[4]=false;

console.log(arr);                                   //[ 10, 20, 30, 'hello', false ]
console.log(arr[2]);                            //30
console.log(typeof arr[4]);                     //boolean


///// const keyword using array

const arr2: number[] = [10,20,30,40];

arr2[4]=50;
arr2[1]= 21;

console.log(arr2);

console.log(typeof arr2);

console.log(arr2.length );

console.log(arr2 [1]);

