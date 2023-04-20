//Nav Function----------------------------------->
let menu=document.getElementById("nav")
let logo=document.getElementById("logo")
let bar=document.getElementById("bar")
function menuOpen(){
    console.log("jbfhjebfskdshshkdshh")
    menu.style.left="0"
    logo.style.visibility="hidden"
    bar.style.visibility="hidden"  
}
function menuClose(){
    console.log("hjdshjbdskjfhdkfh")
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


//scroll reveal------------------------->

ScrollReveal().reveal('#landingText', { delay: 500 , distance: '0px' , duration: 300 , easing:'ease-in-out',origin: 'top', });
ScrollReveal().reveal('#c1,#c2,#c3', { delay: 100 , distance: '50px' , duration: 500 , easing:'ease-in-out',origin:'left' });
ScrollReveal().reveal('.counter p',{ delay: 100 , distance: '30px' , duration: 500 , easing:'ease-in-out',origin:'right' ,});
ScrollReveal().reveal('.counter a',{ delay: 100 , distance: '30px' , duration: 500 , easing:'ease-in',origin:'right'});
ScrollReveal().reveal('#aboutText',{ delay:100,distance:"30px",duration:500,easing:'ease-in-out',origin:'top',})
ScrollReveal().reveal('#aboutTextImg1',{ delay:100,distance:"30px",duration:500,easing:'ease-in-out',origin:'left',})
ScrollReveal().reveal('#aboutTextImg2',{ delay:100,distance:"30px",duration:500,easing:'ease-in-out',origin:'right',})
ScrollReveal().reveal('#parallex1 img',{ delay:100,distance:"30px",duration:500,easing:'ease-in-out',origin:'right',})
ScrollReveal().reveal('#parallex1 h1',{ delay:100,distance:"50px",duration:500,easing:'ease-in-out',origin:'left',})

ScrollReveal().reveal('#programPart1',{ delay:100,distance:"30px",duration:500,easing:'ease-in-out',origin:'top',})
ScrollReveal().reveal('#programPart2 .bg-img',{ delay:100,distance:"30px",duration:500,easing:'ease-in-out',origin:'left',})
ScrollReveal().reveal('#programPart2 h1,#programPart2 p,#programPart2 button',{ delay:100,distance:"30px",duration:600,easing:'ease-in-out',origin:'right',})
ScrollReveal().reveal('#eventP1 h1',{ delay:100,distance:"30px",duration:500,easing:'ease-in-out',origin:'left',})
ScrollReveal().reveal('#eventP1 button',{ delay:100,distance:"30px",duration:500,easing:'ease-in-out',origin:'top',})
ScrollReveal().reveal('.eve-tick',{ duration:3000,move:0})


ScrollReveal().reveal('#sponsor p',{ delay:100,distance:"60px",duration:500,easing:'ease-in-out',origin:'left',})
ScrollReveal().reveal('#sponsor h1',{ delay:100,distance:"30px",duration:500,easing:'ease-in-out',origin:'right',})

ScrollReveal().reveal('#sponsor img',{ delay:100,distance:"70px",duration:500,easing:'ease-in-out',origin:'bottom',scale:'0.85'})
ScrollReveal().reveal('#trainerText h1',{ duration:3000,move:0})
ScrollReveal().reveal('#trainerP2 img',{ duration:3000,move:0})
ScrollReveal().reveal('#trainerP2 h1',{ delay:100,distance:"60px",duration:500,easing:'ease-in-out',origin:'bottom'})

ScrollReveal().reveal('#parallex2 h1',{ delay:100,distance:"30px",duration:500,easing:'ease-in-out',origin:'left'})
ScrollReveal().reveal('#parallex2 button',{ delay:100,distance:"30px",duration:500,easing:'ease-in-out',origin:'right'})

ScrollReveal().reveal('#blog h1',{ delay:100,distance:"70px",duration:500,easing:'ease-in-out',origin:'top'})
ScrollReveal().reveal('#blog button',{ delay:100,distance:"70px",duration:500,easing:'ease-in-out',origin:'bottom'})

ScrollReveal().reveal('footer img ,footer button,footer h1,footer p,footer li',{ duration:3000,move:0})

//counter function----------------------------->
let myInterval1=setInterval(f1,100)
let c1=document.getElementById("c1")
let digit=0
function f1(){
 c1.innerHTML=++digit
 if(digit===25){
 clearInterval(myInterval1)
}
}

let myInterval2=setInterval(f2,.001)
let c2=document.getElementById("c2")
let digit2=0
function f2(){
 c2.innerHTML=++digit2
 if(digit2===2450){
 clearInterval(myInterval2)
}
}

let myInterval3=setInterval(f3,10)
let c3=document.getElementById("c3")
let digit3=0
function f3(){
 c3.innerHTML=++digit3+"KM"
 if(digit3===85){
 clearInterval(myInterval3)
}
}

// Team Page scroll reveal
ScrollReveal().reveal('#trainerText h1', { duration: 3000, move: 0 })
ScrollReveal().reveal('#trainerText p', { duration: 3000, move: 0 })
ScrollReveal().reveal('#trainerP2 img', { duration: 4000, move: 0 })
ScrollReveal().reveal('#trainerP2 h1', { delay: 100, distance: "60px", duration: 500, easing: 'ease-in-out', origin: 'bottom' })
ScrollReveal().reveal('#ourskillText p', { delay: 100, distance: "30px", duration: 500, easing: 'ease-in-out', origin: 'top', })
ScrollReveal().reveal('#ourskillText h1', { delay: 500, distance: "20px", duration: 500, easing: 'ease-in-out', origin: 'top', })
ScrollReveal().reveal('#mapupButton button', { delay: 100, distance: "70px", duration: 500, easing: 'ease-in-out', origin: 'left' })
ScrollReveal().reveal('#mapContact', { duration: 4000, move: 0 })
ScrollReveal().reveal('#followUs p', { delay: 100, distance: "30px", duration: 500, easing: 'ease-in-out', origin: 'top', })
ScrollReveal().reveal('#followUs ul', { delay: 100, distance: "30px", duration: 500, easing: 'ease-in-out', origin: 'bottom', })
ScrollReveal().reveal('footer img ,footer button,footer h1,footer p,footer li,footer span,footer input', { duration: 3000, move: 0 })

// Blog Page scroll reveal
ScrollReveal().reveal('#blog h1 ', { delay: 200, distance: "30px", duration: 500, easing: 'ease-in-out', origin: 'top' })
ScrollReveal().reveal('#blog button', { delay: 100, distance: "70px", duration: 500, easing: 'ease-in-out', origin: 'bottom' })
ScrollReveal().reveal('#blogImage', { duration: 4000, move: 0 })
ScrollReveal().reveal('#recentPost p ', { delay: 300, distance: "30px", duration: 500, easing: 'ease-in-out', origin: 'bottom' })
ScrollReveal().reveal('#recentPost2 img ', { delay: 200, distance: "20px", duration: 500, easing: 'ease-in-out', origin: 'bottom', })
ScrollReveal().reveal('#recentPost2 p ', { delay: 200, distance: "20px", duration: 500, easing: 'ease-in-out', origin: 'top', })
ScrollReveal().reveal('#aboutPost  ', { delay: 200, distance: "20px", duration: 500, easing: 'ease-in-out', origin: 'top', })


ScrollReveal().reveal('#demo_Img  ', { delay: 200, distance: "50px", duration: 500, easing: 'ease-in-out', origin: 'left', })
ScrollReveal().reveal('#demo_Div1  ', { delay: 200, distance: "20px", duration: 500, easing: 'ease-in-out', origin: 'right', })
ScrollReveal().reveal('#p1  ', { delay: 200, distance: "50px", duration: 500, easing: 'ease-in-out', origin: 'top', })
ScrollReveal().reveal('#p2  ', { delay: 100, distance: "50px", duration: 500, easing: 'ease-in-out', origin: 'left', })
ScrollReveal().reveal('#p3  ', { delay: 200, distance: "50px", duration: 500, easing: 'ease-in-out', origin: 'right', })
ScrollReveal().reveal('#p4  ', { delay: 200, distance: "50px", duration: 500, easing: 'ease-in-out', origin: 'bottom', })

// ScrollReveal().reveal('#img1  ', { delay: 200, distance: "50px", duration: 500, easing: 'ease-in-out', origin: 'roated', })flip', { rotate: { x: 20, z: 20 } });

ScrollReveal().reveal('#img1', { delay: 200, duration: 500, easing: 'ease-in-out', rotate: {x: 40,z: 0}});
// ___________________________________________________________single_post_________________________________________________________________
ScrollReveal().reveal('#p5  ', { delay: 200, distance: "20px", duration: 500, easing: 'ease-in-out', origin: 'bottom', })
ScrollReveal().reveal('#p6 ', { delay: 200, distance: "20px", duration: 500, easing: 'ease-in-out', origin: 'top', })



//program detail accordian------------------>
const accordionHeader = document.querySelectorAll(".accordion-header");
accordionHeader.forEach((header) => {
header.addEventListener("click", function () {
    const accordionContent = header.parentElement.querySelector(".accordion-content");
    let accordionMaxHeight = accordionContent.style.maxHeight;

    // Condition handling
    if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
    accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
    header.querySelector(".fas").classList.remove("fa-plus");
    header.querySelector(".fas").classList.add("fa-times");
    header.parentElement.classList.add("bg-yellow-400");
    } else {
    accordionContent.style.maxHeight = `0px`;
    header.querySelector(".fas").classList.add("fa-plus");
    header.querySelector(".fas").classList.remove("fa-times");
    header.parentElement.classList.remove("bg-yellow-400");
    }
});
});