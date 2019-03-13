//  Variables In JS Are Typeless.
var x = 10;
var y = 3.145;
var firstName = "Tim";

//  THIS IS NOT THE BEST WAY TO OUTPUT HTML. This Is Just To Familiarise Yourself With JS.
//  Normally, HTTP Will Be Appended To DOM Objects Which Are Referenced Via An ID.

document.write("<h1>JS Variable Introduction</h1>");

//  Concatenate Output Sting With Values.
document.write("<p>The Sum Of X And Y Is: " + (x+y) + "</p>");
document.write("<P>The First Name Is: " + firstName + "</p>");
MyFunction(x, y);

if (SizeComparison)
{
    document.writeln("<p>Value 1 Is Bigger Than Value 2\n</p>");
}

else
{
    document.writeln("<p>Value 2 Is Bigger Than Value 2</p>");
}

//  Functions Are Declared As Follows. No Major Difference From Any Other Language.
function MyFunction(xIn, yIn)
{
    document.writeln("<p>Function Output Is: "+ (xIn + yIn) + "</p>");
}

function SizeComparison(value1, value2)
{
    return value1 > value2;
}