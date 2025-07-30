import React, { useEffect, useState } from 'react'
import bgSearch from '../../assets/images/Small.png'
import SideBar from '../../components/Sidebar/SideBar'
import Nav from '../../components/Nav/Nav'
import Search from '../../components/Search/Search'
import { axiosInterceptor } from '../../interceptor'
import FilteredHotels from '../../components/FilteredHotels/FilteredHotels'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { setHotelsLoading } from '../../store/slice'
import Loader from '../../components/loader/Loader'


function SearchPage() {

  const [hotels, setHotels] = useState([])
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const selectedCountry = useSelector((state) => state.search.selectedCountry);

  const dispatch = useDispatch();

  const { Hotels = false } = useSelector((state) => state.loading || {});

  const isLoading = Hotels;

  useEffect(() => {
    dispatch(setHotelsLoading(true));
    axiosInterceptor.get("hotels")
      .then(res => setHotels(res.data))
      .catch(err => console.log(err))
      .finally(() => {
        dispatch(setHotelsLoading(false));
      });
  }, [])


  const filteredHotels = hotels.filter((hotel) => {
    const input = hotel.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    const country = selectedCountry ? hotel?.address?.country?.toLowerCase() === selectedCountry.toLowerCase() : true

    return input && country
  })

  return (
    <>
      <div className='h-[100vh]  '>
        <figure className='absolute '><img src={bgSearch} alt="" /></figure>
        <div className='z-10 absolute'>
          <SideBar />
        </div>
        <div className='flex'>
          <div className='!mt-5 !ml-38 z-0 w-full'>
            <div className='!ml-40'>
              <Nav />
            </div>
            <div className='!mt-3 w-[85%]'>
              <Search />
              <div className='flex items-center gap-2 bg-white rounded-md !pl-6 !py-3 !mt-4'>
                <h4 className='text-[20px] text-[#191D23] font-bold border-r-2 border-black !pr-4'>Hotels</h4>
                <p className='text-xs text-[#191D23] font-semibold'>Total <span className='text-[#177CFD]'>{filteredHotels.length} result</span></p>
              </div>
            </div>
            {isLoading ? (
              <Loader />
              ):

              <div className='!mt-6 flex flex-wrap gap-4 w-[95%] !mb-10'>
                <FilteredHotels filteredHotels={filteredHotels} />
              </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchPage