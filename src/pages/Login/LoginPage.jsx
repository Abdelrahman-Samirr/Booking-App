import React from "react";
import { useForm } from "react-hook-form";
import Bg from '../../assets/images/BG.png'
import logo from '../../assets/images/Vector.png'
import google from '../../assets/images/google_.png'
import facebook from '../../assets/images/facebook_.png'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { axiosInterceptor } from "../../interceptor";

function LoginPage() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    axiosInterceptor
      .get(`users?email=${data.email}&password=${data.password}`)
      .then((res) => {
        if (res.data.length > 0) {
          const userData = res.data[0];

          // Save to localStorage for future times don't fetch again
          localStorage.setItem("userData", JSON.stringify(userData));
          navigate("/home");
        } else {
          alert("Invalid email or password");
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
        alert("Something went wrong.");
      });

  };

  return (
    <>

      <div className="flex w-[80%] bg-white !mx-auto !mt-10 !mb-14 rounded-3xl overflow-hidden">

        <div className="!p-6 rounded-3xl shadow w-1/2 flex items-center">
          <form onSubmit={handleSubmit(onSubmit)} className="w-[80%] !mx-auto">
            <div className="flex justify-center !mt-4"><img className="text-center" src={logo} alt="logo" /></div>
            <h2 className="text-2xl text-center text-black font-bold !mb-6 !mt-8">LOGIN</h2>

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

            <button type="submit" className="bg-blue-600 text-white !px-4 !py-2 rounded w-full hover:bg-blue-700 transition !mt-10 cursor-pointer">
              LOGIN
            </button>
            <Link to={`/register`}>
              <p className="text-black text-base !my-8  text-center cursor-pointer underline">Don’t have an account? <span className="text-[#0A6ADA]">Register</span></p>
            </Link>
            <p className="text-[#525252] text-center "><span className="text-[#1C1C1C] font-bold">Login</span> with Others</p>

            <div className="flex justify-center items-center gap-2 bg-transparent border-1 border-black !py-2.5 !mt-6 !mb-2 rounded-2xl cursor-pointer">
              <img src={google} alt="google logo" />
              <p className="text-[#1C1C1C]">Login with <span className="font-bold">google</span></p>
            </div>
            <div className="flex justify-center items-center gap-2 bg-transparent border-1 border-black !py-2.5 !mt-6 rounded-2xl cursor-pointer">
              <img src={facebook} alt="google logo" />
              <p className="text-[#1C1C1C]">Login with <span className="font-bold">Facebook</span></p>
            </div>
          </form>
        </div>

        <figure className="w-1/2 h-auto"><img className="w-full h-full object-cover" src={Bg} alt="" /></figure>
      </div>

    </>
  );
}

export default LoginPage;
