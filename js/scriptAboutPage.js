const dialog = document.querySelector('.menu')
const menuSvg = document.querySelector(".header-svg")
const menuLi = document.querySelector(".menu-li")

let active = 0
let count = true

 
function menuFn(){
    menuSvg.style.transition = 'rotate 800ms';
    
if(count ){
     dialog.style.animation = "opacity 800ms"
        dialog.style.display = "block"
     menuSvg.style.rotate = "90deg"
     count = false
     
  
 }else {
     menuSvg.style.rotate = "0deg"
     dialog.style.animation = "opacity2 800ms"
     setTimeout(()=>{
 dialog.style.display = "none"
     },750)
     count = true
 } 

 }

function menu(){
    if(window.matchMedia("(max-width: 500px)").matches){
        count = false
        menuFn()
    }
menuLi.addEventListener("click",menuFn )
}

window.addEventListener("DOMContentLoaded", function(){
   menu() 
})

window.addEventListener("resize", function(){
    if(window.matchMedia("(min-width: 500px)").matches){
        count = true
        dialog.style.display = "none"
        menuSvg.style.rotate = "0deg"
    }})