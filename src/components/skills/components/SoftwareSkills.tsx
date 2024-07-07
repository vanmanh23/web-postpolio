import React from 'react';
import htmlIcon from '../../../assets/images/html-5.png'; 
import  cssIcon  from '../../../assets/images/css-3.png'; 
import  javascroptIcon  from '../../../assets/images/javascript.png'; 
import  typescriptIcon  from '../../../assets/images/typescript.png'; 
import  sassIcon  from '../../../assets/images/sass.png'; 
import  nodejsIcon  from '../../../assets/images/nodejs.png'; 
import  nextjsIcon  from '../../../assets/images/nextjs.png'; 
import  postgressIcon  from '../../../assets/images/postgresql.png'; 
import  reactIcon  from '../../../assets/images/library.png';

export default function SoftwareSkills() {
    const softwareSkills = [
        {
            name: "html-5",
            frontawesomeclassname: htmlIcon,
        },
        {
            name: "css3",
            frontawesomeclassname: cssIcon,
        },
        {
            name: "sass",
            frontawesomeclassname: sassIcon,
        },
        {
            name: "javascript",
            frontawesomeclassname: javascroptIcon,
        },
        {
            name: "reactjs",
            frontawesomeclassname: reactIcon,
        },
        {
            name: "nodejs",
            frontawesomeclassname: nodejsIcon,
        },
        {
            name: "typescript",
            frontawesomeclassname: typescriptIcon,
        },
        {
            name: "nextjs",
            frontawesomeclassname: nextjsIcon,
        },
        {
            name: "PostgreSQL",
            frontawesomeclassname: postgressIcon,
        },
    ]
  return (
    <div>
        <ul className='flex gap-7 flex-row flex-wrap w-full md:w-5/6 justify-center items-center'>
            {softwareSkills.map((skill) => (
                <li key={skill.name} className='text-center flex flex-col items-center'>
                    <img src={skill.frontawesomeclassname} alt={skill.name} className='w-10'/>
                    <p>{skill.name}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}
