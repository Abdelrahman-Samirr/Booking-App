import SideBar from "../../components/Sidebar/SideBar"
import Nav from "../../components/Nav/Nav"
import Search from "../../components/Search/Search"
import BookedHotels from "../../components/BookedHotels/BookedHotels"
import bgSearch from '../../assets/images/Small.png'
import ProfileCard from "../../components/ProfileCard/ProfileCard"


function ProfilePage() {
  return (
    <>
      <div className=' '>
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
                <h4 className='text-[20px] text-[#191D23] font-bold border-r-2 border-black !pr-4'>My Bookings</h4>
                <p className='text-xs text-[#177CFD] font-semibold'>My Bookings</p>
              </div>

            </div>
            <div className="flex">

              <div className="!mt-10 flex flex-col gap-y-4 !mb-10">
                <BookedHotels />
              </div>
              <ProfileCard/>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage