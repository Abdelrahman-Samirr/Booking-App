import React, { useEffect, useState } from 'react'
import Nav from '../../components/Nav/Nav'
import Recommended from '../../components/recommended card/Recommended'
import bgSearch from '../../assets/images/Small.png'
import SideBar from '../../components/Sidebar/SideBar'
import Search from '../../components/Search/Search'
import HotelDetail from '../../components/HotelDetail/HotelDetail'


function DetailPage() {

  return (
    <>
      <div className=' bg-[#e5e5e5b7] '>
        <figure className='absolute '><img src={bgSearch} alt="background" /></figure>
        <div className='z-10 absolute'>
          <SideBar />
        </div>
        <div className='flex'>
          <div className='!mt-5 !ml-38 z-0 w-full'>
            <div className='!ml-40'>
              <Nav />
            </div>
            <div className='!mt-3 w-[87%]'>
              <Search />
              <div className='flex items-center gap-2 bg-white rounded-md !pl-6 !py-3 !mt-4'>
                <h4 className='text-[20px] text-[#191D23] font-bold border-r-2 border-black !pr-4'>Hotel Details</h4>
                <p className='text-xs text-[#C9CACA] font-semibold'>Hotels&gt; <span className='text-[#177CFD]'>Hotel Details</span></p>
              </div>
            </div>
            <div className='!mt-6 !mb-10  w-[87%]'>
              <HotelDetail />
            </div>
            <div className='!mb-30 w-[85%]'>
              <Recommended />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailPage