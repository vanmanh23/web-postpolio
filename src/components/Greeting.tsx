import { useContext } from "react";
import emoji from "react-easy-emoji";
import SocialMedia from "./SocialMedia";
import { Link } from "react-scroll";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { StyleContext } from "../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  const greeting = {
    username: "Saad Pasta",
    title: "Hi all, I'm Manh Nguyen",
    subTitle:
      "A passionate Front end Software Developer🚀having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs  and some other cool libraries and frameworks.",
    resumeLink:
      "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
    displayGreeting: true, // Set false to hide this section, defaults to true
  };
  return (
    <div className={`flex md:flex-row items-center w-full h-full justify-center flex-col p-2 pt-7 md:pt-auto md:p-10 ${isDark ? 'text-white' : ''}`}>
      <div className="flex flex-col gap-3">
        <h1 className="flex flex-row md:text-5xl md:justify-start justify-center text-2xl font-medium md:my-7 text-center">
          {greeting.title} <span>{emoji("👋")}</span>
        </h1>
        <p className="text-base md:w-9/12 w-full text-center opacity-55 text-wrap leading-7 md:leading-10 md:my-5 my-2">
          {greeting.subTitle}
        </p>
        <div className="flex justify-center md:justify-start">
          <SocialMedia />
        </div>
        <div className="flex flex-row gap-4 mt-9 items-center">
          <button className="bg-primary text-white px-4 py-2 text-xs md:text-xl rounded-md">
            <Link
              to="ContactMe"
              smooth={true}
              offset={-100}
              duration={500}
              className="uppercase font-medium"
            >
              contact me
            </Link>
          </button>
          {greeting.resumeLink && (
            <a
              // href="../../public/Resume.pdf"
              href="https://drive.google.com/file/d/1q9WQm0GloswZKDRhGom-z4vi-8uXyxxe/view?usp=drive_link"
              download="Resume.pdf"
              className="download-link-button"
            >
              <button className="bg-primary text-white px-4 py-2 text-xs md:text-xl rounded-md uppercase font-medium">
                Download my resume
              </button>
            </a>
          )}
        </div>
      </div>
      <div className="flex justify-center w-full h-full">
        <DotLottieReact
          src="https://lottie.host/dc220d90-4313-4db0-93d8-180e9c16ac01/Xp5vpnFBB0.lottie"
          loop
          autoplay
          style={{ height: "400px", width: "400px" }}
        />
      </div>
    </div>
  );
}
