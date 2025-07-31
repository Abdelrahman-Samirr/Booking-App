import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { SlCalender } from "react-icons/sl";


function BookedHotel({ hotel }) {

  console.log(hotel)

  return (

    <>
      <div className='flex bg-white rounded-lg overflow-hidden w-[85%]'>
        <Link className='w-[45%]' to={`/detail/${hotel?.id}`}>
          <figure className='w-full object-cover h-full'><img className='h-full object-cover' src={hotel?.images?.main} alt="Hotel" /></figure>
        </Link>
        <div className='flex flex-col justify-between !py-2.5 !pl-3 w-[80%]'>
          <div className='flex justify-between'>
            <h4 className='text-[18px] text-[#33344F] font-bold w-[80%]'>{hotel?.name}</h4>
            <div className='flex justify-center items-center gap-1 !px-0.5 bg-[#0A6ADA] h-6 w-12 rounded-s-sm'>
              <p>{hotel?.rating?.score}</p>
              <FaStar className='text-white text-xs' />
            </div>
          </div>
          <p className='text-xs text-[#46475F] font-semibold !mt-2 !mb-2'>{hotel?.address?.street}</p>
          <div className='flex flex-wrap items-center gap-x-4 gap-y-1 !mb-3'>
            {hotel?.amenities?.length > 0 ? hotel?.amenities?.map((text) => (
              <div className='flex items-center gap-1.5'>
                <p className='text-xs text-[#A3A6AA]'>{text}</p>
              </div>
            )) : ""
            }
          </div>
          <div className="flex justify-between">
            <div className='flex justify-between items-center gap-2'>
              <p className='text-[#FFC54D] text-xs font-semibold'>{hotel?.pricing?.[0]?.discount}  <span className='text-[#191D23] text-[20px] font-extrabold'>${hotel?.pricing?.[0]?.discountedPrice}</span></p>
            </div>
            <div className="flex items-center gap-4 !pr-4">
              <p className="text-[#33344F] font-bold text-[11px] flex items-center gap-1">From: <SlCalender /> <span className="text-[#858595]">{hotel?.checkIn}</span></p>
              <p className="text-[#33344F] font-bold text-[11px] flex items-center gap-1">To:<SlCalender /> <span className="text-[#858595]">{hotel?.checkOut}</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookedHotel