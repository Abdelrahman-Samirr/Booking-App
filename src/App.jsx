import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/Home/HomePage"));
const SearchPage = lazy(() => import("./pages/SearchPage/SearchPage"));
const DetailPage = lazy(() => import("./pages/DetailPage/DetailPage"));
const HotelBookingPage = lazy(() => import("./pages/HotelBooking/HotelBookingPage"));
const RegisterPage = lazy(() => import("./pages/Register/RegisterPage"));
const LoginPage = lazy(() => import("./pages/Login/LoginPage"));
const HotelsPage = lazy(() => import("./pages/Hotels/HotelsPage"));
const ProfilePage = lazy(() => import("./pages/Profile/ProfilePage"));


function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div className="text-center text-lg mt-10">Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/booking/:id" element={<HotelBookingPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/hotels" element={<HotelsPage />} />
            <Route path="/bookedHotels" element={<ProfilePage />} />
          </Routes>
        </Suspense>

      </BrowserRouter>
    </>
  );
}

export default App;
