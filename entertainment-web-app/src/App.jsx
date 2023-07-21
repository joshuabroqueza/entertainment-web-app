import nav_bookmark from "./assets/icon-nav-bookmark.svg";
import nav_home from "./assets/icon-nav-home.svg";
import nav_movies from "./assets/icon-nav-movies.svg";
import nav_tv_series from "./assets/icon-nav-tv-series.svg";
import entertainment_logo from "./assets/logo.svg";
import avatar from "./assets/image-avatar.png";

import bookmark from "./assets/icon-bookmark-empty.svg";

import search_icon from "./assets/icon-search.svg";
import movie_icon from "./assets/icon-category-movie.svg";

function App() {
  return (
    <div className="app_container bg-semi-dark h-screen w-screen lg:flex lg:flex-row">
      {/* NAVBAR SECTION */}
      <div className="navbar lg:h-[100vh] md:p-4 lg:w-[10%]">
        <div className="bg-light-dark flex flex-row justify-between items-center px-5 py-2 drop-shadow-md shadow-md md:rounded-lg md:py-3 lg:flex-col lg:h-full ">
          <div className="mr-4 lg:mr-0 lg:my-5">
            <img src={entertainment_logo} alt="" />
          </div>

          <div className="navbar_icon flex flex-row lg:flex-col justify-around items-center w-1/3 lg:w-full lg:h-1/3  ">
            <img src={nav_bookmark} alt="bookmark" />
            <img src={nav_home} alt="home" />
            <img src={nav_movies} alt="movies" />
            <img src={nav_tv_series} alt="tv_series" />
          </div>
          <div className="avatar_container">
            <img
              className="h-8 border rounded-full border-white drop-shadow-md"
              src={avatar}
              alt="avatar"
            />
          </div>
        </div>
      </div>

      {/* LARGE SCREEN BODY */}
      <div className="lg:max-w-[3/4]">
        {/* SEARCH SECTION  */}
        <div className="flex flex-row p-3 lg:h-14 lg:my-4 lg:mx-3 lg:w-full">
          <div className="px-2">
            <img src={search_icon} alt="search_icon" />
          </div>
          <input
            className="cursor-pointer flex-grow bg-semi-dark text-semi-light placeholder:text-slate-400  focus:outline-none "
            type="text"
            placeholder="Search for movies or TV series"
          />
        </div>

        {/* TRENDING SECTION */}
        <div className="p-4 h-[181px] lg-w-full max-w-[100vw] lg:max-w-[90vw]">
          <h1 className="text-xl my-2 text-white font-thin">Trending</h1>
          <div className="trending_container snap-x flex flex-row relative lg:scroll-m-2 overflow-x-auto whitespace-nowrap">
            <div className="trending_child snap-center border my-2 bg-[url('assets/thumbnails/beyond-earth/trending/small.jpg')] h-[140px] w-[240px] min-w-[240px] mx-3 p-3 rounded-xl flex flex-col justify-between">
              <div className="flex justify-end">
                <div className="p-2 flex items-center justify-center w-8 rounded-full bg-slate-400/25">
                  <img src={bookmark} alt="bookmark" />
                </div>
              </div>
              <div className="details_container flex flex-row items-center justify-between">
                <div className="flex flex-col">
                  <div className="flex justify-center items-center">
                    <div className="text-sm text-slate-300 font-thin">2019</div>
                    <span className="text-sm mx-2 text-slate-300 font-thin">
                      -
                    </span>
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
                <div className="p-2 flex items-center justify-center w-8 rounded-full bg-slate-400/25">
                  <img src={bookmark} alt="bookmark" />
                </div>
              </div>
              <div className="details_container flex flex-row items-center justify-between">
                <div className="flex flex-col">
                  <div className="flex justify-center items-center">
                    <div className="text-sm text-slate-300 font-thin">2019</div>
                    <span className="text-sm mx-2 text-slate-300 font-thin">
                      -
                    </span>
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
        </div>
      </div>
    </div>
  );
}

export default App;
