//  Objects Can Be Created Literally (I.e. Var p = {name:"Jake",age:22};) Alternatively, an Object Constructor Can Be
//  Created. This Function, When Called, Produces And Object Based On The Parameters We Send In. It Operates Essentially
//  As A Constructor In Any Other Programming Language But Does Not Reside In A Specific Class And Does Not Have An
//  Explicit Type.

function Person(name, age, career)
{
    this.name = name;
    this.age= age;
    this.career = career;
    this.DOB = CalculateDOB();
}

//  Function Which Can Be Assigned To A Specific Property Within An Object. When Called The Method Returns Any
//  Properties Referenced By The Called Method.
function CalculateDOB()
{
    return 2019 - this.age;
}

//  Instantiate The Objects.
var person1 = new Person("Jake", 22, "Software Engineer");
var person2 = new Person("Tim", 25, "Builder");
var person3 = new Person("Harold", 66, "Retired");

//  Output Saved Values By Calling Each Objects Property. Calling "this.DOB" Invokes The CalculateDOB Method.
document.write("<p>Person 1: " + "Name: " + person1.name + " Age: ", person1.age + " Career: " + person1.career +
    "<p>");

document.write("<p>Person 2: " + "Name: " + person2.name + " Age: ", person2.age + " Career: " + person2.career +
    "<p>");

document.write("<p>Person 3: " + "Name: " + person3.name + " Age: ", person3.age + " Career: " + person3.career +
    "<p>");