import React from 'react'
import hotelImage from '../../assets/images/bgHotel.png'
import { FaStar } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';



function HotelCard({ hotel }) {
  return (
    <>
      <div className='flex bg-white rounded-md overflow-hidden w-[48%]'>
        <Link className='w-[45%]' to={`/detail/${hotel.id}`}>
          <figure className='w-full object-cover h-full'><img className='h-full object-cover' src={hotel?.images?.main} alt="Hotel" /></figure>
        </Link>
        <div className='flex flex-col justify-between !py-2.5 !pl-3 w-[60%]'>
          <div className='flex justify-between'>
            <h4 className='text-[18px] text-[#33344F] font-bold w-[80%]'>{hotel?.name}</h4>
            <div className='flex justify-center items-center gap-1 !px-0.5 bg-[#0A6ADA] h-6 w-12 rounded-s-sm'>
              <p>{hotel?.rating?.score}</p>
              <FaStar className='text-white text-xs' />
            </div>
          </div>
          <p className='text-xs text-[#46475F] font-semibold !mt-2 !mb-5'>{hotel?.address?.street}</p>
          <div className='flex flex-wrap items-center gap-x-4 gap-y-1 !mb-3'>
              {hotel?.amenities?.length > 0 ? hotel?.amenities?.map((text) => (
            <div className='flex items-center gap-1.5'>
                <p className='text-xs text-[#A3A6AA]'>{text}</p>
            </div>
              )) : ""
              }
          </div>
          <div className='flex justify-between items-center gap-2'>
            <p className='text-[#FFC54D] text-xs font-semibold'>{hotel?.pricing?.[0]?.discount}  <span className='text-[#191D23] text-[20px] font-extrabold'>${hotel?.pricing?.[0]?.discountedPrice}</span></p>
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