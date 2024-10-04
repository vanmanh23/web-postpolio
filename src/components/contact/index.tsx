import { useEffect, useRef } from 'react';
import pictureofme from '../../assets/images/pictureofme.jpg';
import SocialMedia from '../SocialMedia';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const contactInforRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const avatarRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    // Image animation (slide from left)
    gsap.fromTo(
        avatarRefs.current,
      { x: 100, opacity: 0 }, // Initial position (to the left and invisible)
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: avatarRefs.current,

          start: 'top 80%', // Start animation when the top of the image is at 80% of viewport
          scrub: false,
        },
        once: true,
      }
    );

    // Text animation (fade in from top sequentially)
    contactInforRef.current.forEach((textEl, index) => {
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
          once: true,
          delay: index * 0.2, // Delay each text appearance
        }
      );
    });
  }, []);
  return (
    <div className='flex flex-col justify-center items-center gap-3 md:gap-10 bg-sectionbg-light md:px-20 px-3 rounded-2xl py-3'>
        <div className='text-left mt-4'>
            <h2 className='md:text-4xl text-2xl font-bold'>Reach Out to me!</h2>
        </div>
        <div className='flex md:flex-row flex-col-reverse gap-3 justify-center items-center'>
            <div className='flex flex-col gap-3 text-center md:text-left'>
                <p ref={(el) => contactInforRef.current.push(el)} className='md:text-xl text-base'>Frontend Developer</p>
                <p ref={(el) => contactInforRef.current.push(el)} className='md:text-xl text-sm text-gray-600 w-full md:w-3/4'>I am a Frontend Developer. I love programming, especially creating websites with good user interfaces, to meet the needs of users.</p>
                <p ref={(el) => contactInforRef.current.push(el)} className='md:text-xl text-sm'>Phone: 0962337593</p>
                <p ref={(el) => contactInforRef.current.push(el)} className='md:text-xl text-sm'>Email: manhcan03@gmail.com</p>
                <div ref={(el) => contactInforRef.current.push(el)} className='mt-4 flex md:justify-start justify-center'>
                    <SocialMedia />
                </div>
            </div>
            <div className='flex justify-center items-center w-3/6 '>
            <img src={pictureofme} alt="picture of me" className='rounded-3xl' ref={(el) => avatarRefs.current.push(el)}/>
            </div>
        </div>
        <div className='flex justify-center md:mb-4'>
            <p className='text-sm md:text-2xl text-gray-600'>Made with ❤️ by Manh Nguyen</p>
        </div>
    </div>
  )
}
