import { Button } from "flowbite-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setSearchTerm } from "../../store/slice";
import { setSelectedCountry } from "../../store/slice";

function Search() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(setSearchTerm(input))
    dispatch(setSelectedCountry(country))

    navigate("/search");
  }

  return (
    <>
      <div className=" ">
        <form className="flex gap-2.5  text-black bg-white rounded-xl !px-8 !pt-2 !pb-4  shadow-md " onSubmit={handleSubmit}>
          <div className="flex flex-col !mt-1">
            <label className="text-[#B8C1DE] text-sm !pl-4">SEARCH</label>
            <input type="search" placeholder="Search..." value={input} className="bg-[#e9e9e9] text-black w-44 !py-2 !px-4 rounded-[25px]" onChange={e => setInput(e.target.value)} />
          </div>
          <div className="country flex flex-col">
            <label className="text-[#B8C1DE] text-sm !pl-4 !mb-1">COUNTRY</label>
            <select value={country} className="bg-[#e9e9e9] text-black  w-44  !py-2 !px-4 rounded-[25px] hover:bg-[#d1d1d1] cursor-pointer" onChange={(e) => setCountry(e.target.value)}>
              <option value="">Select Country</option>
              <option value="Egypt">Egypt</option>
              <option value="United States">United States</option>
              <option value="Morocco">Morocco</option>
              <option value="Greece">Greece</option>
            </select>
          </div>
          <div className=" flex flex-col">
            <label className="text-[#B8C1DE] text-sm !pl-4 !mb-1">CHECK IN</label>
            <input type="date" className="bg-[#e9e9e9] text-black  w-44  !py-2 !px-4 rounded-[25px]" min={new Date().toISOString().split("T")[0]} />
          </div>
          <div className="!mr-2 flex flex-col">
            <label className="text-[#B8C1DE] text-sm !pl-4 !mb-1">CHECK OUT</label>
            <input type="date" className="bg-[#e9e9e9] text-black  w-44  !py-1.5 !px-4 rounded-[25px]" min={new Date().toISOString().split("T")[0]} />
          </div>
          <h4 className="underline decoration-1 cursor-pointer !mt-7 !mr-2">Clear Filters</h4>
            <Button type="submit" color="red" className="!px-7 rounded-3xl cursor-pointer !mt-5">
              Search
            </Button>
        </form>
      </div>
    </>
  );
}

export default Search;
