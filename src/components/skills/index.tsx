import React from 'react'
import SoftwareSkills from './components/SoftwareSkills'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import greeting from '../../assets/images/greetingsecond.jpg'
export default function Skills() {
  return (
    <div className='flex flex-row gap-12 justify-between items-center'>
        <div className='w-1/2'>
            <img src={greeting} alt="greeting" />
        </div>
        <div className='flex flex-col gap-4'>
            <h1 className='text-5xl font-medium mb-3'>What I can do</h1>
            <p className='text-xl text-gray-400'>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
            <div className='my-4'>
            <SoftwareSkills />
            </div>
            <p className='text-xl text-gray-400'><FontAwesomeIcon icon={faBolt} className='text-yellow-500'/>  Develop highly interactive Front end / User Interfaces for your web and mobile applications</p>
            <p className='text-xl text-gray-400'><FontAwesomeIcon icon={faBolt} className='text-yellow-500'/>  Progressive Web Applications ( PWA ) in normal and SPA Stacks</p>
            <p className='text-xl text-gray-400'><FontAwesomeIcon icon={faBolt} className='text-yellow-500'/>  Integration of third party services such as Firebase/ AWS / Digital Ocean</p>
        </div>
    </div>
  )
}
