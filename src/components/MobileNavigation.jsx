import React from "react";
import { mobileNavigation } from "../contants/navigation";
import { Link } from "react-router-dom";

const MobileNavigation = () => {
  return (
    <section
      className="lg:hidden bg-black z-40 opacity-70 bg- p-2 bg-opacity-400 fixed
     bottom-0 w-full text-neutral-400 backdrop-blur-3xl"
    >
      <div className="flex items-center justify-between h-full">
        {mobileNavigation.map((nav, index) => {
          return (
            <Link
              to={nav.href}
              key={nav.label + "mobilenavigaition"}
              className={`px-3 flex h-full items-center flex-col justify-center text-white`}
            >
              <div className="text-2xl">{nav.icon}</div>
              <p className="text-sm">{nav.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default MobileNavigation;
