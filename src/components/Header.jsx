import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navigation } from "../contants/navigation";

// search Icons
import { IoIosSearch } from "react-icons/io";

// Images
import logo from "../assets/logo.png";
import user from "../assets/user.png";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if(searchInput){
      navigate(`./search?q=${searchInput}`);
    }
  }, [searchInput]);

  const handleSubmmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className="fixed top-0 w-full h-16  bg-black  bg-opacity-50 z-40">
      <div className="container mx-auto px-3 flex items-center h-full">
        <Link to={"/"}>
          <img src={logo} alt="logo" width={120} />
        </Link>

        <nav className="hidden lg:flex items-center gap-3 ml-5">
          {navigation.map((nav, item) => {
            return (
              <div key={nav.label}>
                <Link
                  to={nav.href}
                  // className={({ isActive }) =>
                  //   `px-2 hover:text-neutral-100 ${
                  //     isActive && "text-neutral-100"
                  // }`}
                  className="px-2 hover:text-neutral-100 "
                >
                  {nav.label}
                </Link>
              </div>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <form className=" flex gap-2 items-center" onClick={handleSubmmit}>
            <input
              type="text"
              placeholder="Search here..."
              className=" bg-transparent px-4 py-1 
               outline-none border-none rounded-sm
               hidden lg:block"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
              name="q"
            />
            <button className=" text-2xl text-white ">
              <IoIosSearch />
            </button>
          </form>
          <div className=" active:scale-50 transition-all">
            <img
              src={user}
              alt="user"
              className="w-8 h-8 rounded-full overflow-hidden object-cover "
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
