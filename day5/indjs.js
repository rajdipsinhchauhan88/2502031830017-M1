
        let text = "";

        for (let i = 1; i <= 10; i++) {
            text += i + "<br>";
        }

        document.getElementById("loop").innerHTML = text;
 
        //while 
        var i = 0
        while (i<=10) {
            document.getElementById("demo").innerHTML +=i + " " + "<br>";
            i++;
        } 
        
        //2stdname 

     let student = ["Rajdipsinh", "raj", "dip", "sinh"];

    for(let i = 0; i < student.length; i++)
    {
    document.getElementById("name").innerHTML += student[i] + "<br>";
    }

        //3calculatetotal marks
    let marks = [80, 70, 90, 60];
    let total = 0;

    for(let i = 0; i < marks.length; i++)
    {
    total = total + marks[i];
    }

    document.getElementById("ttlmarks").innerHTML = "Total Marks = " + total;

    //4even numbers

    for(let i = 1; i <= 10; i++)
{
    if(i % 2 == 0)
    {
        document.getElementById("even").innerHTML += i + "<br>";
    }
}

//5odd numbers

for(let i = 1; i <= 10; i++)
{
    if(i % 2 != 0)
    {
        document.getElementById("odd").innerHTML += i + "<br>";
    }
}

//6multable
let num = 5;

for(let i = 1; i <= 10; i++)
{
    document.getElementById("table").innerHTML +=
    num + " x " + i + " = " + (num * i) + "<br>";
}
//6countdown timmer

for(let i = 10; i >= 1; i--)
{
    document.getElementById("timer").innerHTML += i + "<br>";
}

//atmpin validation
// let pin = 1234;
// let attempt = 1;

// while(attempt <= 3)
// {
//     let pinentered = prompt("enter your pin");
//     if(pin == 1234)
//     {
//         document.getElementById("atmpin").innerHTML =
//         "Correct PIN";
//         break;
//     }
//     else
//     {
//         document.getElementById("atmpin").innerHTML =
//         "Wrong PIN";
//     }

//     attempt++;
// }

//arry 
var car = new Array(3);
car[0] = "ford";
car[1] = "toyota";
car[2] = "honda";

var car2 = new Array("ford", "toyota", "honda");
var car3 = ("odi", "innova", "vagon");

document.write(car2);

car2.push("yamahh");
document.write(car2);

car2.pop("");
document.write(car2);

var data = car2.concat(car3);
document.write(data);

//user input 
// var a = prompt("enter your name");
// alert("done");

function foo (p1) 
{
    if(typeof(p1) == "number")
        return 0;
    else 
        if(typeof(p1) == "string")
            return "zero"; 

}
console.log(foo(1));
console.log(foo("abc"));
console.log(foo());
