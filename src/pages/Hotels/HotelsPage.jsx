import React, { useEffect, useState } from 'react'
import { axiosInterceptor } from '../../interceptor'
import bgSearch from '../../assets/images/Small.png'
import SideBar from '../../components/Sidebar/SideBar'
import Nav from '../../components/Nav/Nav'
import Search from '../../components/Search/Search'
import Hotels from '../../components/Hotels/Hotels'


function HotelsPage() {

  const [hotels, setHotels] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


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

  const filteredHotels = hotels.filter((hotel) => {
    return hotel.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  })

  return (
    <>
      <div className='h-[100vh] bg-[#e5e5e5b7] '>
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

              <Search setSearchTerm={setSearchTerm}/>

              <div className='flex items-center gap-2 bg-white rounded-md !pl-6 !py-3 !mt-4'>
                <h4 className='text-[20px] text-[#191D23] font-bold border-r-2 border-black !pr-4'>Hotels</h4>
                <p className='text-xs text-[#191D23] font-semibold'>Total <span className='text-[#177CFD]'>{filteredHotels.length} result</span></p>
              </div>

            </div>

            <Hotels filteredHotels = {filteredHotels}/>

          </div>
        </div>
      </div>
    </>
  )
}

export default HotelsPage