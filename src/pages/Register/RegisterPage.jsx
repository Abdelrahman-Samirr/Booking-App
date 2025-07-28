import React from "react";
import { useForm } from "react-hook-form";

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
    <form onSubmit={handleSubmit(onSubmit)} className="!p-6 max-w-md bg-white !mx-auto !mt-10 rounded shadow">
      <h2 className="text-2xl font-semibold text-center text-[#4D556F] !mb-6">Signup</h2>

      <div className="!mb-4">
        <label className="block !mb-1 text-[#4D556F]">Name</label>
        <input {...register("name", { required: "Name is required" })} className="border w-full !p-2 bg-[#EAEBEC]" />
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
          className="border w-full !p-2 bg-[#EAEBEC]"
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
          className="border w-full !p-2 bg-[#EAEBEC]"
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
          className="border w-full !p-2 bg-[#EAEBEC]"
        />
        {errors.confirmPassword && <p className="text-red-500 text-sm !mt-1">{errors.confirmPassword.message}</p>}
      </div>

      <div className="!mb-4">
        <label className="block mb-1 text-[#4D556F]">Country</label>
        <select {...register("country", { required: "Country is required" })} className="border w-full !p-2 bg-[#EAEBEC]">
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
          className="border w-full !p-2 bg-[#EAEBEC]"
        />
        {errors.phone && <p className="text-red-500 text-sm !mt-1">{errors.phone.message}</p>}
      </div>

      <button type="submit" className="bg-blue-600 text-white !px-4 !py-2 rounded w-full hover:bg-blue-700 transition">
        Register
      </button>
    </form>
  );
}

export default RegisterPage;
