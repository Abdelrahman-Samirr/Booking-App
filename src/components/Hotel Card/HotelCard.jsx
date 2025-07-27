import React from 'react'
import styles from './HotelCard.module.css'
import hotel from '../../assets/images/bgHotel.png'
import { FaStar } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";



function HotelCard() {
  return (
    <>
        <div className='flex bg-white rounded-md w-[49%]'>
          <figure><img src={hotel} alt="Hotel" /></figure>
          <div className='!py-2.5 !pl-3 w-[60%]'>
            <div className='flex justify-between'>
              <h4 className='text-[18px] text-[#33344F] font-bold w-[80%]'>Taj Fort Aguada Resort & Spa Candolin, Goa</h4>
              <div className='flex justify-center items-center gap-1 bg-[#0A6ADA] h-6 w-10 rounded-s-sm'>
                <p>4</p>
                <FaStar className='text-white text-xs'/>
              </div>
            </div>
            <p className='text-xs text-[#46475F] font-semibold !mt-2 !mb-5'>Near railway station, Shirdi</p>
            <div className='flex items-center gap-4 !mb-3'>
              <div className='flex items-center gap-1.5'>
                <FaLocationDot className='text-[#A3A6AA] text-md '/>
                <p className='text-xs text-[#A3A6AA]'>Parking</p>
              </div>
              <div className='flex items-center gap-1.5'>
                <FaWifi className='text-[#A3A6AA] text-md '/>
                <p className='text-xs text-[#A3A6AA]'>Wifi</p>
              </div>
            </div>
            <div className='flex justify-between gap-2'>
              <p className='text-[#FFC54D] text-xs font-semibold'>25% off  <span className='text-[#191D23] text-[20px] font-extrabold'>$473</span></p>
              <div>   
              <button className='bg-[#b4b4b45d] hover:bg-[#b4b4b4cb] text-[#33344F] font-bold text-xs !px-1.5 !py-1.5 rounded-md cursor-pointer'>View details</button>
              <button className='bg-[#0A6ADA] hover:bg-[#0a45da] text-[#FFFFFF] font-bold text-xs !px-1.5 !py-1.5 rounded-md cursor-pointer !mx-3'>BOOK NOW</button>
              </div>
            </div>
          </div>
        </div>        
    </>
  )
}

export default HotelCard