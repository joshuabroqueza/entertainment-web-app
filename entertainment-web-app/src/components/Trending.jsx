import React from "react";
import bookmark from "../assets/icon-bookmark-empty.svg";
import movie_icon from "../assets/icon-category-movie.svg";

const Trending = ({ movies }) => {
  return (
    <div className="p-4 h-[181px] mb-10 lg-w-full max-w-[100vw] lg:max-w-[90vw]">
      <h1 className="text-xl my-2 text-white font-thin">Trending</h1>
      <div className="trending_container snap-x flex flex-row relative lg:scroll-m-2 overflow-x-auto whitespace-nowrap">
        <div className="trending_child snap-center border my-2 bg-[url('assets/thumbnails/beyond-earth/trending/small.jpg')] h-[140px] w-[240px] min-w-[240px] mx-3 p-3 rounded-xl flex flex-col justify-between">
          <div className="flex justify-end">
            <button className="p-2 flex items-center focus:rounded-full justify-center w-8 rounded-full bg-slate-400/25">
              <img
                className="focus:outline-none focus:ring"
                src={bookmark}
                alt="bookmark"
              />
            </button>
          </div>
          <div className="details_container flex flex-row items-center justify-between">
            <div className="flex flex-col">
              <div className="flex justify-center items-center">
                <div className="text-sm text-slate-300 font-thin">2019</div>
                <span className="text-sm mx-2 text-slate-300 font-thin">-</span>
                <span>
                  <img src={movie_icon} alt="movie_icon" />
                </span>
                <span className="text-sm mx-2 text-slate-300 font-thin">
                  Movie
                </span>
              </div>
              <p className="text-white">Beyond Earth</p>
            </div>
            <div>
              <span className="bg-slate-400/25 text-white font-thin p-2 rounded-3xl">
                PG
              </span>
            </div>
          </div>
        </div>
        <div className="trending_child snap-center border my-2 bg-[url('assets/thumbnails/beyond-earth/trending/small.jpg')] h-[140px] w-[240px] min-w-[240px] mx-3 p-3 rounded-xl flex flex-col justify-between">
          <div className="flex justify-end">
            <button className="p-2 flex items-center justify-center w-8 rounded-full bg-slate-400/25">
              <img src={bookmark} alt="bookmark" />
            </button>
          </div>
          <div className="details_container flex flex-row items-center justify-between">
            <div className="flex flex-col">
              <div className="flex justify-center items-center">
                <div className="text-sm text-slate-300 font-thin">2019</div>
                <span className="text-sm mx-2 text-slate-300 font-thin">-</span>
                <span>
                  <img src={movie_icon} alt="movie_icon" />
                </span>
                <span className="text-sm mx-2 text-slate-300 font-thin">
                  Movie
                </span>
              </div>
              <p className="text-white">Beyond Earth</p>
            </div>
            <div>
              <span className="bg-slate-400/25 text-white font-thin p-2 rounded-3xl">
                PG
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* {movies.map((movie) => (

      ))} */}
    </div>
  );
};

export default Trending;
