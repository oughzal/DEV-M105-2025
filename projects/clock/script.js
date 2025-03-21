const  h = document.getElementById('h')
const  m = document.getElementById('m')
const  s = document.getElementById('s')
setInterval(function(){
var d = new Date() ;
var seconds = d.getSeconds()*6 -90;
var minutes = d.getMinutes()*6 -90;
var hour = (d.getHours()%12)*30 -90;
h.style.transform = "rotate("+ hour+"deg)";
m.style.transform = "rotate("+ minutes+"deg)";
s.style.transform = "rotate("+ seconds+"deg)";

},1000)