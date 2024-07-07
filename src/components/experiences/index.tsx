import React from 'react';
import sofitgymproject from '../../assets/images/sofitgymproject.png';
import ExperienceCard from './components/ExperienceCard';

export default function Experiences() {
    const projectsList = [
        {
            name: "Project 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, consequuntur.",
            img: sofitgymproject,
        },
        {
            name: "Project 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, consequuntur.",
            img: sofitgymproject,
        },
        {
            name: "Project 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, consequuntur.",
            img: sofitgymproject,
        },
    ]
  return (
    <div className='md:full flex md:flex-row flex-col gap-5 justify-center items-center'>
        {
            projectsList.map((item, index) => (
                <div key={index}>
                    <ExperienceCard name={item.name} description={item.description} img={item.img} timeduration="2022 - 2022" theme="#faa718" />
                </div>
            ))
        }
    </div>
  )
}
