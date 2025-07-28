import React, { useEffect, useState } from 'react'
import { axiosInterceptor } from '../../interceptor'
import HotelCard from '../Hotel Card/HotelCard';

function Hotels() {

    const [Hotels, setHotels] = useState([])

    useEffect(() => {
        axiosInterceptor.get("hotels")
            .then((res) => {
                setHotels(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])


    return (
        <>
            <div className='!mt-6 flex flex-wrap gap-8 w-[95%]'>

                {Hotels.length > 0 ? Hotels.map((data) => (
                    <HotelCard key={data.id} hotel={data} />
                )) : ""
                }
            </div>
        </>
    )
}

export default Hotels