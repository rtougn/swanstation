var h, m, s, p, g;
var d = new Date();
h = d.getHours();
m = d.getMinutes();
s = d.getSeconds();
p = 107-((h*60+m)%108);
g = 59-s;
function setFocus(){
setTimeout("logo()", 3000);
dem();
}
function dem(){     
if (p==0 && g==0){
document.getElementById("phut").innerHTML = "XXX";
document.getElementById("giay").innerHTML = "XX";}
else {
if (p<10) document.getElementById("phut").innerHTML = "0"+p;
else document.getElementById("phut").innerHTML = p;
if (g<10) document.getElementById("giay").innerHTML = "0"+g;
else document.getElementById("giay").innerHTML = g;
if (p<4) document.getElementById("time").style.color = "red";
else document.getElementById("time").style.color = "white";
if (g==0){
p--;
g=60;}
g--;
setTimeout("dem()", 1000);}
}
function logo(){
document.getElementById("logo").style.display = "none";
document.getElementById("box").style.display = "block";
document.getElementById("img").style.display = "block";
document.getElementById("code").focus();
var input = document.getElementById("code");
input.addEventListener("keyup", function(event){event.preventDefault();if (event.keyCode == 13) document.getElementById("exc").click();});           
}
function push(){
if ((p<4) && (document.getElementById("code").value == "4 8 15 16 23 42")){
p=108;
g=0;}
}