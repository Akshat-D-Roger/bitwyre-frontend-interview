import MyImage from '../assets/adidas_hero_img.avif'
import { NavLink } from 'react-router-dom'
 const Hero = () => {
  return (
    <NavLink to="/collections" className='border-[1px] border-black w-full flex flex-col sm:flex-row'>
        <div className='flex flex-col items-center justify-center w-full sm:w-1/3 py-10 sm:py-0 '>
            <div className='flex flex-col font-semibold text-slate-600'>
                <div className='flex gap-2 items-center'>
                    <hr className='w-11 h-[2px] bg-slate-600 border-0 '/>
                    <p className='text-[1rem] whitespace-nowrap'>OUR BESTSELLERS</p>
                </div>
                <div className='prata-regular text-[2rem] lg:text-[3rem] whitespace-nowrap'>Latest Arrivals</div>
                <div className='flex gap-2 items-center'>
                    <p className='text-[1rem] whitespace-nowrap'>SHOP NOW</p>
                    <hr className='w-11 h-[1px] bg-slate-600 border-0 '/>
                </div>
            </div>
        </div>
        <div className='w-full sm:w-2/3'>
            <img className="w-full" src={MyImage} alt="hero-image" />
        </div>
    </NavLink>
  )
}

export default Hero