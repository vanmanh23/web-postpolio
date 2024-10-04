import SoftwareSkills from './components/SoftwareSkills'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import greeting from '../../assets/images/greetingsecond.jpg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);
export default function Skills() {
  const imgRef = useRef(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    // Image animation (slide from left)
    gsap.fromTo(
      imgRef.current,
      { x: -200, opacity: 0 }, // Initial position (to the left and invisible)
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top 80%', // Start animation when the top of the image is at 80% of viewport
          scrub: true,
        },
      }
    );

    // Text animation (fade in from top sequentially)
    textRefs.current.forEach((textEl, index) => {
      gsap.fromTo(
        textEl,
        { y: -50, opacity: 0 }, // Initial position (from the top)
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textEl,
            start: 'top 80%',
          },
          delay: index * 0.2, // Delay each text appearance
        }
      );
    });
  }, []);
  return (
    <div className='flex md:flex-row flex-col-reverse gap-12 justify-between items-center py-4 bg-sectionbg-light rounded-2xl px-2'>
        <div className='md:w-full w-full'>
            <img ref={imgRef} src={greeting} alt="greeting" />
        </div>
        <div className='flex flex-col gap-4'>
            <h1 ref={(el) => (textRefs.current[0] = el)} className='md:text-5xl text-3xl text-center md:text-left font-medium md:mb-3'>What I can do</h1>
            <p ref={(el) => (textRefs.current[1] = el)} className='md:text-xl text-gray-400 text-center md:text-left text-base'>As a frontend web developer, mastering and proficiently using advanced technologies is indispensable. Below are the important technologies that I have been using to develop modern and effective web applications.</p>
            <div ref={(el) => (textRefs.current[2] = el)} className='my-4 flex justify-center items-center text-center'>
            <SoftwareSkills />
            </div>
            <p ref={(el) => (textRefs.current[3] = el)} className='md:text-xl text-base text-gray-400'><FontAwesomeIcon icon={faBolt} className='text-yellow-500'/>  Develop highly interactive Front end / User Interfaces for your web applications</p>
            <p ref={(el) => (textRefs.current[4] = el)} className='md:text-xl text-base text-gray-400'><FontAwesomeIcon icon={faBolt} className='text-yellow-500'/>  I am passionate about creating user-centric, visually appealing, and highly functional websites and web applications</p>
            <p ref={(el) => (textRefs.current[5] = el)} className='md:text-xl text-base text-gray-400'><FontAwesomeIcon icon={faBolt} className='text-yellow-500'/>  Creating beautiful designs to put in the hands of users, meeting everyone's needs is what I want</p>
        </div>
    </div>
  )
}
