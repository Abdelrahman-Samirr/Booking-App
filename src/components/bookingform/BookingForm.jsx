import { bookedHotel } from '../../store/slice'
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import SuccessBooking from '../SuccessBooking/SuccessBooking';


function BookingForm({selectedHotel }) {

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();


  const [show, setShow] = useState(false)


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData"));
    const userId = user?.id
    
    // const bookingUser = JSON.parse(localStorage.getItem(`bookings_${userId}`));
    if (user) {
      const nameParts = (user.name || "").trim().split(" ");
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(" ");

      setValue("firstName", firstName || "");
      setValue("lastName", lastName || "");
      setValue("email", user.email || "");
      setValue("country", user.country || "");
      setValue("mobile", user.phone || "");
      // setValue("cardNumber", bookingUser.bookingDetails.cardNumber || "");
      // setValue("CVV", bookingUser.bookingDetails.cvv || "");
      // setValue("expiryDate", bookingUser.bookingDetails.expiryDate || "");
      // setValue("cardHolder", bookingUser.bookingDetails.cardHolder || "");

    }
  }, []);



  const dispatch = useDispatch();

  const handleBooking = (data) => {
  const fullBooking = {
    ...selectedHotel, 
    bookingDetails: data, 
  };

  dispatch(bookedHotel(fullBooking));
   setShow(true)
};

  return (
    <>
    
      <form onSubmit={handleSubmit(handleBooking)} className="w-[68%] mx-auto bg-white !p-8 rounded-lg shadow-md ">

        <div>
          <h2 className="text-2xl font-bold text-gray-800 !mb-1">Your Details</h2>
          <p className="text-sm text-gray-500 !mb-6">
            Whether you are in town for business or leisure, San Francisco Marriott Marquis welcomes travelers to Northern California with exceptional service, spacious
          </p>

          <div className="grid grid-cols-3 gap-4 !mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Title</label>
              <select {...register("title", { required: "Title is required" })} className="!mt-1 block w-full border border-gray-300 rounded-md !px-3 !py-2 text-black">
                <option value="">Select</option>
                <option>Mr</option>
                <option>Ms</option>
                <option>Mrs</option>
              </select>
              {errors.title && <p className="text-red-500 text-xs">{errors.title.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">First Name</label>
              <input type="text" {...register("firstName", { required: "First name is required" })} placeholder="Enter your first name" className="text-black !mt-1 block w-full border border-gray-300 rounded-md !px-3 !py-2" />
              {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Last Name</label>
              <input type="text" {...register("lastName", { required: "Last name is required" })} placeholder="Enter your last name" className="text-black !mt-1 block w-full border border-gray-300 rounded-md !px-3 !py-2" />
              {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName.message}</p>}
            </div>
          </div>

          <div className="!mb-4">
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input type="email" {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })} placeholder="yourmail@gmail.com" className="text-black !mt-1 block w-full border border-gray-300 rounded-md !px-3 !py-2" />
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Country</label>
              <select {...register("country", { required: "Country is required" })} className="text-black !mt-1 block w-full border border-gray-300 rounded-md !px-3 !py-2">
                <option value="">Select</option>
                <option>Egypt</option>
                <option>USA</option>
                <option>UK</option>
              </select>
              {errors.country && <p className="text-red-500 text-xs">{errors.country.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Mobile</label>
              <input type="tel" {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^\d{11}$/,
                  message: "Mobile number must be 11 digits"
                }
              })} placeholder="Enter your phone number" className="text-black !mt-1 block w-full border border-gray-300 rounded-md !px-3 !py-2" />
              {errors.mobile && <p className="text-red-500 text-xs">{errors.mobile.message}</p>}
            </div>
          </div>
        </div>

        <hr className="!my-6" />

        <div className='!mt-4'>
          <h2 className="text-2xl font-bold text-gray-800 !mb-6">Payment Details</h2>

          <div className="!mb-4">
            <label className="block text-sm font-medium text-gray-600">Card Number</label>
            <input type="text" {...register("cardNumber", {
              required: "Card number is required",
              pattern: {
                value: /^\d{14}$/,
                message: "Card number must be exactly 14 digits",
              },
            })} placeholder="Enter your card number" className="text-black !mt-1 block w-full border border-gray-300 rounded-md !px-3 !py-2" />
            {errors.cardNumber && <p className="text-red-500 text-xs">{errors.cardNumber.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4 !mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">CVV</label>
              <input
                type="text"
                {...register("CVV", {
                  required: "Card holder name is required",
                })}
                placeholder="Enter your card holder name"
                className="!mt-1 block w-full border border-gray-300 rounded-md !px-3 !py-2 text-black"
              />
              {errors.cardHolder && (
                <p className="text-red-500 text-xs">{errors.cardHolder.message}</p>
              )}

            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Expiry Date</label>
              <input type="date" {...register("expiryDate", { required: "Expiry date is required" })} className="!mt-1 block w-full border text-black border-gray-300 rounded-md !px-3 !py-2" />
              {errors.expiryDate && <p className="text-red-500 text-xs">{errors.expiryDate.message}</p>}
            </div>
          </div>

          <div className="!mb-6">
            <label className="block text-sm font-medium text-gray-600">Card Holder</label>
            <input type="text" {...register("cardHolder", {
              required: "Card Holder is required",
              pattern: {
                value: /^[A-Z][a-zA-Z ]*$/,
                message: "Only letters allowed, start with capital",
              },
            })} placeholder="Enter your card holder name" className="!mt-1 block w-full border border-gray-300 rounded-md !px-3 !py-2 text-black" />
            {errors.cardHolder && <p className="text-red-500 text-xs">{errors.cardHolder.message}</p>}
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white !py-2 rounded-md font-semibold hover:bg-blue-700 transition-all cursor-pointer">
            PAY NOW
          </button>
        </div>
      </form>
      {show && <SuccessBooking onClose={() => setShow(false)}/>}
    </>
  )
}

export default BookingForm