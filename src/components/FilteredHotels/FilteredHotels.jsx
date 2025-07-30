import HotelCard from '../Hotel Card/HotelCard';
import notFound from '../../assets/images/notFound.png'

function FilteredHotels({filteredHotels}) {
    return (
        <>
            <div className='!mt-6 flex flex-wrap gap-8 w-[95%]'>

                {filteredHotels.length > 0 ? filteredHotels.map((data) => (
                    <HotelCard key={data.id} hotel={data} />
                )) :
                    <div className='!mt-10 flex flex-col items-center gap-8 w-[80%]'>
                        <figure><img src={notFound} alt="Not Found" /></figure>
                        <p className='font-bold text-[18px] text-black'>No Result Found</p>
                    </div>
                }
            </div>
        </>
    )
}

export default FilteredHotels