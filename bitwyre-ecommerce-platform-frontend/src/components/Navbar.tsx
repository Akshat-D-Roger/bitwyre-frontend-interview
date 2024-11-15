import { useRecoilState, useRecoilValue } from "recoil"
import { useState } from "react";
import loginAtom, {logout} from "../store/atoms/login.ts";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { cartItemsList } from "../store/atoms/cart.ts";
import darkModeAtom from "../store/atoms/darkMode.ts";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [login, setIsLogin] = useRecoilState(loginAtom);
  //number of items in cart
  const numberOfItems:number = useRecoilValue(cartItemsList).length;
  const navigate = useNavigate();
  const darkMode = useRecoilValue(darkModeAtom)

  return (
      <div>
          <div className='flex justify-between items-center flex-nowrap flex-row py-5 gap-2 border-b'>
              <NavLink to="/" className=''>
                  <img className='w-20 sm:w-36' src={assets.logo} alt='Forever' />
              </NavLink>
              <div className={`mynav hidden md:flex items-center gap-4 text-sm ${darkMode && 'text-white'}`}>
                  <NavLink to="/">HOME</NavLink>
                  <NavLink to="/collections">COLLECTION</NavLink>
                  <NavLink to="/contact">CONTACT</NavLink>
              </div>
              <div className='flex flex-row flex-nowrap gap-4'>
                  <NavLink to="/collections"><img className='size-5 fill-white' src={assets.search_icon} alt="search-icon" /></NavLink>
                  {!login.isLogin && 
                    <NavLink to="/login">
                      <img className='size-5' src={assets.profile_icon} alt="profile-icon" />
                    </NavLink>
                  }
                  {login.isLogin &&
                      <div className='group relative'>
                          <img className='size-5 cursor-pointer' src={assets.profile_icon} alt="profile-icon" />
                          <div className='hidden group-hover:block absolute right-0 pt-4'>
                              <div className='flex flex-col gap-2 py-3 px-5 bg-slate-100 text-gray-500 rounded:sm'>
                                  <div className='font-semibold hover:text-black whitespace-nowrap'>Source Code</div>
                                  <NavLink to="/orders" className='font-semibold hover:text-black'>Orders</NavLink>
                                  <div onClick={() => logout(setIsLogin, navigate)} className='font-semibold hover:text-black cursor-pointer'>Logout</div>
                              </div>

                          </div>
                      </div>
                  }
                  <NavLink to="/cart" className='relative'>
                      <img className='size-5' src={assets.cart_icon} alt="cart-icon" />
                      <p className='absolute flex right-[-5px] bottom-[-5px] bg-black text-white text-[8px] w-4 aspect-square items-center justify-center rounded-full'>{numberOfItems}</p>
                  </NavLink>
                  <img onClick={() => { setVisible(true) }} className='md:hidden size-5 cursor-pointer' src={assets.menu_icon} alt="dropdown-icon" />
              </div>
          </div>
          {/* sidebar for small screen */}
          <div className={`my-sidebar fixed top-0 left-0 w-full h-screen bg-white ${visible ? 'translate-x-0' : 'translate-x-full'} md:hidden transition-all`}>
              <div onClick={() => (setVisible(false))} className='flex items-center gap-4 cursor-pointer p-3 border-b-2'>
                  <div><img className="h-4 rotate-180" src={assets.dropdown_icon} alt="back-icon" /></div>
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