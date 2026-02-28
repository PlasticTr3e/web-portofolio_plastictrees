import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from([h11.current, h12.current, h13.current], {
      y: 30,             
      opacity: 0,
      duration: 1,       
      ease: "power2.out",
      stagger: 0.2,      
    })
      .from(myimageref.current, {
        scale: 0.9,        
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      }, "-=0.3");         
  }, []);

  return (
    <main className="container mx-auto max-width section grid grid-cols-1 md:grid-cols-12 items-center gap-10">
      {/* Left: Text Content - Spans 7 columns */}
      <div className="md:col-span-7 order-2 md:order-1 text-center md:text-left">
        <h1
          ref={h11}
          className="text-3xl md:text-5xl lg:text-6xl text-dark-heading dark:text-light-heading font-bold mb-2"
        >
          Hi,🌻<br />My Name is
        </h1>
        <h1
          ref={h12}
          className="text-4xl md:text-6xl lg:text-8xl text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.6)] font-extrabold leading-none mb-4"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="text-xl md:text-3xl lg:text-4xl text-content dark:text-light-heading font-medium opacity-80"
        >
          {tagline}
        </h2>
      </div>

      {/* Right: Profile Image - Spans 5 columns */}
      <div className="md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end">
        <div className="relative group">
          {/* Decorative Glow Ring behind image */}
          <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-2xl group-hover:bg-yellow-400/30 transition-all"></div>

          <img
            ref={myimageref}
            className="relative w-64 md:w-80 lg:w-96 aspect-square object-cover rounded-2xl border-2 border-dark-heading dark:border-light-heading p-2 grayscale hover:grayscale-0 transition-all duration-500"
            src={img}
            alt="Hamud Abdul Aziz"
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
