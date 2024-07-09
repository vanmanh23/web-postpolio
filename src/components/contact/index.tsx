import pictureofme from '../../assets/images/pictureofme.jpg';
import SocialMedia from '../SocialMedia';

export default function Contact() {
  return (
    <div className='flex flex-col justify-center items-center gap-7 md:gap-10 bg-sectionbg-light md:px-5 rounded-2xl py-3'>
        <div className='text-left'>
            <h2 className='md:text-4xl text-2xl font-bold'>Reach Out to me!</h2>
        </div>
        <div className='flex md:flex-row flex-col-reverse gap-3 justify-center items-center'>
            <div className='flex flex-col gap-3 text-center md:text-left'>
                <p className='md:text-xl text-base'>Frontend Developer</p>
                <p className='md:text-xl text-base text-gray-600 w-full md:w-3/4'>I am a Frontend Developer. I love programming, especially creating websites with good user interfaces, to meet the needs of users.</p>
                <p className='md:text-xl text-base'>Phone: 0962337593</p>
                <p className='md:text-xl text-base'>Email: manhcan03@gmail.com</p>
                <div className='mt-4 flex md:justify-start justify-center'>
                    <SocialMedia />
                </div>
            </div>
            <div className='flex justify-center items-center w-3/6 '>
            <img src={pictureofme} alt="picture of me" className='rounded-3xl'/>
            </div>
        </div>
        <div className='flex justify-center md:mb-4'>
            <p className='text-base md:text-2xl text-gray-600'>Made with ❤️ by Manh Nguyen</p>
        </div>
    </div>
  )
}
