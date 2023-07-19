import nav_bookmark from "./assets/icon-nav-bookmark.svg";
import nav_home from "./assets/icon-nav-home.svg";
import nav_movies from "./assets/icon-nav-movies.svg";
import nav_tv_series from "./assets/icon-nav-tv-series.svg";
import entertainment_logo from "./assets/logo.svg";
import avatar from "./assets/image-avatar.png";

function App() {
  return (
    <div className="bg-semi-dark h-screen w-screen">
      <div className="main_container h-[100vh] bg-semi-dark flex flex-col lg:flex-row lg:w-full">
        {/* NAVBAR SECTION */}
        <div className="navbar h-full lg:max-h-[100vh] md:p-4 lg:w-1/12 outline">
          <div className="bg-light-dark flex flex-row lg:justify-center items-center px-5 py-2 drop-shadow-md shadow-md md:rounded-lg md:py-3 lg:flex-col lg:h-full ">
            <div className="mr-4 lg:mr-0 lg:my-5">
              <img src={entertainment_logo} alt="" />
            </div>
            <div className="flex flex-row lg:flex-col justify-between flex-grow">
              <div className="navbar_container flex flex-row lg:flex-col justify-around items-center w-1/2 lg:w-full lg:h-1/3  ">
                <img src={nav_bookmark} alt="bookmark" />
                <img src={nav_home} alt="home" />
                <img src={nav_movies} alt="movies" />
                <img src={nav_tv_series} alt="tv_series" />
              </div>
              <div>
                <img
                  className="h-8 border rounded-full border-white drop-shadow-md"
                  src={avatar}
                  alt="avatar"
                />
              </div>
            </div>
          </div>
        </div>
        {/* MAIN SECTION */}
        {/* <div className="main h-full lg:max-h-[100vh] lg:w-full m-3 outline text-white">
          hello
        </div> */}
        <div>
          <div className="text-white outline-white outline h-screen">hello</div>
          <div className="text-white outline-white outline h-screen bg-red-200">
            hello
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
