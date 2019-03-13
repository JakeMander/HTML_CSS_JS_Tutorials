//  Standard Array Initialisation, Names Acts As The Reference To The Object. Create The Object And Populate With
//  Values.

var names = new Array("Jake", "Bob", "Fred");

//  Standard Array Access. Access With An Index in []. Attempting To Reference Outside The Bounds Of The Array Returns
//  Undefined.
for (var i = 0; i < 3; i++)
{
    var name = names[i];
    document.write("<p> Name: " + name + "</p>");
}

//  Alternatively, You Can Create An Empty Array Of A Specified Size, Then Fill The Array With Values At A Later Point.
var ages = new Array(3);

document.write("<p>The Document Will Now Create An Array Of Ages</p>");

ages[0] = 22;
ages[1] = 25;
ages[2] = 66;

for (var i = 0; i < 3; i++)
{
    var age = ages[i];
    document.write("<p> Age: " + age + "</p>");
}

// Alternatively, Arrays Can be Created Dynamically. Elements Can Be Added As And When Needed.
var careers = new Array();

careers[0] = "Software Engineer";
careers[1] = "Builder";
careers[2] = "Retired";

for (var i = 0; i < 3; i++)
{
    var career = careers[i];
    document.write("<p> Career: " + career + "</p>");
}

//  Array Literals Can Also Be Used For Cleaner, Faster, And More Efficient Array Declarations
var houseNumbers = [24, 101, 60];

for (var i = 0; i < 3; i++)
{
    var houseNumber = houseNumbers[i];
    document.write("<p> House Number " + houseNumber + "</p>");
}

//  Arrays Also Implement A Number Of Properties Similar To Those Found In Java And C#. For Example, The Length Of An
//  Array Can Be Returned By The "length" property.

document.write("<p>Number of Elements In Careers Array: " + careers.length+ "</p>");

//  The Concat Function Can Be Used To Concatenate The Values Contained In Two Seperate Arrays Into A Single