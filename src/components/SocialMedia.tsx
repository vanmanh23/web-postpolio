import React from 'react';
import githubIcon from '../assets/images/github-icon.png';
import  linkedinIcon from '../assets/images/linkedin-icon.png';
import  emailIcon  from '../assets/images/email-icon.png';
import  facebookIcon  from '../assets/images/facebook-icon.png';
import  leedcodeIcon  from '../assets/images/leetcode-icon.png';

export default function SocialMedia() {
    const socialMediaLinks = {
        github: "https://github.com/vanmanh23",
        linkedin: "https://www.linkedin.com/in/ma%CC%A3nh-nguy%C3%AA%CC%83n-8a7a85311/",
        gmail: "manhcan03@gmail.com",
        facebook: "https://www.facebook.com/can.manh.90/",
        leetcode: "https://leetcode.com/u/ManhNguyenK3/",
      };
  return (
    <div>
        <ul className='flex flex-row gap-3'>
          <li>
            <a href={socialMediaLinks.github}>
              <img src={githubIcon} alt="github icon" className='w-10'/>
            </a>
          </li>
          <li>
            <a href={socialMediaLinks.linkedin}>
              <img src={linkedinIcon} alt="linkedin icon" className='w-10'/>
            </a>
          </li>
          <li>
            <a href={socialMediaLinks.gmail}>
              <img src={emailIcon} alt="gmail icon" className='w-10'/>
            </a>
          </li>
          <li>
            <a href={socialMediaLinks.facebook}>
              <img src={facebookIcon} alt="facebook icon" className='w-10'/>
            </a>
          </li>
          <li>
            <a href={socialMediaLinks.leetcode}>
              <img src={leedcodeIcon} alt="leedcode icon" className='w-10'/>
            </a>
          </li>
        </ul>
    </div>
  )
}
