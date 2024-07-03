import React from "react";
import Navbar from "../components/navbar";
import Greeting from "../components/Greeting";
import Skills from "../components/skills";


function Main() {
   
  return (
    <div>
      <Navbar />
      <div className="h-screen ">
      <Greeting />
      </div>
      <section id="Skills" className="min-h-screen px-10 animate-fadeIn">
        {/* <h2 className="text-3xl font-bold animate-slideIn">Skills</h2> */}
        <Skills />
        {/* Content */}
      </section>
      <section id="WorkExperiences" className="min-h-screen p-10 bg-gray-200 animate-fadeIn">
        <h2 className="text-3xl font-bold animate-slideIn">Work Experiences</h2>
        {/* Content */}
      </section>
      <section id="OpenSource" className="min-h-screen p-10 bg-gray-300 animate-fadeIn">
        <h2 className="text-3xl font-bold animate-slideIn">Open Source</h2>
        {/* Content */}
      </section>
      <section id="ContactMe" className="min-h-screen p-10 bg-gray-400 animate-fadeIn">
        <h2 className="text-3xl font-bold animate-slideIn">Contact Me</h2>
        {/* Content */}
      </section>
    </div>
  );
}

export default Main;