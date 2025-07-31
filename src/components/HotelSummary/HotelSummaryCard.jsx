import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInterceptor } from '../../interceptor';

function HotelSummaryCard({checkOut, setCheckIn, checkIn, setCheckOut}) {

    const [hotel, setHotel] = useState({});
    
    const [nights, setNights] = useState(0);

    const { id } = useParams();

    useEffect(() => {
        axiosInterceptor.get(`hotels/${id}`).then((res) => {
            setHotel(res.data);
        });
    }, [id]);

    useEffect(() => {
        if (checkIn && checkOut) {
            const checkInDate = new Date(checkIn);
            const checkOutDate = new Date(checkOut);

            if (checkOutDate > checkInDate) {
                const timeDiff = checkOutDate - checkInDate;
                const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
                setNights(days);
            } else {
                setNights(0);
            }
        }
    }, [checkIn, checkOut]);

    const today = new Date().toISOString().split("T")[0];
    const pricePerNight = hotel?.pricing?.[0]?.discountedPrice || 0;
    const totalPrice = pricePerNight * nights;

    const minCheckOut = checkIn
  ? new Date(new Date(checkIn).getTime() + 24 * 60 * 60 * 1000) // add 1 day
  : new Date();
  const minCheckOutStr = minCheckOut.toISOString().split("T")[0];


    return (
        <>
            <div className='!px-3 !py-5 bg-white w-[30%] rounded-md h-[655px]'>
                <h2 className='text-[24px] text-[#282E44] font-bold'>Summary</h2>
                <figure className='!my-4'><img className='rounded-md' src={hotel?.images?.main} alt="" /></figure>
                <div className='flex justify-between '>
                    <div className='w-[65%] flex flex-col flex-wrap'>
                        <p className='font-semibold text-[14px] text-[#191D23]'>{hotel?.name}</p>
                        <div className='flex items-center gap-1'>
                            <FaLocationDot className='text-[#0A6ADA] text-xs' />
                            <p className='text-[#4F4F67] text-[10px]'>{hotel?.address?.street}</p>
                        </div>
                    </div>
                    <div className="">
                        <p className="text-[#DF142D] text-[14px] font-bold">{hotel?.pricing?.[0]?.discount}</p>
                        <p className="text-[#191D23] text-[32px] font-bold">
                            {hotel?.pricing?.[0]?.discountedPrice} <span className="text-[#191d2357] text-xs">{hotel?.pricing?.[0]?.currency}</span>
                        </p>
                        <p className="text-[#33344F] text-xs ">{hotel?.pricing?.[0]?.priceUnit}</p>
                    </div>
                </div>
                <div className=" flex flex-col !mb-4 !mt-2">
                    <label className="text-[#B8C1DE] text-sm !pl-4 !mb-1">CHECK IN</label>
                    <input type="date" className="bg-[#e9e9e9] text-black  w-72  !py-2 !px-4 rounded-[25px]" min={today}
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)} />
                </div>
                <div className="!mr-2 flex flex-col !mb-8">
                    <label className="text-[#B8C1DE] text-sm !pl-4 !mb-1">CHECK OUT</label>
                    <input type="date" className="bg-[#e9e9e9] text-black  w-72  !py-1.5 !px-4 rounded-[25px]" min={minCheckOutStr}
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)} />
                </div>

                <div className='flex items-center justify-between !px-1'>
                    <p className='text-[#191D23] text-[13px]'>Price Per Night</p>
                    <p className='text-black'>${hotel?.pricing?.[0]?.discountedPrice}</p>
                </div>
                <div className='flex items-center justify-between border-b-2 border-black !pb-2 !px-1'>
                    <p className='text-[#191D23] text-[13px]'>Nights</p>
                    <p className='text-black'>{nights}</p>
                </div>
                <div className='flex items-center justify-between !pt-2 !px-1'>
                    <p className='text-[#191D23] text-[13px]'>Total Price</p>
                    <p className='text-black'>${totalPrice}</p>
                </div>
            </div>
        </>
    )
}

export default HotelSummaryCard