// console.clear();




const hero_tl = gsap.timeline();

hero_tl.from('.all-floating-images #forest', {
    // scale : 0,
    y : "50%",
    duration : 0.5,
})

hero_tl.from('#hero-section .text-one .main-word div, #hero-section .text-two .main-word div', {
  y : "150%",
  // delay : 0.6,
  duration : 0.6,
  stagger : 0.05,
})

hero_tl.from('.all-floating-images .object', {
    scale : 0,
    // delay : 2.5,
    duration : 0.6,
})


gsap.to('.all-floating-images .bag', {
    y : -80,
    duration : 3,
    ease: 'none',
    repeat:-1,
    yoyo  : 5,
    stagger : 0.05,
})

gsap.to('.all-floating-images .bottle', {
    y : "-85%",
    rotate : -360,
    duration : 10,
    ease: 'none',
    yoyo  : 5,
    repeat:-1
})
hero_tl.to('#hero-bottom-images img', {
    y : "-40%",
})
hero_tl.to('#hero-bottom-images img:nth-child(3)', {
    y : "-32%",
    ease: "power1.inOut",
    yoyo  : 5,
    repeat:-1,
    duration : 1,
})

hero_tl.to("header .logo-box svg path, .nav-bar .social-icons li a svg path, .nav-bar .menu-btn svg path , .action-btn ul li svg path", {
  fill : "#fff",
  scrollTrigger : {
    trigger: "#hero-bottom-images",
    scroller: "body",
    start: "top 20%",
    scrub : 1,
    // markers : true
}
})
hero_tl.to(".nav-bar .menu-btn span", {
  color : "#0B121E",
  scrollTrigger : {
    trigger: "#hero-bottom-images",
    scroller: "body",
    start: "top 20%",
    scrub : 1,
    // markers : true
}
})


gsap.to("header .logo-box svg path, .nav-bar .social-icons li a svg path, .nav-bar .menu-btn svg path , .action-btn ul li svg path", {
  fill : "#30443D",
  scrollTrigger : {
    trigger: "#section-seven",
    scroller: "body",
    start: "top 40%",
    scrub : 2,
    // markers : true
}
})

gsap.to(".nav-bar .menu-btn span", {
  color : "#fff",
  scrollTrigger : {
    trigger: "#section-seven",
    scroller: "body",
    start: "top 20%",
    scrub : 1,
    // markers : true
}
})

gsap.from('#section-one .title-box .section-title', {
  y : "150%",
  stagger : 0.8,
  scrollTrigger : {
      trigger: "#section-one",
      scroller: "body",
      start: "top 85%",
      // markers : true
  }
})

gsap.from('#section-one video, .section-data p', {
  // y : "-10%",
  duration: 1,
  ease: "power1.in",
  opacity : 0,
  // stagger : 0.5,
  scrollTrigger : {
    trigger: "#section-one",
    scroller: "body",
    start: "top 35%",
    end: "top 5%",
  }
})

gsap.from('#section-one .btn-in-animation', {
  scale : 0,
  opacity : 0,
  ease: "power1.in",
  stagger : 0.08,
  scrollTrigger : {
    trigger: "#section-one",
    scroller: "body",
    start: "45% 40%",
    // markers : true,
  }
})

gsap.from('#section-two .title-box .section-title-one, #section-two .title-box .section-title-two, #section-two .text-center .para20.text-gray', {
  y : "150%",
  stagger : 0.5,
  opacity : 0,
  scrollTrigger : {
      trigger: "#section-two",
      scroller: "body",
      start: "top 55%",
      // markers : true
  }
})
gsap.from('#section-two .btn-in-animation', {
  scale : 0,
  opacity : 0,
  ease: "power1.in",
  stagger : 0.08,
  scrollTrigger : {
    trigger: "#section-two",
    scroller: "body",
    start: "55% 40%",
    // markers : true,
  }
})
gsap.from('#section-three .title-box .section-title-one, #section-three .title-box .section-title-two', {
  y : "150%",
  stagger : 0.5,
  opacity : 0,
  scrollTrigger : {
      trigger: "#section-three",
      scroller: "body",
      start: "top 70%",
      // markers : true
  }
})
gsap.from('#section-three .para20.text-gray', {
  // y : "150%",
  // stagger : 0.5,
  opacity : 0,
  scrollTrigger : {
      trigger: "#section-three",
      scroller: "body",
      start: "top 50%",
      // markers : true
  }
})
gsap.from('#section-three .ngo-partners', {
  // y : "150%",
  // stagger : 0.5,
  opacity : 0,
  scrollTrigger : {
      trigger: "#section-three",
      scroller: "body",
      start: "top 30%",
      // markers : true
  }
})
gsap.from('#section-four .huge-text h1', {
  y : "250%",
  stagger : 0.3,
  duration:1.5,
  ease: "expo.out",
  opacity : 0,
  scrollTrigger : {
      trigger: "#section-four",
      scroller: "body",
      start: "10% 70%",
      // markers : true
  }
})
gsap.from('#section-four p', {
  duration:1.5,
  ease: "expo.out",
  opacity : 0,
  scrollTrigger : {
      trigger: "#section-four",
      scroller: "body",
      start: "10% 65%",
      // markers : true
  }
})
gsap.from('#section-four .number span', {
  y : "250%",
  scale : 0,
  stagger : 0.05,
  duration:1.5,
  ease: "expo.out",
  opacity : 0,
  scrollTrigger : {
      trigger: "#section-four",
      scroller: "body",
      start: "40% 45%",
      // markers : true
  }
})
gsap.from('#section-four .right-side, #section-four .black-stone', {
  ease: "power1.in",
  opacity : 0,
  scrollTrigger : {
      trigger: "#section-four",
      scroller: "body",
      start: "40% 35%",
      // markers : true  
  }
})
gsap.from('#section-four .btn-in-animation', {
  scale : 0,
  opacity : 0,
  ease: "power1.in",
  stagger : 0.08,
  scrollTrigger : {
    trigger: "#section-four",
    scroller: "body",
    start: "20% 60%",
    // markers : true,
  }
})

