let ms = 0
let s = 0
let m = 0
let h = 0
let c = null
chrono = document.querySelector("#chrono")
document.querySelector("#play").onclick = ()=>{
    if(c==null){
      c = setInterval(addOneMs,10)  
    }
    
}
 document.querySelector("#stop").onclick = ()=>{
    clearInterval(c)
    c = null
}
 document.querySelector("#reset").onclick = ()=>{
    clearInterval(c)
    c= null
    ms=-1
    s = 0
    m=0
    h=0
    addOneMs()
}

function addOneMs(){
    ms++;
    if(ms == 100){
        ms =0
        s++
    }
    if(s==60){
        s=0
        m++
    }
    if(m==60){
        m=0
        h++
    }
    t = `${h.toString().padStart(2,"0")}:${m.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}:${ms.toString().padStart(2,"0")}`
    t = t.split("").map(char =>(char !=":")? `<span>${char}</span>` : `<span style="text-align:center;">${char}</span>`).join("");
    chrono.innerHTML = t
    
    
}