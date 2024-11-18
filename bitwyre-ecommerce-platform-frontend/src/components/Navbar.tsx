import { useRecoilState, useRecoilValue } from "recoil"
import { useState } from "react";
import loginAtom, { logout } from "../store/atoms/login.ts";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { cartItemsList } from "../store/atoms/cart.ts";
import darkModeAtom from "../store/atoms/darkMode.ts";

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [login, setIsLogin] = useRecoilState(loginAtom);
    const numberOfItems: number = useRecoilValue(cartItemsList).length;
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useRecoilState(darkModeAtom)

    return (
        <div>
            <div className={`flex justify-between items-center flex-nowrap flex-row py-5 gap-2 border-b ${darkMode && 'border-black'}`}>
                <NavLink to="/" className=''>
                    <img className='w-20 sm:w-36' src={assets.logo} alt='Forever' />
                </NavLink>
                <div className={`mynav hidden md:flex items-center gap-4 text-sm ${darkMode && 'text-white'}`}>
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/collections">COLLECTION</NavLink>
                    <NavLink to="/contact">CONTACT</NavLink>
                </div>
                <div className='flex flex-row flex-nowrap gap-4 items-center'>
                    <button onClick={() => setDarkMode(prev => !prev)}>
                        {darkMode ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="yellow" className="size-7"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#0ea5e9" className="size-7"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" /></svg>}
                    </button>
                    <NavLink to="/collections">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={`${darkMode ? 'white' : 'currentColor'}`} className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
                    </NavLink>
                    {!login.isLogin &&
                        <NavLink to="/login">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={`${darkMode ? 'white' : 'currentColor'}`} className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
                        </NavLink>
                    }
                    {login.isLogin &&
                        <div className='group relative'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={`${darkMode ? 'white' : 'currentColor'}`} className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
                            <div className='hidden group-hover:block absolute right-0 pt-4'>
                                <div className={`flex flex-col gap-2 py-3 px-5 rounded:sm ${darkMode?'border border-white bg-black text-white':' bg-slate-100 text-gray-500' }`}>
                                    <a href="https://github.com/Akshat-D-Roger/bitwyre-frontend-interview" target="_blank" className={`font-semibold ${!darkMode ? 'hover:text-black' : 'hover:text-gray-500'} whitespace-nowrap`}>Source Code</a>
                                    <div className={`font-semibold ${!darkMode ? 'hover:text-black' : 'hover:text-gray-500'}`}>Orders</div>
                                    <div onClick={() => logout(setIsLogin, navigate)} className={`font-semibold hover:text-black cursor-pointer ${!darkMode ? 'hover:text-black' : 'hover:text-gray-500'}`}>Logout</div>
                                </div>
                            </div>
                        </div>
                    }
                    <NavLink to="/cart" className='relative'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={`${darkMode?'white':'currentColor'}`} className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
                        <p className={`absolute flex right-[-5px] bottom-[-5px] ${darkMode ? 'bg-white text-black' :'bg-black text-white'} text-[8px] w-4 aspect-square items-center justify-center rounded-full`}>{numberOfItems}</p>
                    </NavLink>
                    <div onClick={() => { setVisible(true) }} className="md:hidden cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={`${darkMode?'white' :'black'}`} className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" /></svg>
                    </div>
                </div>
            </div>
            {/* sidebar for small screen */}
            <div className={`my-sidebar fixed top-0 left-0 w-full h-screen ${darkMode?'bg-black text-white':'bg-white text-black'} ${visible ? 'translate-x-0' : 'translate-x-full'} md:hidden transition-all`}>
                <div onClick={() => (setVisible(false))} className='flex items-center gap-4 cursor-pointer p-3 border-b-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={`${darkMode?'white' :'black'}`} className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>

                    <div className='text-md font-semibold'>Back</div>
                </div>
                <div className='flex flex-col font-semibold'>
                    <NavLink onClick={() => (setVisible(false))} className="py-2 pl-6 border-b-2 text-gray-600" to="/">HOME</NavLink>
                    <NavLink onClick={() => (setVisible(false))} className="py-2 pl-6 border-b-2 text-gray-600" to="/collections">COLLECTION</NavLink>
                    <NavLink onClick={() => (setVisible(false))} className="py-2 pl-6 border-b-2 text-gray-600" to="/contact">CONTACT</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar