import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/Home/HomePage'
import SearchPage from './pages/SearchPage/SearchPage'
import DetailPage from './pages/DetailPage/DetailPage';
import HotelBookingPage from './pages/HotelBooking/hotelBookingPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/detail/:id" element={<DetailPage/>}/>
          <Route path="/booking" element={<HotelBookingPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App