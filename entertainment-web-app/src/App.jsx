import nav_bookmark from "./assets/icon-nav-bookmark.svg";
import nav_home from "./assets/icon-nav-home.svg";
import nav_movies from "./assets/icon-nav-movies.svg";
import nav_tv_series from "./assets/icon-nav-tv-series.svg";
import bookmark from "./assets/icon-bookmark-empty.svg";
import search_icon from "./assets/icon-search.svg";
import movie_icon from "./assets/icon-category-movie.svg";

import { useReducer } from "react";
import Avatar from "./components/Avatar";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import Trending from "./components/Trending";

const initialState = {
  movies: [
    {
      title: "Beyond Earth",
      thumbnail: {
        trending: {
          small: "./assets/thumbnails/beyond-earth/trending/small.jpg",
          large: "./assets/thumbnails/beyond-earth/trending/large.jpg",
        },
        regular: {
          small: "./assets/thumbnails/beyond-earth/regular/small.jpg",
          medium: "./assets/thumbnails/beyond-earth/regular/medium.jpg",
          large: "./assets/thumbnails/beyond-earth/regular/large.jpg",
        },
      },
      year: 2019,
      category: "Movie",
      rating: "PG",
      isBookmarked: false,
      isTrending: true,
    },
    {
      title: "Bottom Gear",
      thumbnail: {
        trending: {
          small: "./assets/thumbnails/bottom-gear/trending/small.jpg",
          large: "./assets/thumbnails/bottom-gear/trending/large.jpg",
        },
        regular: {
          small: "./assets/thumbnails/bottom-gear/regular/small.jpg",
          medium: "./assets/thumbnails/bottom-gear/regular/medium.jpg",
          large: "./assets/thumbnails/bottom-gear/regular/large.jpg",
        },
      },
      year: 2021,
      category: "Movie",
      rating: "PG",
      isBookmarked: false,
      isTrending: true,
    },
    {
      title: "Undiscovered Cities",
      thumbnail: {
        trending: {
          small: "./assets/thumbnails/undiscovered-cities/trending/small.jpg",
          large: "./assets/thumbnails/undiscovered-cities/trending/large.jpg",
        },
        regular: {
          small: "./assets/thumbnails/undiscovered-cities/regular/small.jpg",
          medium: "./assets/thumbnails/undiscovered-cities/regular/medium.jpg",
          large: "./assets/thumbnails/undiscovered-cities/regular/large.jpg",
        },
      },
      year: 2019,
      category: "TV Series",
      rating: "E",
      isBookmarked: false,
      isTrending: true,
    },
    {
      title: "1998",
      thumbnail: {
        trending: {
          small: "./assets/thumbnails/1998/trending/small.jpg",
          large: "./assets/thumbnails/1998/trending/large.jpg",
        },
        regular: {
          small: "./assets/thumbnails/1998/regular/small.jpg",
          medium: "./assets/thumbnails/1998/regular/medium.jpg",
          large: "./assets/thumbnails/1998/regular/large.jpg",
        },
      },
      year: 2021,
      category: "Movie",
      rating: "18+",
      isBookmarked: false,
      isTrending: true,
    },
    {
      title: "Dark Side of the Moon",
      thumbnail: {
        trending: {
          small: "./assets/thumbnails/dark-side-of-the-moon/trending/small.jpg",
          large: "./assets/thumbnails/dark-side-of-the-moon/trending/large.jpg",
        },
        regular: {
          small: "./assets/thumbnails/dark-side-of-the-moon/regular/small.jpg",
          medium:
            "./assets/thumbnails/dark-side-of-the-moon/regular/medium.jpg",
          large: "./assets/thumbnails/dark-side-of-the-moon/regular/large.jpg",
        },
      },
      year: 2018,
      category: "TV Series",
      rating: "PG",
      isBookmarked: true,
      isTrending: true,
    },
    {
      title: "The Great Lands",
      thumbnail: {
        regular: {
          small: "./assets/thumbnails/the-great-lands/regular/small.jpg",
          medium: "./assets/thumbnails/the-great-lands/regular/medium.jpg",
          large: "./assets/thumbnails/the-great-lands/regular/large.jpg",
        },
      },
      year: 2019,
      category: "Movie",
      rating: "E",
      isBookmarked: false,
      isTrending: false,
    },
    {
      title: "The Diary",
      thumbnail: {
        regular: {
          small: "./assets/thumbnails/the-diary/regular/small.jpg",
          medium: "./assets/thumbnails/the-diary/regular/medium.jpg",
          large: "./assets/thumbnails/the-diary/regular/large.jpg",
        },
      },
      year: 2019,
      category: "TV Series",
      rating: "PG",
      isBookmarked: false,
      isTrending: false,
    },
    {
      title: "Earth’s Untouched",
      thumbnail: {
        regular: {
          small: "./assets/thumbnails/earths-untouched/regular/small.jpg",
          medium: "./assets/thumbnails/earths-untouched/regular/medium.jpg",
          large: "./assets/thumbnails/earths-untouched/regular/large.jpg",
        },
      },
      year: 2017,
      category: "Movie",
      rating: "18+",
      isBookmarked: true,
      isTrending: false,
    },
    {
      title: "No Land Beyond",
      thumbnail: {
        regular: {
          small: "./assets/thumbnails/no-land-beyond/regular/small.jpg",
          medium: "./assets/thumbnails/no-land-beyond/regular/medium.jpg",
          large: "./assets/thumbnails/no-land-beyond/regular/large.jpg",
        },
      },
      year: 2019,
      category: "Movie",
      rating: "E",
      isBookmarked: false,
      isTrending: false,
    },
    {
      title: "During the Hunt",
      thumbnail: {
        regular: {
          small: "./assets/thumbnails/during-the-hunt/regular/small.jpg",
          medium: "./assets/thumbnails/during-the-hunt/regular/medium.jpg",
          large: "./assets/thumbnails/during-the-hunt/regular/large.jpg",
        },
      },
      year: 2016,
      category: "TV Series",
      rating: "PG",
      isBookmarked: false,
      isTrending: false,
    },
    {
      title: "Autosport the Series",
      thumbnail: {
        regular: {
          small: "./assets/thumbnails/autosport-the-series/regular/small.jpg",
          medium: "./assets/thumbnails/autosport-the-series/regular/medium.jpg",
          large: "./assets/thumbnails/autosport-the-series/regular/large.jpg",
        },
      },
      year: 2016,
      category: "TV Series",
      rating: "18+",
      isBookmarked: false,
      isTrending: false,
    },
    {
      title: "Same Answer II",
      thumbnail: {
        regular: {
          small: "./assets/thumbnails/same-answer-2/regular/small.jpg",
          medium: "./assets/thumbnails/same-answer-2/regular/medium.jpg",
          large: "./assets/thumbnails/same-answer-2/regular/large.jpg",
        },
      },
      year: 2017,
      category: "Movie",
      rating: "E",
      isBookmarked: false,
      isTrending: false,
    },
    {
      title: "Below Echo",
      thumbnail: {
        regular: {
          small: "./assets/thumbnails/below-echo/regular/small.jpg",
          medium: "./assets/thumbnails/below-echo/regular/medium.jpg",
          large: "./assets/thumbnails/below-echo/regular/large.jpg",
        },
      },
      year: 2016,
      category: "TV Series",
      rating: "PG",
      isBookmarked: false,
      isTrending: false,
    },
    {
      title: "The Rockies",
      thumbnail: {
        regular: {
          small: "./assets/thumbnails/the-rockies/regular/small.jpg",
          medium: "./assets/thumbnails/the-rockies/regular/medium.jpg",
          large: "./assets/thumbnails/the-rockies/regular/large.jpg",
        },
      },
      year: 2015,
      category: "TV Series",
      rating: "E",
      isBookmarked: true,
      isTrending: false,
    },
    {
      title: "Relentless",
      thumbnail: {
        regular: {
          small: "./assets/thumbnails/relentless/regular/small.jpg",
          medium: "./assets/thumbnails/relentless/regular/medium.jpg",
          large: "./assets/thumbnails/relentless/regular/large.jpg",
        },
      },
      year: 2017,
      category: "Movie",
      rating: "PG",
      isBookmarked: true,
      isTrending: false,
    },
    {
      title: "Community of Ours",
      thumbnail: {
        regular: {
          small: "./assets/thumbnails/community-of-ours/regular/small.jpg",
          medium: "./assets/thumbnails/community-of-ours/regular/medium.jpg",
          large: "./assets/thumbnails/community-of-ours/regular/large.jpg",
        },
      },
      year: 2018,
      category: "TV Series",
      rating: "18+",
      isBookmarked: false,
      isTrending: false,
    },
    {
      title: "Van Life",
      thumbnail: {
        regular: {
          small: "./assets/thumbnails/van-life/regular/small.jpg",
          medium: "./assets/thumbnails/van-life/regular/medium.jpg",
          large: "./assets/thumbnails/van-life/regular/large.jpg",
        },
      },
      year: 2015,
      category: "Movie",
      rating: "PG",
      isBookmarked: false,
      isTrending: false,
    },
    {
      title: "The Heiress",
      thumbnail: {
        regular: {
          small: "./assets/thumbnails/the-heiress/regular/small.jpg",
          medium: "./assets/thumbnails/the-heiress/regular/medium.jpg",
          large: "./assets/thumbnails/the-heiress/regular/large.jpg",
        },
      },
      year: 2021,
      category: "Movie",
      rating: "PG",
      isBookmarked: true,
      isTrending: false,
    },
    {
      title: "Off the Track",
      thumbnail: {
        regular: {
          small: "./assets/thumbnails/off-the-track/regular/small.jpg",
          medium: "./assets/thumbnails/off-the-track/regular/medium.jpg",
          large: "./assets/thumbnails/off-the-track/regular/large.jpg",
        },
      },
      year: 2017,
      category: "Movie",
      rating: "18+",
      isBookmarked: true,
      isTrending: false,
    },
    {
      title: "Whispering Hill",
      thumbnail: {
        regular: {
          small: "./assets/thumbnails/whispering-hill/regular/small.jpg",
          medium: "./assets/thumbnails/whispering-hill/regular/medium.jpg",
          large: "./assets/thumbnails/whispering-hill/regular/large.jpg",
        },
      },
      year: 2017,
      category: "Movie",
      rating: "E",
      isBookmarked: false,
      isTrending: false,
    },
    {
      title: "112",
      thumbnail: {
        regular: {
          small: "./assets/thumbnails/112/regular/small.jpg",
          medium: "./assets/thumbnails/112/regular/medium.jpg",
          large: "./assets/thumbnails/112/regular/large.jpg",
        },
      },
      year: 2013,
      category: "TV Series",
      rating: "PG",
      isBookmarked: false,
      isTrending: false,
    },
    {
      title: "Lone Heart",
      thumbnail: {
        regular: {
          small: "./assets/thumbnails/lone-heart/regular/small.jpg",
          medium: "./assets/thumbnails/lone-heart/regular/medium.jpg",
          large: "./assets/thumbnails/lone-heart/regular/large.jpg",
        },
      },
      year: 2017,
      category: "Movie",
      rating: "E",
      isBookmarked: true,
      isTrending: false,
    },
    {
      title: "Production Line",
      thumbnail: {
        regular: {
          small: "./assets/thumbnails/production-line/regular/small.jpg",
          medium: "./assets/thumbnails/production-line/regular/medium.jpg",
          large: "./assets/thumbnails/production-line/regular/large.jpg",
        },
      },
      year: 2018,
      category: "TV Series",
      rating: "PG",
      isBookmarked: false,
      isTrending: false,
    },
    {
      title: "Dogs",
      thumbnail: {
        regular: {
          small: "./assets/thumbnails/dogs/regular/small.jpg",
          medium: "./assets/thumbnails/dogs/regular/medium.jpg",
          large: "./assets/thumbnails/dogs/regular/large.jpg",
        },
      },
      year: 2016,
      category: "TV Series",
      rating: "E",
      isBookmarked: true,
      isTrending: false,
    },
    {
      title: "Asia in 24 Days",
      thumbnail: {
        regular: {
          small: "./assets/thumbnails/asia-in-24-days/regular/small.jpg",
          medium: "./assets/thumbnails/asia-in-24-days/regular/medium.jpg",
          large: "./assets/thumbnails/asia-in-24-days/regular/large.jpg",
        },
      },
      year: 2020,
      category: "TV Series",
      rating: "PG",
      isBookmarked: false,
      isTrending: false,
    },
    {
      title: "The Tasty Tour",
      thumbnail: {
        regular: {
          small: "./assets/thumbnails/the-tasty-tour/regular/small.jpg",
          medium: "./assets/thumbnails/the-tasty-tour/regular/medium.jpg",
          large: "./assets/thumbnails/the-tasty-tour/regular/large.jpg",
        },
      },
      year: 2016,
      category: "TV Series",
      rating: "PG",
      isBookmarked: false,
      isTrending: false,
    },
    {
      title: "Darker",
      thumbnail: {
        regular: {
          small: "./assets/thumbnails/darker/regular/small.jpg",
          medium: "./assets/thumbnails/darker/regular/medium.jpg",
          large: "./assets/thumbnails/darker/regular/large.jpg",
        },
      },
      year: 2017,
      category: "Movie",
      rating: "18+",
      isBookmarked: true,
      isTrending: false,
    },
    {
      title: "Unresolved Cases",
      thumbnail: {
        regular: {
          small: "./assets/thumbnails/unresolved-cases/regular/small.jpg",
          medium: "./assets/thumbnails/unresolved-cases/regular/medium.jpg",
          large: "./assets/thumbnails/unresolved-cases/regular/large.jpg",
        },
      },
      year: 2018,
      category: "TV Series",
      rating: "18+",
      isBookmarked: false,
      isTrending: false,
    },
    {
      title: "Mission: Saturn",
      thumbnail: {
        regular: {
          small: "./assets/thumbnails/mission-saturn/regular/small.jpg",
          medium: "./assets/thumbnails/mission-saturn/regular/medium.jpg",
          large: "./assets/thumbnails/mission-saturn/regular/large.jpg",
        },
      },
      year: 2017,
      category: "Movie",
      rating: "PG",
      isBookmarked: true,
      isTrending: false,
    },
  ],
  activePage: [
    {
      section: "home",
      active: true,
      icon: nav_home,
    },
    {
      section: "movies",
      active: false,
      icon: nav_movies,
    },
    {
      section: "tv_series",
      active: false,
      icon: nav_tv_series,
    },
    {
      section: "bookmark",
      active: false,
      icon: nav_bookmark,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_ACTIVE_PAGE":
      console.log(action.payload);

      //Getting the selected page
      const selectedPage = state.activePage.find(
        (selected) => selected.section === action.payload
      );

      const updatingSelectedPage = state.activePage.map((activePage) =>
        activePage.section === selectedPage.section
          ? { ...selectedPage, active: !selectedPage.active }
          : { ...activePage, active: false }
      );

      console.log("u", updatingSelectedPage);

      return {
        ...state,
        activePage: updatingSelectedPage,
      };
    case "FIRST_FORM_SUBMIT":
      console.log(action.payload);
      return {
        ...state,
        formData: action.payload,
        activePage: 2,
      };

    default:
      return state;
  }
}

function App() {
  const [{ movies, activePage }, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app_container bg-semi-dark h-screen w-screen lg:flex lg:flex-row">
      {/* NAVBAR SECTION */}
      <div className="navbar lg:h-[100vh] md:p-4 lg:w-[10%]">
        <div className="bg-light-dark flex flex-row justify-between items-center px-5 py-2 drop-shadow-md shadow-md md:rounded-lg md:py-3 lg:flex-col lg:h-full ">
          {/* LOGO SECTION */}
          <Logo />

          {/* NAVBAR SECTION */}
          <Navbar activePage={activePage} dispatch={dispatch} />

          {/* AVATAR SECTION */}
          <Avatar />
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
                <button className="p-2 flex items-center justify-center w-8 rounded-full bg-slate-400/25">
                  <img src={bookmark} alt="bookmark" />
                </button>
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

        <Trending movies={movies} />

        {/* RECOMMENDATION */}
        <div className="recommendation_container p-4">
          <h1 className="text-xl my-2 text-white font-thin">
            Recommended for you
          </h1>
          <div className="recommendation_list grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="recommendation_child outline">
              <div className="border my-2 bg-[url('assets/thumbnails/beyond-earth/trending/small.jpg')] h-[110px] w-full min-w-[160px] md:w-[220px] md:h-[140px] p-2 rounded-xl flex flex-col justify-between">
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
                    <div className="text-xs text-slate-300 font-thin">2019</div>
                    <span className="text-sm mx-2 text-slate-300 font-thin">
                      -
                    </span>
                    <span>
                      <img src={movie_icon} alt="movie_icon" />
                    </span>
                    <span className="text-xs mx-2 text-slate-300 font-thin">
                      Movie
                    </span>
                  </div>
                  <p className="text-white">Beyond Earth</p>
                </div>
              </div>
            </div>
            <div className="recommendation_child outline">
              <div className="border my-2 bg-[url('assets/thumbnails/beyond-earth/trending/small.jpg')] h-[110px] w-full min-w-[160px] md:w-[220px] md:h-[140px] p-2 rounded-xl flex flex-col justify-between">
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
                    <div className="text-xs text-slate-300 font-thin">2019</div>
                    <span className="text-sm mx-2 text-slate-300 font-thin">
                      -
                    </span>
                    <span>
                      <img src={movie_icon} alt="movie_icon" />
                    </span>
                    <span className="text-xs mx-2 text-slate-300 font-thin">
                      Movie
                    </span>
                  </div>
                  <p className="text-white">Beyond Earth</p>
                </div>
              </div>
            </div>
            <div className="recommendation_child outline">
              <div className="border my-2 bg-[url('assets/thumbnails/beyond-earth/trending/small.jpg')] h-[110px] w-full min-w-[160px] md:w-[220px] md:h-[140px] p-2 rounded-xl flex flex-col justify-between">
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
                    <div className="text-xs text-slate-300 font-thin">2019</div>
                    <span className="text-sm mx-2 text-slate-300 font-thin">
                      -
                    </span>
                    <span>
                      <img src={movie_icon} alt="movie_icon" />
                    </span>
                    <span className="text-xs mx-2 text-slate-300 font-thin">
                      Movie
                    </span>
                  </div>
                  <p className="text-white">Beyond Earth</p>
                </div>
              </div>
            </div>
            <div className="recommendation_child outline">
              <div className="border my-2 bg-[url('assets/thumbnails/beyond-earth/trending/small.jpg')] h-[110px] w-full min-w-[160px] md:w-[220px] md:h-[140px] p-2 rounded-xl flex flex-col justify-between">
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
                    <div className="text-xs text-slate-300 font-thin">2019</div>
                    <span className="text-sm mx-2 text-slate-300 font-thin">
                      -
                    </span>
                    <span>
                      <img src={movie_icon} alt="movie_icon" />
                    </span>
                    <span className="text-xs mx-2 text-slate-300 font-thin">
                      Movie
                    </span>
                  </div>
                  <p className="text-white">Beyond Earth</p>
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
