 const list = document.getElementById("flags")
 const pages = document.getElementById("pages")
 var p = 0;
 var nbFlags = 12
 function createLi(i){
  let li= document.createElement("li")
  li.classList.add("page-item")
    li.innerHTML = '<a class="page-link" href="#">'+i+'</a>'
    if(i=="P") {
      li.innerHTML = '<a class="page-link" href="#"><<</a>'
      li.classList.add("active")
    }
    if(i=="N") {
      li.innerHTML = '<a class="page-link" href="#">>></a>'
      li.classList.add("active")
    }
  
    li.addEventListener('click',function(){
    if (i=="N"){
      p++
      if (p > parseInt(flags.length/nbFlags) ) p=0
    }
    else if(i=="P"){
      p--
      if( p <0 ) p = parseInt(flags.length /nbFlags)
    }
    else{p=i}
    loadflags(p*nbFlags);
    for(let c of pages.children){
      c.classList.remove("active")
    }
    pages.firstChild.classList.add("active")
    this.classList.add("active")
    pages.lastChild.classList.add("active")
    pages.children[p+1].classList.add("active")
  })
  pages.appendChild(li)
 }
 function pagination(){
  pages.innerHTML =""
  createLi("P")
  for(let i = 0; i < parseInt(flags.length)/nbFlags;i++){
    createLi(i)
  }
  createLi("N")

 }
 function flagCard(C){
  const card = document.createElement("div")
    card.classList.add("card")
    card.classList.add("my-1")
    card.classList.add("mx-1")
    card.style.width = "300px"
    card.style.display ="inline-block"
    card.style.cursor="pointer"
    const img = document.createElement('img')
    img.src = 'flags/'+ C.code +".svg"
    img.alt = C.name
    img.width ="100"
    img.height ="100"
    img.classList.add("card-img-top")
    const footer = document.createElement("div")
    footer.classList.add("card-footer")
    footer.textContent = C.name
    card.addEventListener('click',function(){
        alert(C.name)
    })
    card.appendChild(img)
    card.appendChild(footer)
    list.appendChild(card)
 }
 function loadflags(s){
  list.innerHTML=""
  for (let i=s; i < flags.length && i <s +10;i++){
    flagCard(flags[i])
  }
 }
  loadflags(p*nbFlags)
  pagination()