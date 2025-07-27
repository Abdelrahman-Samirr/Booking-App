import React from 'react'

function BookingForm() {
  return (
    <>
    <form className="w-[65%] mx-auto bg-white !p-8 rounded-lg shadow-md ">
      {/* Your Details */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 !mb-1">Your Details</h2>
        <p className="text-sm text-gray-500 !mb-6">
          Whether you are in town for business or leisure, San Francisco Marriott Marquis welcomes travelers to Northern California with exceptional service, spacious
        </p>

        {/* Title, First Name, Last Name */}
        <div className="grid grid-cols-3 gap-4 !mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Title</label>
            <select className="!mt-1 block w-full border border-gray-300 rounded-md !px-3 !py-2 text-black">
              <option>Mr</option>
              <option>Ms</option>
              <option>Mrs</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Fast Name</label>
            <input type="text" placeholder="Enter your first name" className="text-black !mt-1 block w-full border border-gray-300 rounded-md !px-3 !py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Last Name</label>
            <input type="text" placeholder="Enter your last name" className="text-black !mt-1 block w-full border border-gray-300 rounded-md !px-3 !py-2" />
          </div>
        </div>

        {/* Email */}
        <div className="!mb-4">
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <input type="email" placeholder="yourmail@gmail.com" className="text-black !mt-1 block w-full border border-gray-300 rounded-md !px-3 !py-2" />
        </div>

        {/* Country & Mobile */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Country</label>
            <select className="text-black !mt-1 block w-full border border-gray-300 rounded-md !px-3 !py-2">
              <option>Egypt</option>
              <option>USA</option>
              <option>UK</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Mobile</label>
            <input type="tel" placeholder="Enter you phone number" className="text-black !mt-1 block w-full border border-gray-300 rounded-md !px-3 !py-2" />
          </div>
        </div>
      </div>

      <hr />

      {/* Payment Details */}
      <div className='!mt-4'>
        <h2 className="text-2xl font-bold text-gray-800 !mb-6">Payment Details</h2>

        {/* Card Number */}
        <div className="!mb-4">
          <label className="block text-sm font-medium text-gray-600 md:flex justify-between items-center">
            <span>Card Number</span>
          </label>
          <input type="text" placeholder="Enter yout card number" className="text-black !mt-1 block w-full border border-gray-300 rounded-md !px-3 !py-2" />
        </div>

        {/* CVV & Expiry */}
        <div className="grid grid-cols-2 gap-4 !mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">CVV</label>
            <input type="text" placeholder="CVV" className="text-black !mt-1 block w-full border border-gray-300 rounded-md !px-3 !py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Expiry Date</label>
            <input type="date" placeholder="" className="!mt-1 block w-full border text-black border-gray-300 rounded-md !px-3 !py-2" />
          </div>
        </div>

        {/* Card Holder */}
        <div className="!mb-6">
          <label className="block text-sm font-medium text-gray-600">Card Holder</label>
          <input type="text" placeholder="Enter your card holder name" className="!mt-1 block w-full border border-gray-300 rounded-md !px-3 !py-2" />
        </div>

        <button type='submit' className="w-full bg-blue-600 text-white !py-2 rounded-md font-semibold hover:bg-blue-700 transition-all cursor-pointer">
          PAY NOW
        </button>
      </div>
    </form>
    </>
  )
}

export default BookingForm