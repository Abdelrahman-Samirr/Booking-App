import React from 'react'
import SideBar from '../../components/Sidebar/SideBar'
import Nav from '../../components/Nav/Nav'
import bgSearch from '../../assets/images/Small.png'
import Search from '../../components/Search/Search'
import BookingForm from '../../components/bookingform/BookingForm'
import HotelSummaryCard from '../../components/HotelSummary/HotelSummaryCard'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInterceptor } from '../../interceptor';

function HotelBookingPage() {

    const [hotel, setHotel] = useState({});

    const { id } = useParams();

    useEffect(() => {
        axiosInterceptor.get(`hotels/${id}`).then((res) => {
            setHotel(res.data);
        });
    }, [id]);

    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");

    return (
        <>
            <div className=''>
                <figure className='absolute '><img src={bgSearch} alt="background" /></figure>
                <div className='z-10 absolute'>
                    <SideBar />
                </div>
                <div className='flex'>
                    <div className='!mt-5 !ml-38 z-0 w-full'>
                        <div className='!ml-40'>
                            <Nav />
                        </div>
                        <div className='!mt-2 w-[85%]'>
                            <Search />
                        </div>
                        <div className='flex justify-between w-[90%] !mt-10'>
                            <BookingForm selectedHotel={hotel} checkIn={checkIn} checkOut={checkOut} />
                            <HotelSummaryCard checkIn={checkIn} setCheckIn={setCheckIn} checkOut={checkOut} setCheckOut={setCheckOut} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HotelBookingPage