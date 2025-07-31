import BookedHotel from "../BookedHotel/BookedHotel";
import { useSelector } from "react-redux";
import notFound from "../../assets/images/notFound.png";

function BookedHotels() {
  const bookedHotels = useSelector((state) => state.BookedHotels.hotelsArr);

  return (
    <>
      {bookedHotels.length > 0 ? (
        bookedHotels.map((hotel) => <BookedHotel key={hotel.id} hotel={hotel} />)
      ) : (
        <div className="!mx-auto !mt-10 flex flex-col items-center gap-8 w-[80%]">
          <figure>
            <img src={notFound} alt="Not Found" />
          </figure>
          <p className="font-bold text-[18px] text-black">No Result Found</p>
        </div>
      )}
    </>
  );
}

export default BookedHotels;
