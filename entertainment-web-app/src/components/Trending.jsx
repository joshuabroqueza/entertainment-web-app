import React from "react";
import bookmark from "../assets/icon-bookmark-empty.svg";
import movie_icon from "../assets/icon-category-movie.svg";

const Trending = ({ movies }) => {
  const trendingMovies = movies.filter((movie) => movie.isTrending);

  console.log(trendingMovies);
  return (
    <div className="p-4 h-[181px] mb-10 lg-w-full max-w-[100vw] lg:max-w-[90vw]">
      <h1 className="text-xl my-2 text-white font-thin">Trending</h1>
      <div className="trending_container snap-x flex flex-row relative lg:scroll-m-2 overflow-x-auto whitespace-nowrap">
        {trendingMovies.map((trending_movie) => (
          //   <div
          //     key={trending_movie.title}
          //     className={`trending_child snap-center border my-2 bg-[url('${trending_movie.thumbnail.trending.small}')] h-[140px] w-[240px] min-w-[240px] mx-3 p-3 rounded-xl flex flex-col justify-between`}
          //   >
          <div
            key={trending_movie.title}
            className={`trending_child snap-center my-2 bg-cover bg-[url('assets/thumbnails/beyond-earth/trending/small.jpg')] h-[140px] w-[240px] min-w-[240px] mx-3 p-3 rounded-xl flex flex-col justify-between`}
          >
            <div className="flex justify-end">
              <button className="p-2 flex items-center justify-center w-8 rounded-full bg-slate-400/25">
                <img src={bookmark} alt="bookmark" />
              </button>
            </div>
            <div className="details_container flex flex-row items-center justify-between">
              <div className="flex flex-col">
                <div className="flex justify-center items-center">
                  <div className="text-sm text-slate-300 font-thin">
                    {trending_movie.year}
                  </div>
                  <span className="text-sm mx-2 text-slate-300 font-thin">
                    -
                  </span>
                  <span>
                    <img src={movie_icon} alt="movie_icon" />
                  </span>
                  <span className="text-sm mx-2 text-slate-300 font-thin">
                    {trending_movie.category}
                  </span>
                </div>
                <p className="text-white">{trending_movie.title}</p>
              </div>
              <div className="w-10 h-10 flex justify-center items-center bg-slate-400/25 rounded-full">
                <span className="text-sm text-white font-thin p-3">
                  {trending_movie.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
