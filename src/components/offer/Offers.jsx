import React, { useEffect, useState } from "react";
import { axiosInterceptor } from "../../interceptor";
import { Link } from "react-router-dom";

function Offers() {
  const [offer, setOffer] = useState(null);

  useEffect(() => {
    axiosInterceptor
      .get("best_offer")
      .then((res) => {
        setOffer(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="shadow-md w-[90%] !pt-8 !pb-12 !px-12 rounded-xl bg-white">
        <h2 className="text-[#282E44] text-2xl font-bold ">Best Offer</h2>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-8 !mt-8 ">
          {offer?.length > 0
            ? offer.map((data) => (
                <div className="w-[32%]" key={data.id}>
                  <Link to={`/detail/${data.id}`}>
                    <div className=" flex items-center gap-3 bg-gray-100 rounded-full !px-4 !py-2  cursor-pointer">
                      <img src={data.image} alt={data.name} className="w-12 h-12 rounded-full object-cover" />
                      <div className="flex flex-col">
                        <h3 className="text-sm font-bold text-gray-800">{data.name}</h3>
                        <p className="text-xs text-gray-500">{data.location}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            : ""}
        </div>
      </div>
    </>
  );
}

export default Offers;
