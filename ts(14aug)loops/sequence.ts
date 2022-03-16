function compare(ino1 : number , ino2:number)
{
    if(ino1 > ino2)
    {
        console.log("first no is greater that second")
    }
    else if(ino1 < ino2)
    {
        console.log("first is less than sec")
    }
    else if(ino1==ino2)
    {
        console.log("both num are equal")
    }
}
compare(100,70);
compare(70,100);
compare(100,100); 

function mydate(ino:number )
{
    if(ino == 1)
    {
        console.log("monday");
    }

    else if(ino==2)
    {
        console.log("tuesday");
    }
    else if(ino==3)
    {
        console.log("wed");
    }
    else if(ino==4)
    {
        console.log("thur");
    }
    else if(ino==5)
    {
        console.log("frid");
    }
    else if(ino==6)
    {
        console.log("sat");
    }
    else if(ino==7)
    {
        console.log("sun");
    }

    else
    {
        console.log("wrong input");
    }
}
mydate(6);


function mydate2(ino:number)
{
    switch(ino)
    {
        case 1: console.log("monday");
        break;

        case 2: console.log("tue");
        break;
        
        case 3: console.log("wed");
        break;

        case 4: console.log("thur");
        break;

        case 5: console.log("fri");
        break

        case 6: console.log("sat");
        break;

        case 7: console.log("sun");
        break;

        default : 
        console.log("wrong input");
    }
    
}

mydate2(6);