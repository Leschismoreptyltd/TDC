import {
    Navbar,
    Typography,
    IconButton,
  } from "@material-tailwind/react";
  import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
  import { Link } from "react-router-dom";
  import logo from "../../assets/images/TDC logo.webp"
  import HeaderAvatarFrag from "../fragments/HeaderAvatarFrag";

const Header = () => {

return(
    <>
    <Navbar
      variant="gradient"
      color="purple"
      className=" mx-auto max-w-screen-xl bg-inherit px-4 py-3 "
    >
      <div className="flex flex-wrap mx-auto items-center justify-between gap-y-4 text-white">
        <div className="flex mx-auto border-white border-2">
          <img src={logo} alt="" className="w-1/4" />
          <HeaderAvatarFrag/>
          
        </div>
        
        <div className="ml-auto flex gap-1 md:mr-4">
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li><Link to="/" className="hover:text-red-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-600">About Us</Link></li>
            <li><Link to="/join" className="hover:text-yellow-600">Join TDC</Link></li>
            <li><Link to="/divasection" className="hover:text-green-600">Diva Lounge</Link></li>
          </ul>
          <IconButton variant="text" color="white">
            <Cog6ToothIcon className="h-4 w-4 hover:text-blue-600" />
          </IconButton>
          <IconButton variant="text" color="white">
            <BellIcon className="h-4 w-4 hover:text-indigo-600" />
          </IconButton>
        </div>
        <div className="relative flex w-full gap-2 md:w-max">
         
        </div>
      </div>
    </Navbar>
    </>
)

}

export default Header;