//  Dates Operate In A Similar Way To DateTime in C#. Date Is An Object With Properties Relating To Both Time And Date.
//  These Can Be Retrieved Via The Appropriate Calls.  Initialising A Date Sets The Values To The Current System Time
//  And Date. These Can Then Be Retrieved Individually By Calling The Appropriate Properties. The Following Function
//  Sets An Interval To Refresh The Body Of A HTML Document To Display The Current Time Every Second That Passes.

setInterval(printTime, 1);

function printTime()
{
  var timeStamp = new Date();
  var hours = timeStamp.getHours();
  var minutes = timeStamp.getMinutes();
  var seconds = timeStamp.getSeconds();
  var milliseconds = timeStamp.getMilliseconds();

  document.body.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
}