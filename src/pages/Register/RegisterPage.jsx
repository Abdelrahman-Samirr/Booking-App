import React from "react";
import { useForm } from "react-hook-form";
import Bg from '../../assets/images/BG.png'
import logo from '../../assets/images/Vector.png'
import { Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // You can send this data to your backend API
  };

  const password = watch("password");

  return (

    <div className="flex w-[80%] bg-white !mx-auto !mt-10 !mb-14 rounded-3xl overflow-hidden">

      <div className="!p-6 rounded-3xl shadow w-1/2">
        <form onSubmit={handleSubmit(onSubmit)} className="w-[80%] !mx-auto">
          <div className="flex justify-center !mt-4"><img className="text-center" src={logo} alt="logo" /></div>
          <h2 className="text-2xl text-center text-black font-bold !mb-6 !mt-8">Signup</h2>

          <div className="!mb-4">
            <label className="block !mb-1 text-[#4D556F]">Name</label>
            <input {...register("name", { required: "Name is required" })} className="border w-full !p-2 bg-[#EAEBEC] rounded-md text-black" />
            {errors.name && <p className="text-red-500 text-sm !mt-1">{errors.name.message}</p>}
          </div>

          <div className="!mb-4">
            <label className="block !mb-1 text-[#4D556F]">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email format",
                },
              })}
              className="border w-full !p-2 bg-[#EAEBEC] rounded-md text-black"
            />
            {errors.email && <p className="text-red-500 text-sm !mt-1">{errors.email.message}</p>}
          </div>

          <div className="!mb-4">
            <label className="block !mb-1 text-[#4D556F]">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
              className="border w-full !p-2 bg-[#EAEBEC] rounded-md text-black"
            />
            {errors.password && <p className="text-red-500 text-sm !mt-1">{errors.password.message}</p>}
          </div>

          <div className="!mb-4">
            <label className="block !mb-1 text-[#4D556F]">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirm your password",
                validate: (value) => value === watch("password") || "Passwords do not match",
              })}
              className="border w-full !p-2 bg-[#EAEBEC] rounded-md text-black"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm !mt-1">{errors.confirmPassword.message}</p>}
          </div>

          <div className="!mb-4">
            <label className="block mb-1 text-[#4D556F]">Country</label>
            <select {...register("country", { required: "Country is required" })} className="border w-full !p-2 bg-[#EAEBEC] rounded-md text-black">
              <option value="">Select Country</option>
              <option value="egypt">Egypt</option>
              <option value="ksa">KSA</option>
              <option value="uae">UAE</option>
            </select>
            {errors.country && <p className="text-red-500 text-sm !mt-1">{errors.country.message}</p>}
          </div>

          <div className="mb-6">
            <label className="block !mb-1 text-[#4D556F]">Phone</label>
            <input
              type="tel"
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Enter a valid phone number",
                },
              })}
              className="border w-full !p-2 bg-[#EAEBEC] rounded-md text-black"
            />
            {errors.phone && <p className="text-red-500 text-sm !mt-1">{errors.phone.message}</p>}
          </div>

          <button type="submit" className="bg-blue-600 text-white !px-4 !py-2 rounded w-full hover:bg-blue-700 transition !mt-10 cursor-pointer">
            Register
          </button>
          <Link to={`/login`}>
          <p className="text-black text-base !my-6  text-center cursor-pointer underline">Already have an account? <span className="text-[#0A6ADA]">Login</span></p>
          </Link>
        {/* <p className="text-[#525252] text-center "><span className="text-[#1C1C1C] font-bold">Signup</span> with Others</p> */}
        </form>
      </div>

      <figure className="w-1/2 h-auto"><img className="w-full h-full object-cover" src={Bg} alt="" /></figure>
    </div>
  );
}

export default RegisterPage;
