/*global math*/


var display = document.createElement('input');
display.id = 'myDisplay';
document.body.appendChild(display);

document.write("<br>");

var btn1 = document.createElement("BUTTON");
btn1.textContent = 1;  
btn1.classList.add("mystyle");
btn1.addEventListener('click', clicked);

document.body.appendChild(btn1);

var btn2 = document.createElement("BUTTON");  
btn2.textContent = 2;   
btn2.addEventListener('click', clicked);
document.body.appendChild(btn2);

var btn3 = document.createElement("BUTTON");  
btn3.textContent = 3;     
btn3.addEventListener('click', clicked);
document.body.appendChild(btn3);

var btnadd = document.createElement("BUTTON");  
btnadd.textContent = '+'; 
btnadd.addEventListener('click', clicked);
document.body.appendChild(btnadd);

document.write("<br>");

var btn4 = document.createElement("BUTTON");  
btn4.textContent = 4; 
btn4.addEventListener('click', clicked);
document.body.appendChild(btn4);

var btn5 = document.createElement("BUTTON");  
btn5.textContent = 5;     
btn5.addEventListener('click', clicked);
document.body.appendChild(btn5);

var btn6 = document.createElement("BUTTON");  
btn6.textContent = 6; 
btn6.addEventListener('click', clicked);
document.body.appendChild(btn6);

var btnsub = document.createElement("BUTTON");  
btnsub.textContent = '-';  
btnsub.addEventListener('click', clicked);
document.body.appendChild(btnsub);

document.write("<br>");

var btn7 = document.createElement("BUTTON");  
btn7.textContent = 7; 
btn7.addEventListener('click', clicked);
document.body.appendChild(btn7);

var btn8 = document.createElement("BUTTON");  
btn8.textContent = 8; 
btn8.addEventListener('click', clicked);
document.body.appendChild(btn8);

var btn9 = document.createElement("BUTTON");  
btn9.textContent = 9;        
btn9.addEventListener('click', clicked);
document.body.appendChild(btn9);

var btnx = document.createElement("BUTTON");  
btnx.textContent = '*';    
btnx.addEventListener('click', clicked);
document.body.appendChild(btnx);

document.write("<br>");

var btndiv = document.createElement("BUTTON");  
btndiv.textContent = '/';  
btndiv.addEventListener('click', clicked);
document.body.appendChild(btndiv);

var btnp = document.createElement("BUTTON");  
btnp.textContent = '.'; 
btnp.addEventListener('click', clicked);
document.body.appendChild(btnp);

var btn0 = document.createElement("BUTTON");  
btn0.textContent = 0;   
btn0.addEventListener('click', clicked);
document.body.appendChild(btn0);

var btneq = document.createElement("BUTTON");  
btneq.textContent = '=';   
btneq.addEventListener('click', equals);
document.body.appendChild(btneq);

//Functional.

function clicked(event) {
    var but = event.target;
    var val = but.textContent;
    display.value = display.value + val;
 }
 
 function equals() {
     var solve = display.value;
     display.value = math.eval(solve);
 }
 
 


