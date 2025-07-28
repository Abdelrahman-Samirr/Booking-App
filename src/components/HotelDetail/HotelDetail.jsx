import React, { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { IoTelescopeOutline } from "react-icons/io5";
import { TbBathFilled } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { axiosInterceptor } from "../../interceptor";
import { Link } from "react-router-dom";

function HotelDetail() {
  const [hotel, setHotel] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axiosInterceptor.get(`hotels/${id}`).then((res) => {
      setHotel(res.data);
    });
  }, [id]);

  if (!hotel) {
    return <p className="text-center text-gray-500">No hotel data available. Please go back and click again.</p>;
  }

  return (
    <>
      <div className="!pt-3 !pr-10 !pb-6 !pl-6 bg-white rounded-2xl">
        <h2 className="text-[#33344F] text-[32px] font-bold !mb-4">{hotel?.name}</h2>
        <div className="flex ">
          <div className="h-56 sm:h-64 xl:h-100 2xl:h-96 overflow-hidden w-[50%] rounded-2xl">
            <Carousel>
              {hotel?.images?.gallery?.map((img) => (
                <div key={img.id}>
                  <figure className="h-full">
                    <img className="h-full" src={img} alt="" />
                  </figure>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="!pl-8 w-[45%]">
            <h4 className="text-[#33344F] text-base font-bold ">Hotel review</h4>
            <div className="flex justify-between items-center w-full !mb-2">
              <div className="flex gap-4">
                <div className="flex justify-center items-center !px-3.5 !py-2 gap-1 bg-[#3C6097] rounded-md font-bold">
                  <p>{hotel?.rating?.score}</p>
                  <FaStar className="text-white text-s" />
                </div>
                <div>
                  <div className="">
                    <p className="text-[14px] text-[#474F5B] !pb-2">{hotel?.rating?.status}</p>
                    <p className="text-xs text-[#191d238f]">{hotel?.rating?.reviewCount} Review</p>
                  </div>
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
            <p className="text-base text-[#33344F] font-bold">About</p>
            <p className="text-[#6C6C6C] text-xs !py-2">{hotel?.description}</p>
            {/* <p className='text-[#002959] text-xs font-semibold cursor-pointer'>Show More &#9660; </p> */}
            <div className="flex gap-1.5 !py-6 items-center">
              <FaLocationDot className="text-[#0A6ADA]" />
              <p className="text-[#3F405E] text-[14px]"> {hotel?.address?.street} </p>
            </div>
            <div className="!mb-10">
              <h3 className="text-[#33344F] text-base font-bold">Popular Service</h3>
              <div className="flex justify-between !mt-4">
                <div className="flex items-center gap-2">
                  <FaLocationDot className="text-[#A3A6AA] text-xs items-center" />
                  <p className="text-[#A3A6AA] text-xs font-semibold">{hotel?.amenities?.[0]}</p>
                </div>
                <div className="flex items-center gap-2">
                  <TbBathFilled className="text-[#A3A6AA] text-xs items-center" />
                  <p className="text-[#A3A6AA] text-xs font-semibold">{hotel?.amenities?.[1]}</p>
                </div>
                <div className="flex items-center gap-2">
                  <IoTelescopeOutline className="text-[#A3A6AA] text-xs items-center" />
                  <p className="text-[#A3A6AA] text-xs font-semibold">{hotel?.amenities?.[2]}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaWifi className="text-[#A3A6AA] text-xs items-center" />
                  <p className="text-[#A3A6AA] text-xs font-semibold">{hotel?.amenities?.[3]}</p>
                </div>
              </div>
            </div>
            <Link to={`/booking/${hotel.id}`}>
              <button className="bg-[#0A6ADA] text-xs text-white font-bold cursor-pointer w-full !py-3 rounded-md hover:bg-[rgb(10,95,218)] transition-all ">PAY NOW </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HotelDetail;
