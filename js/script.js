const dots = document.querySelectorAll(".dots")
const section1 = document.querySelector(".sec1")
const section4 = document.querySelector(".s4d")
const section4Div = document.querySelectorAll(".s4div")
const dialog = document.querySelector('.dialog')
const menuSvg = document.querySelector(".header-svg")
const menuLi = document.querySelector(".menu-li")

let active = 0
let count = true

function menuFn(){
    menuSvg.style.transition = 'rotate 600ms';
    
if(count ){
     dialog.style.animation = "opacity 600ms"
        dialog.style.display = "block"
     menuSvg.style.rotate = "90deg"
     count = false
     
  
 }else {
     menuSvg.style.rotate = "0deg"
     dialog.style.animation = "opacity2 600ms"
     setTimeout(()=>{
 dialog.style.display = "none"
     },550)
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



 
  
function moveS4dSlider(){ 
    section4.style.transform = "translateX( 0%)"
   
   
    for(let i of section4Div){
        i.addEventListener("click",function(){
            if(window.matchMedia("(max-width: 500px)").matches){
           let className = i.className.split(" ")[1]
           section4.style.transition = 'transform 500ms';
            switch(className){
case 's4d-1':
    section4.style.transform = "translateX(85%)";
    break
case 's4d-2':
    section4.style.transform = `translateX( 0%)`;
    break
case 's4d-3':
    section4.style.transform = "translateX( -85%)";
    break

            }
        }})
    }
   }



function sliderPosition(){
   
        section1.style.transform = `translateX(${-active*25}%)`;
        section1.style.transition = 'transform 700ms';
        
        
}

function moveSlider(){
      
section1.addEventListener("click", function(e){
    // window.matchMedia //
    if (window.matchMedia("(max-width: 500px)").matches) {
        x = e.offsetX;
    dots[active].style.backgroundColor = 'rgba(245, 242, 242, 0.5)'
    dots[active].style.scale = 1
    if(x > e.target.offsetWidth/2){
        active++
        if(active > 3) active = 0 ;
        sliderPosition()

    }else{
        active--
        if(active < 0) active = 3 ; 
        sliderPosition()
    }
    dots[active].style.backgroundColor = '#fff'
    dots[active].style.scale = 1.05
    }
}) 

}

function dotsMove(){
     
    dots[active].style.backgroundColor = '#fff'
    dots[active].style.scale = 1.05
    for(let i = 0; i < dots.length ; i++){
        dots[i].addEventListener("click" , function(){
            dots[active].style.backgroundColor = ' rgba(245, 242, 242, 0.5)'
            dots[active].style.scale = 1
            active = i
            sliderPosition(active)
            dots[active].style.backgroundColor = '#fff'
            dots[active].style.scale = 1.05
        })
    }
 
}

window.addEventListener("DOMContentLoaded", function(){
   
    moveSlider()
    dotsMove()
    moveS4dSlider()
   menu()
    
    
    
})

window.addEventListener("resize", function(){
    if(window.matchMedia("(min-width: 500px)").matches){
        count = true
        dialog.style.display = "none"
        menuSvg.style.rotate = "0deg"
    }
  
    if(window.matchMedia("(max-width: 500px)").matches){
      
        moveS4dSlider()
        dotsMove()
         sliderPosition()
   
        
         
       
    } else{
      
        dotsMove()
         moveS4dSlider()
        section1.style.transform = `translateX(0%)`;
       
         
    }
})