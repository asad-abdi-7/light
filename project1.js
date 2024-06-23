let light=document.querySelector("#light")
let onbutton=document.querySelector("#onbtn")
let offbutton=document.querySelector("#offbtn")

onbutton.addEventListener("click",function(){
    light.style.backgroundColor="yellow"
    light.style.borderColor="yellow"
})
offbutton.addEventListener("click",function(){
    light.style.backgroundColor="white"
})