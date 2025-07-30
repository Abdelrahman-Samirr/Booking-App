import Search from "../../components/Search/Search";
import Recommended from "../../components/recommended card/Recommended";
import background from "../../assets/images/background.jpg";
import SideBar from "../../components/Sidebar/SideBar";
import Nav from "../../components/Nav/Nav";
import Offers from "../../components/offer/Offers";
import { Link } from "react-router-dom";
import { Dropdown, DropdownItem } from "flowbite-react";
import { useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";

function HomePage() {

  const user = JSON.parse(localStorage.getItem("userData"))

  const handleLogout = () => {
        localStorage.removeItem("userData");
    };

  return (
    <>
      {<div className={``}>
        <figure className="absolute ">
          <img src={background} alt="" />
        </figure>
        <div className="flex bg-[#e5e5e5b7] ">
          {/* sidebar  */}
          <div className="flex z-0">
            <SideBar />
          </div>

          {/* login&register  */}
          {user ?
            <div className="absolute flex gap-4 w-full !ml-[88%] !mt-6">
              <Dropdown label={user.name} dismissOnClick={false} className="!px-2.5 cursor-pointer">
                <Link to={"/login"}>
                  <DropdownItem onClick={handleLogout}>Sign out</DropdownItem>
                </Link>
              </Dropdown>

            </div> :
            <div className="absolute flex gap-4 w-full !ml-[88%] !mt-6">
              <Link to={`/login`}>
                <p className="cursor-pointer text-white">Login</p>
              </Link>
              <Link to={`/register`}>
                <p className="cursor-pointer text-white">Sign Up</p>
              </Link>
            </div>
          }

          <div className="!ml-22 !mt-40 z-0 !mb-30 w-[80%]">
            {/* Navbar */}
            <div className="!ml-10">
              <Nav />
            </div>

            {/* search */}
            <div className="!mt-13 !ml-0 w-[94%]">
              <Search />
            </div>

            {/* recommended */}
            <div className="!mt-8 w-[95.5%]">
              <Recommended />
            </div>

            {/* offers */}
            <div className="!mt-20">
              <Offers />
            </div>
          </div>
        </div>
      </div>}
    </>
  );
}

export default HomePage;
