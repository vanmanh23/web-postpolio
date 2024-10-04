import { useState, useEffect, useContext, useRef } from "react";
import ReposCard from "./components/ReposCard";
import { StyleContext } from "../../contexts/StyleContext";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface RepositoryProps {
  id: number;
  name: string;
  language: string;
  stargazers_count: number;
  size: number;
  forks: number;
  description: string;
}

export default function Projects() {
  const [arrayItems, setArrayItems] = useState<JSX.Element[]>([]);
  const { isDark } = useContext(StyleContext);

  // Ref cho tất cả các project card
  const projectCardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/vanmanh23/repos"
        );
        const data: RepositoryProps[] = await response.json();
        const items = data.slice(0, 6).map((arraySingleItem: RepositoryProps, index: number) => (
          <div
            key={arraySingleItem.id}
            ref={(el) => {
              if (el) projectCardsRef.current[index] = el;
            }} // Gán ref cho từng card
          >
            <ReposCard {...arraySingleItem} />
          </div>
        ));
        setArrayItems(items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (projectCardsRef.current.length > 0) {
      projectCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { opacity: 0, y: 50 }, // Bắt đầu ẩn và dịch xuống 50px
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card, 
                start: "top 80%", 
                toggleActions: "play none none none", 
              },
              delay: index * 0.2
            }
          );
        }
      });
    }
  }, [arrayItems]); // Chạy animation sau khi các thẻ được render


  return (
    <div className={`${isDark ? "text-white" : ""}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-evenly gap-4">
        {arrayItems}
      </div>
      <div className="flex justify-center">
        <a
          href="https://github.com/vanmanh23"
          className="text-white uppercase font-medium bg-primary px-4 py-2 rounded-md mt-7"
        >
          more projects
        </a>
      </div>
    </div>
  );
}
