import React, { useContext, useEffect } from "react";
import Navbar from "../components/navbar";
import Greeting from "../components/Greeting";
import Skills from "../components/skills";
import Experiences from "../components/experiences";
import Projects from "../components/projects";
import Contact from "../components/contact";
import { StyleContext } from "../contexts/StyleContext";
import { useInView } from 'react-intersection-observer';

function Main() {
  const [showNavbar, setShowNavbar] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const { isDark } = useContext(StyleContext);

// Sử dụng useInView để bắt ref của section Experiences
const [experiencesRef, inView] = useInView({
  triggerOnce: false, // Chạy mỗi lần vào và ra khỏi màn hình
  threshold: 0.3, // Phần trăm hiển thị cần để kích hoạt callback (30% vào tầm nhìn)
});
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(currentScrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  //
  return (
    <div
      className={`w-full ${isDark ? "bg-primary-dark" : "bg-primary-light"}`}
    >
      <div
        className={`fixed top-0 ${
          isDark ? "text-white" : ""
        } left-0 w-full z-50 transition-transform duration-500 ease-in-out ${
          showNavbar
            ? "transform translate-y-0"
            : "transform  -translate-y-full"
        }`}
      >
        <Navbar />
      </div>
      <div className="min-h-screen mt-20 px-10">
        <Greeting />
      </div>
      <section
        id="Skills"
        className={`min-h-screen md:mt-0 px-10 animate-fadeIn flex transition-opacity duration-[1.5s] ease-in-out `}
      >
        <Skills />
      </section>
      <section
        id="WorkExperiences"
        ref={experiencesRef} // Bắt ref của Experiences section
        className={`min-h-screen px-10  mt-20 animate-fadeIn transition-opacity duration-[1.5s] ease-in-out ${
          isDark ? "text-white" : ""
        } `}
      >
        <h2 className="text-4xl mb-5 animate-slideIn">Experiences</h2>
        <Experiences inView={inView}/>
      </section>
      <section
        id="OpenSource"
        className={`min-h-screen px-10 md:mt-0 mt-20 animate-fadeIn transition-opacity duration-[1.5s] ease-in-out ${
          isDark ? "text-white" : ""
        }`}
      >
        <h2 className="text-3xl font-bold animate-slideIn">Open Source</h2>
        <Projects />
      </section>
      <section
        id="ContactMe"
        className={`min-h-screen px-14 animate-fadeIn mt-14 transition-opacity duration-[1.5s] ease-in-out `}
      >
        <Contact />
      </section>
    </div>
  );
}

export default Main;
