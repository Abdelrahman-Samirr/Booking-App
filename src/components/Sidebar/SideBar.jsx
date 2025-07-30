import React, { useState } from 'react'
import Fond from '../../assets/images/Fond.png'
import Brand_Logo from '../../assets/images/Brand_Logo.png'
import { Link, NavLink } from 'react-router-dom'
import { MdHome } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { FaAddressBook } from "react-icons/fa6";
import { FaCircleQuestion } from "react-icons/fa6";
import { FaGripLines } from "react-icons/fa";




function SideBar() {

    const [isSliderOpen, setSliderToggle] = useState(false)

    const toggleSlider = () => {
        setSliderToggle(!isSliderOpen)
    }

    const isLogged = JSON.parse(localStorage.getItem("userData"))

    const handleLogout = () => {
        localStorage.removeItem("userData");
    };

    return (
        <>
            <div className={``}>
                <div className=''>
                    {/* <figure className='h-full'><img className='' src={Fond} alt="backgound" /></figure> */}
                    <div className={`!py-8 !mt-8 !ml-10 transition-all duration-300  ${isSliderOpen ? '!pl-5 !pr-5 w-[100%]' : '!px-4 w-[65%]'} bg-[#0856C8] rounded-2xl`}>
                        <div className='flex justify-between'>
                            <img className={`${isSliderOpen ? 'block' : 'hidden'}`} src={Brand_Logo} alt="Brand Logo" />
                            <FaGripLines className={`cursor-pointer !mr-2 ${isSliderOpen ? '' : '!ml-2.5'} text-white text-2xl`} onClick={toggleSlider} />
                        </div>
                        <NavLink to="/home">
                            <div className={`flex gap-3 ${isSliderOpen ? 'w-[90%]' : 'w-[100%]'} !px-3 !py-2.5 hover:rounded-[20px] hover:bg-[#0076FF] cursor-pointer !mt-18`}>
                                <MdHome className='text-white text-2xl' />
                                <p className={`${isSliderOpen ? 'block' : 'hidden'} text-white`}>Home</p>
                            </div>
                        </NavLink>
                        <NavLink to={"/bookedHotels"}>
                            <div className={`flex gap-3 ${isSliderOpen ? 'w-[90%]' : 'w-[100%]'} !px-3 !py-2.5 hover:rounded-[20px] hover:bg-[#0076FF] cursor-pointer !mt-8`}>
                                <FaAddressBook className='text-white text-2xl' />
                                <p className={`${isSliderOpen ? 'block' : 'hidden'} text-white`}>Bookings</p>
                            </div>
                        </NavLink>
                        <div className={`flex gap-3 ${isSliderOpen ? 'w-[90%]' : 'w-[100%]'} !px-3 !py-2.5 hover:rounded-[20px] hover:bg-[#0076FF] cursor-pointer !mt-5`}>
                            <BiWorld className='text-white text-2xl' />
                            <p className={`${isSliderOpen ? 'block' : 'hidden'} text-white`}>Explore</p>
                        </div>
                        <div className={`flex gap-3 ${isSliderOpen ? 'w-[90%]' : 'w-[100%]'} !px-3 !py-2.5 hover:rounded-[20px] hover:bg-[#0076FF] cursor-pointer !mt-5 !mb-65`}>
                            <FaCircleQuestion className='text-white text-2xl' />
                            <p className={`${isSliderOpen ? 'block' : 'hidden'} text-white`}>Support</p>
                        </div>
                        <Link to={"/register"} className={`${!isLogged ? 'block' : 'hidden'}`}>
                            <button className={`!px-10 !py-3 text-xs !ml-2 ${isSliderOpen ? 'block' : 'hidden'} rounded-[25px] bg-amber-50 text-[red] border-[red] border-2 hover:bg-[red] hover:text-white cursor-pointer transition-all duration-200 `}>Sign UP Now</button>
                        </Link>
                        <Link to={"/login"} className={`${isLogged ? 'block' : 'hidden'}`}>
                            <button onClick={handleLogout} className={`!px-12 !py-3 text-xs !ml-2 ${isSliderOpen ? 'block' : 'hidden'} rounded-[25px] bg-amber-50 text-[red] border-[red] border-2 hover:bg-[red] hover:text-white cursor-pointer transition-all duration-200 `}>Logout</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar