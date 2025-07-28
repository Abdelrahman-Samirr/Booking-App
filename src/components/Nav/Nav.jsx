import React from 'react'
import styles from './Nav.module.css'
import { FaBed } from "react-icons/fa6";
import { GiHouse } from "react-icons/gi";
import { BiSolidTaxi } from "react-icons/bi";
import { FaPlaneDeparture } from "react-icons/fa";
import { NavLink } from 'react-router-dom';




function Nav() {
    return (
        <>
            <div className={`flex  gap-[30px] !mt-[8px]`}>
                <NavLink to='/hotels'>
                    <div className='w-16 !py-0.25 text-center rounded-xl hover:bg-[#0076FF] cursor-pointer'>
                        <FaBed className='text-white text-3xl !ml-4 !pt-2 ' />
                        <p className='!mt-2 !mb-2 text-white'>Hotels</p>
                    </div>
                </NavLink>
                <div className='w-16 text-center rounded-xl hover:bg-[#0076FF] cursor-pointer'>
                    <GiHouse className='text-white text-3xl !ml-4 !pt-2 ' />
                    <p className='!mt-2 !mb-2 text-white'>Villa</p>
                </div>
                <div className='w-16 text-center rounded-xl hover:bg-[#0076FF] cursor-pointer'>
                    <BiSolidTaxi className='text-white text-3xl !ml-4 !pt-2 ' />
                    <p className='!mt-2 !mb-2 text-white'>Taxi</p>
                </div>
                <div className='w-16 text-center rounded-xl hover:bg-[#0076FF] cursor-pointer'>
                    <FaPlaneDeparture className='text-white text-3xl !ml-4 !pt-2 ' />
                    <p className='!mt-2 !mb-2 text-white'>Plane</p>
                </div>
            </div>
        </>
    )
}

export default Nav