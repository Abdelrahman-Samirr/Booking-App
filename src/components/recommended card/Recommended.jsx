import React, { useEffect, useState } from "react";
import { axiosInterceptor } from "../../interceptor";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setRecommendedLoading } from "../../store/slice";

function Recommended() {
  const [data, setData] = useState(null);

  // const dispatch = useDispatch();

  // scrolls up when ID changes (navigating to another hotel)
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);


  useEffect(() => {
    // dispatch(setRecommendedLoading(true));
    axiosInterceptor
      .get("recommended_hotels")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        // dispatch(setRecommendedLoading(false));
      })
      .catch((err) => {
        console.log(err);
        // dispatch(setRecommendedLoading(false));
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <>
      <h2 className="text-black text-2xl font-bold !mb-4">Recommended Hotels</h2>

      <Slider {...settings}>
        {data?.length > 0
          ? data.map((data) => (
            <div key={data.id}>
              <div className="shadow-md flex items-center !px-4.5 !py-3.5 !mx-5 rounded-xl bg-white gap-4">
                <Link className="w-[40%]" to={`/detail/${data.id}`}>
                  <figure className="w-full rounded-md overflow-hidden cursor-pointer">
                    <img className="w-full" src={data.images.main} alt="Hotel" />
                  </figure>
                </Link>
                <div className="W-[70%]">
                  <div className="!mb-4">
                    <p className="text-[#596181] font-semibold text-xs">Hotel</p>
                    <h4 className="text-[#475073] font-extrabold text-base !my-2">{data.name}</h4>
                    <p className="text-[#596181] font-semibold text-xs">
                      {data.address.street},{data.address.country}
                    </p>
                  </div>
                  <div className="flex">
                    <p className="text-[#6C738F] !mr-8 text-xs !mt-1.5">
                      Cupon: <span className="text-[#475073] font-bold">DHSGJAB09D</span>
                    </p>

                      <button className="!py-1.5 !px-4 text-xs bg-[#ffe0e0b4] text-[#FF0000] rounded-3xl cursor-pointer hover:bg-[#ffd9d9f8]">Book Now</button>

                  </div>
                </div>
              </div>
            </div>
          ))
          : ""}
      </Slider>
    </>
  );
}

export default Recommended;
