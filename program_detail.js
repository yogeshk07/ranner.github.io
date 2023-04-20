//Nav Function----------------------------------->
let menu=document.getElementById("nav")
let logo=document.getElementById("logo")
let bar=document.getElementById("bar")
function menuOpen(){
    menu.style.left="0"
    logo.style.visibility="hidden"
    bar.style.visibility="hidden"  
}
function menuClose(){
    menu.style.left="-100%"
    logo.style.visibility="visible"
    bar.style.visibility="visible"
}


let programMenu=document.getElementById("programMenu")
function dropdown1(){
    programMenu.style.display="block";
}
function dropdown1End(){
    programMenu.style.display="none";
}

let pagesMenu=document.getElementById("pagesMenu")
function dropdown2(){
    pagesMenu.style.display="block";
}
function dropdown2End(){
    pagesMenu.style.display="none";
}


ScrollReveal().reveal('#demo_Img  ', { delay: 200, distance: "50px", duration: 900, easing: 'ease-in-out', origin: 'left', })
ScrollReveal().reveal('#demo_Div1  ', { delay: 200, distance: "50px", duration: 900, easing: 'ease-in-out', origin: 'right', })
ScrollReveal().reveal('#p1  ', { delay: 200, distance: "50px", duration: 900, easing: 'ease-in-out', origin: 'top', })
ScrollReveal().reveal('#p2  ', { delay: 100, distance: "50px", duration: 900, easing: 'ease-in-out', origin: 'left', })
ScrollReveal().reveal('#p3  ', { delay: 200, distance: "50px", duration: 900, easing: 'ease-in-out', origin: 'right', })
ScrollReveal().reveal('#p4  ', { delay: 200, distance: "50px", duration: 900, easing: 'ease-in-out', origin: 'bottom', })

// ScrollReveal().reveal('#img1  ', { delay: 200, distance: "50px", duration: 900, easing: 'ease-in-out', origin: 'roated', })flip', { rotate: { x: 20, z: 20 } });

ScrollReveal().reveal('#img1', { delay: 200, duration: 900, easing: 'ease-in-out', rotate: {x: 40,z: 0}});
// ___________________________________________________________single_post_________________________________________________________________
ScrollReveal().reveal('#p5  ', { delay: 200, distance: "20px", duration: 900, easing: 'ease-in-out', origin: 'bottom', })
ScrollReveal().reveal('#p6 ', { delay: 200, distance: "20px", duration: 900, easing: 'ease-in-out', origin: 'top', })