function displayText(){
    document.getElementById("displayArea").hidden=false;
    var display1 = document.getElementById("article").value;
    var display2 = document.getElementById("photo").value;
    var display3 = document.getElementById("song").value;
    var display4 = document.getElementById("video").value;
    var display5 = document.getElementById("profile").value;
    var displayArea = document.getElementById("displayArea");
    displayArea.innerHTML = displayArea.innerHTML + "<tr><td>" + display1 + "</td><td>" + display2 + "</td><td>" + display3 + "</td><td>" + display4 + "</td><td>" + display5 + "</td></tr>" 
};

function reminder(x){
    var activeElement = document.getElementById(x);
    var length = activeElement.value.length;
    if(length>5){
        activeElement.style = "color: red"
        document.getElementById("lengthError").hidden = false;
    }else{
        activeElement.style= "color: blue";
        document.getElementById("lengthError").hidden = true;
    }
}

function submit(){
    var song = document.getElementById("song").value;
    var singer = document.getElementById("singer").value;
    var genre = document.getElementById("genre").value;
    var code = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
    var reference = document.getElementById("reference").value;
    var comment = document.getElementById("comment").value;
};

document.write("<b>String</b>" + "<br/>");
document.write("hello world!");
document.write("<br/>");

var x =100;
document.write(x);
document.write("<br/>");

var y = " today is a sunny day."
document.write("im happy because" + y);
document.write("<br/>");

var tuna = 200;
var salmon = 300;
document.write(tuna + salmon);
document.write("<br/>");

var q = "i have a language lesson today."
var w = "i need to go to have the lesson"
var e = 4;
document.write(q + w + " at " + e);
document.write("<br/>");

var say = "John says'how is your day?' "
var someone = "Alice";
document.write(say + " to " + someone + "<br/>");

document.write("<b>number</b><br/>");
var name = " sadel";
var age = 5;
document.write(name + " is the name of my cat and her age is " + age +"<br/>");

var fruit = "cranberry";
var food = "bacon";
var drink = " mojito";
document.write("I love " + fruit + ", " + food + " and " + drink + ".<br/>");

var t = 222;
var u = t + 108;
document.write(u + "<br/>");

var o = 988;
document.write(o + 2 + "<br/>");

document.write("<b>function 1</b></br>");
function button(){
    alert("wrong");
};

document.write(u + "<br/>");
function week(x){
    document.write("Today is" + x + ". </br>");
}
    week("podělí");
    week("úterý");
    week("středa");
    week("čtvrtek");
    week("pátek");
    week("sobota");
    week("neděle");

document.write("<b>function 2</b></br>");
// function čas (date, week){
//     document.write(" Tomorrow is " + date + " and " + week + " . <br/>")
// };
    // čas("27th", "patek");
    // čas("28th", "sobota");
    // čas("29th", "neděle");
    // čas("30th", "pondělí");
    // čas("31st", "úterý");
    // čas("2nd", "středa");

document.write("<b>return statement</b></br>");
function addNumber(cislo1, cislo2){
    var cislo3 = cislo1 + cislo2;
    return cislo3;
}
        document.write(addNumber(3,6));

