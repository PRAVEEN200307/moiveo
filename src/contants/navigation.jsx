import { PiTelevisionSimpleLight } from "react-icons/pi";
import { BiMoviePlay } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";


export const navigation = [
    {
      label: "Tv Shows",
      href: "tv",
      icon:<PiTelevisionSimpleLight/>
    },
    {
      label: "Movies",
      href: "movie",
      icon: <BiMoviePlay />
    },
  ];
  
  export const mobileNavigation =[
    {
      label:"Home",
      href:'/',
      icon: <AiOutlineHome />
    },
    ...navigation,
    {
      label:"Search",
      href:'search',
      icon: <IoIosSearch />
    }
  ];