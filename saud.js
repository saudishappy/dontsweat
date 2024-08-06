let age = prompt ("ENTER UR AGE");

if(age <=14 && age >=1)
{
    document.write("U ARE BACHA ")
}
else if(age <=24 && age >=15)
{
    document.write("U ARE A YOUTH")
}
else if(age <=64 && age >=25)
{
    document.write("U ARE ADULT MASHALLAH")
}
else if(age >64 && age <=100)
{
    document.write("U ARE VERY OLD SUBHANALAH")
    
}

document.write("<br><br><br><br><br>")

//       { document.write ("A HUMAN CANT EXCEED THE AGE OF 100 THATS NOT POSSIBLE")}
    
for(let i = 2; i<=100; i++)
{
    document.write("<br> <br>", "2x", i, "=",i*11 )
}
 

// LOOOOOOOOOOOOOOOOOOOOOOOOOPPPPPPPPPPPPPPPPPPSSSSSSSSSSSSSSS
var sum = 0
for(let i = 1; i<=10; i++)
    {
        sum = sum + i;

    }
    document.write( "<br>","<br>","<br>","<br>",sum)

document.write("<br><br><br><br><br><br><br>")

var i= 1 
do{
    document.write("2 X", i, "=", i*2, "<br>");
    i++;
}
while( i<=20 )

    document.write("<br><br><br><br><br><br><br>")





// var USCAPITAL;

// do{
//    USCAPITAL= prompt ("ENTER THE CAPITAL OF USA")
// }
// while( USCAPITAL == "WASHINGTON" )

// if( USCAPITAL == "WASHINGTON") 
//     {
//     document.write( "U ARE CORRECT :)")
// }

// else{
//     document.write( "U ARE WRONG :(")
// }

// ********************************************************************************************

var trafficlights= prompt("ENTER LIGHTS");
switch(trafficlights)
{
case 'RED':
alert("STO0OOOP")
break
case 'YELLOW':
alert("GET READY")
break
case 'GREEN':
alert("GO")

default:
    alert("INVALID INPUT")

}
