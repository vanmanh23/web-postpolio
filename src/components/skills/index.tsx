import React from 'react'
import SoftwareSkills from './components/SoftwareSkills'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import greeting from '../../assets/images/greetingsecond.jpg'
export default function Skills() {
  return (
    <div className='flex md:flex-row flex-col-reverse gap-12 justify-between items-center py-5 bg-sectionbg-light rounded-2xl px-2'>
        <div className='md:w-full w-full'>
            <img src={greeting} alt="greeting" />
        </div>
        <div className='flex flex-col gap-4'>
            <h1 className='md:text-5xl text-3xl text-center md:text-left font-medium md:mb-3'>What I can do</h1>
            <p className='md:text-xl text-gray-400 text-center md:text-left text-base'>As a frontend web developer, mastering and proficiently using advanced technologies is indispensable. Below are the important technologies that I have been using to develop modern and effective web applications.</p>
            <div className='my-4 flex justify-center items-center text-center'>
            <SoftwareSkills />
            </div>
            <p className='md:text-xl text-base text-gray-400'><FontAwesomeIcon icon={faBolt} className='text-yellow-500'/>  Develop highly interactive Front end / User Interfaces for your web applications</p>
            <p className='md:text-xl text-base text-gray-400'><FontAwesomeIcon icon={faBolt} className='text-yellow-500'/>  I am passionate about creating user-centric, visually appealing, and highly functional websites and web applications</p>
            <p className='md:text-xl text-base text-gray-400'><FontAwesomeIcon icon={faBolt} className='text-yellow-500'/>  Creating beautiful designs to put in the hands of users, meeting everyone's needs is what I want</p>
        </div>
    </div>
  )
}
