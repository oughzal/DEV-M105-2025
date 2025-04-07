const f = document.forms.actions
const target = document.querySelector('#target')
const style = document.createElement('style')
document.head.appendChild(style)
const styleElement = {}
document.querySelectorAll('input[type="range"]').forEach(e =>{
    setStyle(e)
    e.oninput = () => {setStyle(e)}
    e.onchange = () => {setStyle(e)}
});

function setStyle(e) {
    styleElement[e.name] = `#${e.id}::after{content:"${e.value}${e.dataset.unit}";}\n`
    if(e.name !="rotation" && e.name != "radius"){
    target.style[e.name] = e.value + e.dataset.unit
    }else if(e.name == "rotation"){
        target.style.transform = `rotate(${e.value}deg)`
    }else{
        target.style.borderRadius = e.value + e.dataset.unit
        target.style.borderColor = f.borderColor.value
    }
    content =''
    for (const key in styleElement) {
        content += styleElement[key]
    }
    style.textContent = content
}


f.textContent.oninput = ()=> {target.textContent = f.textContent.value}
f.color.oninput = () => {target.style.color = f.color.value}
f.backgroundColor.oninput = () => {target.style.backgroundColor = f.backgroundColor.value}

f.fontFamily.oninput = () => {target.style.fontFamily = f.fontFamily.value}
f.bold.onchange = () => {target.style.fontWeight = f.bold.checked ? 'bold' : 'normal'}
f.italic.onchange = () => {target.style.fontStyle = f.italic.checked ? 'italic' : 'normal'}
f.borderColor.oninput = () => {target.style.borderColor = f.borderColor.value}
f.borderStyle.onchange = () => {target.style.borderStyle = f.borderStyle.value}