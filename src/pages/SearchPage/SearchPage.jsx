import React from 'react'
import styles from './SearchPage.module.css'
import bgSearch from '../../assets/images/Small.png'
import SideBar from '../../components/Sidebar/SideBar'
import Nav from '../../components/Nav/Nav'
import Search from '../../components/Search/Search'
import HotelCard from '../../components/Hotel Card/HotelCard'


function SearchPage() {
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
              <Search />
              <div className='flex items-center gap-2 bg-white rounded-md !pl-6 !py-3 !mt-4'>
                <h4 className='text-[20px] text-[#191D23] font-bold border-r-2 border-black !pr-4'>Hotels</h4>
                <p className='text-xs text-[#191D23] font-semibold'>Total <span className='text-[#177CFD]'>126 result</span></p>
              </div>
            </div>
            <div className='!mt-6 flex flex-wrap gap-4 w-[95%]'>
              <HotelCard />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchPage