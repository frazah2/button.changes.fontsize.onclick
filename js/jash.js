// const input = document.createElement("input")
// document.body.appendChild(input)
// input.setAttribute('placeholder', 'Username')
// let fr = document.getElementsByTagName("input")[0];
// fr.setAttribute('id', 'style1')
// document.getElementById("style1").style.backgroundColor = "beige";
// document.getElementById("style1").style.height = "50px";
// document.getElementById("style1").style.fontSize = "20px";
// document.getElementById("style1").style.margin = "5px";



// const button = document.createElement("button")
// document.body.appendChild(button)
// button.innerText = "Send";
// let id = document.getElementsByTagName("button")[0];
// id.setAttribute('id', 'style')
// document.getElementById("style").style.backgroundColor = "green";
// document.getElementById("style").style.margin = "5px";
// document.getElementById("style").style.color = "white";
// document.getElementById("style").style.width = "100px";
// document.getElementById("style").style.height = "54px";


const Ptag = document.createElement("p")
Ptag.innerText = "This is a paragraph";
document.body.appendChild(Ptag);
let id0 = document.getElementsByTagName("p")[0];
id0.setAttribute('id', 'size4')
 

const button1 = document.createElement("button")
document.body.appendChild(button1)
button1.innerText = "20px";
let id = document.getElementsByTagName("button")[0];
id.setAttribute('id', 'style')
document.getElementById("style").style.backgroundColor = "green";
document.getElementById("style").style.margin = "5px";
document.getElementById("style").style.color = "white";
document.getElementById("style").style.width = "100px";
document.getElementById("style").style.height = "54px";
let onclick = document.getElementsByTagName("button")[0];
onclick.setAttribute('onClick', 'size()')

const button2 = document.createElement("button")
document.body.appendChild(button2)
button2.innerText = "40px";
let id2 = document.getElementsByTagName("button")[1];
id2.setAttribute('id', 'style2')
document.getElementById("style2").style.backgroundColor = "green";
document.getElementById("style2").style.margin = "5px";
document.getElementById("style2").style.color = "white";
document.getElementById("style2").style.width = "100px";
document.getElementById("style2").style.height = "54px";
let onclick1 = document.getElementsByTagName("button")[1];
onclick1.setAttribute('onClick', 'size2()')

const button3 = document.createElement("button")
document.body.appendChild(button3)
button3.innerText = "60px";
let id3 = document.getElementsByTagName("button")[2];
id3.setAttribute('id', 'style3')
document.getElementById("style3").style.backgroundColor = "green";
document.getElementById("style3").style.margin = "5px";
document.getElementById("style3").style.color = "white";
document.getElementById("style3").style.width = "100px";
document.getElementById("style3").style.height = "54px";
let onclick2 = document.getElementsByTagName("button")[2];
onclick2.setAttribute('onClick', 'size3()')

function size(){
    document.getElementById("size4").style.fontSize = "20px";
}
function size2(){
    document.getElementById("size4").style.fontSize = "40px";
}
function size3(){
    document.getElementById("size4").style.fontSize = "60px";
}