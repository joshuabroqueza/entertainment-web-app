import React from "react";
import nav_bookmark from "../assets/icon-nav-bookmark.svg";
import nav_home from "../assets/icon-nav-home.svg";
import nav_movies from "../assets/icon-nav-movies.svg";
import nav_tv_series from "../assets/icon-nav-tv-series.svg";

const Navbar = ({ activePage, dispatch }) => {
  const handleActivePage = (name) => {
    dispatch({
      type: "SET_ACTIVE_PAGE",
      payload: name,
    });
  };

  return (
    <div className="navbar_icon flex flex-row lg:flex-col justify-around items-center w-1/3 lg:w-full lg:h-1/3  ">
      {activePage.map((navbar_child, index) => (
        <>
          <img
            onClick={() => {
              handleActivePage(navbar_child.section);
            }}
            className={`${
              navbar_child.active === true
                ? "opacity-100 cursor-pointer"
                : "opacity-40 cursor-pointer"
            } hover:drop-shadow-lg hover:opacity-100`}
            src={navbar_child.icon}
            alt={navbar_child.section}
          />
        </>
      ))}
    </div>
  );
};

export default Navbar;
