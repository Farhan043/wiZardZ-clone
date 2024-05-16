Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.makeMagnet("nav #part2" , {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

gsap.from("nav, #part1 ,#part2",{
    y: -200,
    duration: 0.1,
    delay: 0.2,
    stagger:1,
  })

