import React from "react";
import bookmark from "../assets/icon-bookmark-empty.svg";
import movie_icon from "../assets/icon-category-movie.svg";

const Recommended = ({ movies }) => {
  const recommendedMovies = movies.filter((movie) => !movie.isTrending);

  console.log(recommendedMovies);
  return (
    <div className="recommendation_container p-4 bg-semi-dark overflow-auto h-screen max-h-screen">
      <h1 className="text-xl my-2 text-white font-thin">Recommended for you</h1>
      <div className="recommendation_list grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-auto">
        {recommendedMovies.map((movie_list) => (
          <div key={movie_list.title} className="recommendation_child">
            <div className="my-2 bg-[url('assets/thumbnails/beyond-earth/trending/small.jpg')] bg-cover h-[110px] w-full min-w-[160px] md:w-[220px] lg:w-[280px] md:h-[140px] p-2 rounded-xl flex flex-col justify-between">
              <div className="flex justify-end">
                <button className="p-2 flex items-center focus:rounded-full justify-center w-8 rounded-full bg-slate-400/25">
                  <img
                    className="focus:outline-none focus:ring"
                    src={bookmark}
                    alt="bookmark"
                  />
                </button>
              </div>
            </div>
            <div className="recommendation_details min-w-[164px] w-[164px]  flex flex-row items-center justify-between">
              <div className="flex flex-col">
                <div className="flex justify-center items-center">
                  <div className="text-xs text-slate-300 font-thin">
                    {movie_list.year}
                  </div>
                  <span className="text-sm mx-2 text-slate-300 font-thin">
                    -
                  </span>
                  <span>
                    <img src={movie_icon} alt="movie_icon" />
                  </span>
                  <span className="text-xs mx-2 text-slate-300 font-thin">
                    {movie_list.category}
                  </span>
                </div>
                <p className="text-white">{movie_list.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
