import sofitgymproject from '../../assets/images/sofitgymproject.png';
import ExperienceCard from './components/ExperienceCard';
import quizlogo from '../../assets/images/quiz-logo.png';
import airbnblogo from '../../assets/images/airbnb-logo.png';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ExperiencesProps {
  inView: boolean; 
}
export default function Experiences({ inView }: ExperiencesProps) {
    const projectsList = [
        {
            name: "Landing Gym",
            description: "Project landingGym is a modern and sleek landing page for a gym, inspired by the design and features of Sofit Gym.",
            img: sofitgymproject,
            url: "https://landing-gym-six.vercel.app/",
            themecolor: "#faa718"
        },
        {
            name: "multiple choice",
            description: "project multiple choice with react-native and repo",
            img: quizlogo,
            url: "https://github.com/vanmanh23/quiz-app",
            themecolor: "#7673c0"
        },
        {
            name: "Airbnb-clone",
            description: "online booking platform inspired by Airbnb, bringing a completely new experience to users.",
            img: airbnblogo,
            url: "https://github.com/vanmanh23/airbnbapp",
            themecolor: "#f7565e"
        },
    ]
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
      if (inView) {
        cardRefs.current.forEach((card, index) => {
          if (card) {
            gsap.fromTo(
              card,
              { x: -200, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: 'power3.out',
                delay: index * 0.2,
              }
            );
          }
        });
      }
    }, [inView]); 
  return (
    <div className='md:full flex md:flex-row flex-col gap-5 justify-center items-center'>
        {
            projectsList.map((item, index) => (
                <div key={index} ref={(el) => (cardRefs.current[index] = el)}>
                    <a href={item.url} >
                    <ExperienceCard name={item.name} description={item.description} img={item.img} timeduration="2022 - 2022" theme={item.themecolor} />
                    </a>
                </div>
            ))
        }
    </div>
  )
}
