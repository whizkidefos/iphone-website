import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { rightImg, watchImg } from "../utils";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0, duration: 1, delay: 0.5});
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, delay: 0.5, stagger: 0.2});
  }, []);
  
  return (
    <section id="highlights" className="w-screen h-full overflow-hidden common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="items-end justify-between w-full mb-12 md:flex">
          <h1 className="section-heading" id="title">Get the highlights.</h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the clip
              <img src={watchImg} alt="play icon" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="play icon" className="ml-2" />
            </p>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Highlights;