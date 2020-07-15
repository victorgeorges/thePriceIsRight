//gsap.to(".img-inicial", {duration: 2, opacity: 0.5});
/* gsap.to(".box", {duration: 2, x: 300});*/

//img logotipo
gsap.from(".img-inicial", {duration: 3, x:300, opacity: 0, scale: 0.5}); 

 /* gsap.to(".botao-comecar", 1, {
    scale: 0.1, 
    y: 60,
    yoyo: true,
    repeat: -1, 
    ease: "power1.inOut",
    delay:1,
    stagger: {
      amount: 1.5, 
      grid: "auto",
      from: "center"
    }
  });  */


  //botao comecar

  gsap.from(".botao-comecar", {
    scale: 0.5, 
    opacity: 0, 
    delay: 0.5, 
    stagger: 0.2,
    ease: "elastic", 
    duration: 2,
    force3D: true
  });
  
  document.querySelectorAll(".botao-comecar").forEach(function(box) {
    box.addEventListener("click", function() {
      gsap.to(".botao-comecar", {
        duration: 0.5, 
        opacity: 0, 
        y: -100, 
        stagger: 0.1,
        ease: "back.in"
      });
    });
  });



  gsap.to(".titulo", {duration: 2, rotation: 360, scale: 1.2});