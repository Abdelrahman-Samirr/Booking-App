

function ProfileCard() {

  const user = JSON.parse(localStorage.getItem("userData"));
  const bookings = JSON.parse(localStorage.getItem(`bookings_${user?.id}`)) || [];


  return (
    <>
      <div className="w-[100%] h-100 flex justify-center !py-10 !mr-10">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg !p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 !mb-4">Profile</h2>

          <div className="w-20 h-20 !mx-auto flex items-center justify-center bg-[#e5e5e5b7] text-white text-3xl font-bold rounded-full">
            {user?.fullName
              ?.split(" ")
              .map((part) => part[0])
              .slice(0, 2)
              .join("")
              .toUpperCase()}
          </div>

          <h3 className="text-xl font-semibold text-gray-800 !mt-3">{user?.fullName}</h3>

          <p className="text-sm text-gray-500 !mt-1">Personal Account</p>

          <div className="!mt-4 inline-block bg-[#e5e5e5b7] text-black !px-4 !py-2 rounded-full cursor-pointer hover:bg-[#e5e5e5] transition">
            Edit Profile
          </div>

          <div className="!mt-6 text-lg font-medium text-gray-700">
            <strong>Total Paid:</strong>{" "}
            {bookings
              .reduce((acc, booking) => {
                const price = booking.pricing?.[0]?.discountedPrice || 0;
                return acc + price;
              }, 0)
              .toLocaleString()}{" "}
            USD
          </div>
        </div>
      </div>


    </>
  )
}

export default ProfileCard