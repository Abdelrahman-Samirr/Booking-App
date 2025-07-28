import React from "react";
import styles from "./Search.module.css";
import { Dropdown, DropdownItem } from "flowbite-react";
import { Button } from "flowbite-react";
import { NavLink } from "react-router-dom";

function Search() {
  return (
    <>
      <div className=" ">
        <form className="flex gap-2.5  text-black bg-white rounded-xl !px-8 !pt-2 !pb-4  shadow-md ">
          <div className="flex flex-col !mt-1">
            <label className="text-[#B8C1DE] text-sm !pl-4">SEARCH</label>
            <input type="search" placeholder="Search..." className="bg-[#e9e9e9] text-black w-44 !py-2 !px-4 rounded-[25px]" />
          </div>
          <div className="country">
            <label className="text-[#B8C1DE] text-sm !pl-4">COUNTRY</label>
            <Dropdown className="bg-[#e9e9e9] text-black  w-44  !py-2 !px-4 rounded-[25px] hover:bg-[#d1d1d1] cursor-pointer" label="Dropdown button" dismissOnClick={true}>
              <DropdownItem className="rounded-xl !px-1.5 !py-0.5">Dashboard</DropdownItem>
            </Dropdown>
          </div>
          <div className=" flex flex-col">
            <label className="text-[#B8C1DE] text-sm !pl-4 !mb-1">CHECK IN</label>
            <input type="date" className="bg-[#e9e9e9] text-black  w-44  !py-2 !px-4 rounded-[25px]" min={new Date().toISOString().split("T")[0]} />
          </div>
          <div className="!mr-6 flex flex-col">
            <label className="text-[#B8C1DE] text-sm !pl-4 !mb-1">CHECK OUT</label>
            <input type="date" className="bg-[#e9e9e9] text-black  w-44  !py-1.5 !px-4 rounded-[25px]" min={new Date().toISOString().split("T")[0]} />
          </div>
          <h4 className="underline decoration-1 cursor-pointer !mt-7 !mr-4">Clear Filters</h4>
          <NavLink to="/search">
            <Button type="submit" color="red" className="!px-7 rounded-3xl cursor-pointer !mt-5">
              Search
            </Button>
          </NavLink>
        </form>
      </div>
    </>
  );
}

export default Search;
