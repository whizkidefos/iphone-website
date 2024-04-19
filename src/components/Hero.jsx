import React, { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect } from 'react';

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

    const handleResize = () => {
        if (window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo);
        } else {
            setVideoSrc(heroVideo);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useGSAP(() => {
    gsap.to('.hero-title', { duration: 1, delay: 1.5, y: 0, opacity: 1, ease: 'power4.out' });
    gsap.to('#cta', { duration: 2, delay: 2.5, y: -50, opacity: 1, ease: 'power4.out' });
    }, []);
  return (
    <section className="relative w-full bg-black nav-height">
        <div className="flex-col w-full h-5/6 flex-center">
            <p className="hero-title">iPhone 15 Pro</p>
            <div className="w-9/12 md:w-10/12">
                <video autoPlay muted playsInline={true} key={videoSrc} className='pointer-events-none'>
                    <source src={videoSrc} type='video/mp4' />
                </video>
            </div>
        </div>

        <div id="cta" className="flex flex-col items-center translate-y-20 opacity-0">
            <a href="#highlights" className="btn">Buy now</a>
            <p className="text-xl font-normal">From £52/month or £1029</p>
        </div>
    </section>
  )
}

export default Hero;