gsap.from('.nft-card', {
  // y : "150%",
  // stagger : 0.5,
  opacity : 0,
  duration : 3,
  scrollTrigger : {
      trigger: "#section-two",
      scroller: "body",
      start: "20% 40%",
      // markers : true
  }
})

gsap.from('#section-five .text-one .main-word div, #section-five .text-two .main-word div', {
  y : "150%",
  // delay : 0.6,
  duration : 0.6,
  stagger : 0.05,
  scrollTrigger : {
    trigger: "#section-five",
    scroller: "body",
    start: "top 35%",
    end: "top 5%",
    // markers : true,
  }
})
gsap.from('#stripe .stripe-wrapper-one ul', {
  x : "-80%",
  scrollTrigger : {
    trigger: "#section-five",
    scroller: "body",
    start: "50% 55%",
    end: "50% -500%",
    scrub : 1,
    // markers : true,
  }
})
gsap.to('#stripe .stripe-wrapper-two ul', {
  x : "-80%",
  scrollTrigger : {
    trigger: "#section-five",
    scroller: "body",
    start: "50% 55%",
    end: "50% -500%",
    scrub : 1,
    // markers : true,
  }
})



gsap.from('#section-six .title-box .section-title-one, #section-six .title-box .section-title-two', {
  y : "150%",
  stagger : 0.5,
  opacity : 0,
  scrollTrigger : {
      trigger: "#section-six",
      scroller: "body",
      start: "top 50%",
      // markers : true
  }
})
gsap.from('#section-seven .text-one .main-word div, #section-seven .text-two .main-word div', {
  y : "150%",
  // delay : 0.6,
  duration : 0.6,
  stagger : 0.08,
  scrollTrigger : {
    trigger: "#section-seven",
    scroller: "body",
    start: "top 50%",
    // end: "top 5%",
    // markers : true,
  }
})
gsap.from('#section-seven .btn-in-animation', {
  scale : 0,
  opacity : 0,
  stagger : 0.08,
  scrollTrigger : {
    trigger: "#section-seven",
    scroller: "body",
    start: "top 45%",
    end: "top 5%",
  }
})

gsap.from('.bottom-leaves img', {
  scale : 0,
  y : "150%",
  // delay : 0.6,
  // duration : 0.6,
  stagger : 0.08,
  scrollTrigger : {
    trigger: "#section-seven",
    scroller: "body",
    start: "top 10%",
    // end: "top 5%",
    // markers : true,
  }
})


// gsap.to('#scrolling-stripes .stripe-01', {
//   x : "50%",
//   scrollTrigger : {
//     trigger: "#section-five",
//     scroller: "body",
//     start: "top 10%",
//     end: "top -55%",
//     scrub : 1,
//     markers : true,
//   }
// })
// gsap.to('#scrolling-stripes .stripe-02', {
//   x : "50%",
//   scrollTrigger : {
//     trigger: "#section-five",
//     scroller: "body",
//     start: "top 10%",
//     end: "top -55%",
//     scrub : 1,
//     markers : true,
//   }
// })









const item = document.querySelector("#hero-section");
const effect = document.querySelectorAll(".mouse-effect");
const rect = item.getBoundingClientRect();

const randomMin = gsap.utils.random(-35, 80, 1, true);
const randomPlus = gsap.utils.random(35, -80, 1, true);
const width = rect.width;
const height = rect.height;


const arraySetters = [];

effect.forEach((item, index) => {
  const setter = {
    x: gsap.quickSetter(item, "x", "px"),
    y: gsap.quickSetter(item, "y", "px"),
    minus: gsap.utils.mapRange(0, width, randomMin(), randomPlus()),
    plus: gsap.utils.mapRange(0, width, randomMin(), randomPlus()),
  };
  arraySetters.push(setter)
})

document.querySelector('body').addEventListener("mousemove", (e) => {
  arraySetters.forEach((item, index) => {
    const obj = arraySetters[index];
    obj.x(obj.minus(e.clientX - rect.left))
    obj.y(obj.plus(e.clientY - rect.top))
  });
});


