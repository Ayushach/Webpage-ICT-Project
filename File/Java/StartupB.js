
var Change = document.getElementById("Name");
var Form= document.getElementById("Value1");
var Name= prompt("Enter your name","Guest");
var colour=prompt("Enter your favourite colour","Red");
Change.innerHTML="Welcome to our Website "+ Name;
Change.style.color = colour;
Form.value = Name;



