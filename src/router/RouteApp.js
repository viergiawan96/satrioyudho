import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { createBrowserHistory as history } from "history";
import Home from "../pages/Home";
import Home1 from "../assets/home1.png";
import Home2 from "../assets/home2.png";
import Menu1 from "../assets/menu1.png";
import Menu2 from "../assets/menu2.png";
import Menu from "../pages/Menu";

function RouteApp() {
  const location = useLocation();
  const [locations, setLocations] = useState("");

  useEffect(() => {
    setLocations(location.pathname);
  }, [location]);

  return (
    <div className="container mx-auto max-w-screen-md relative bg-whitesmoke h-screen">
      <Router history={history}>
        <div className="fixed max-w-screen-md bg-white flex flex-row z-20 bottom-0 w-full py-6">
          <div className="flex-1">
            <Link to="/home" onClick={() => setLocations("/home")}>
              <div className="font-semibold flex flex-col justify-center items-center cursor-pointer">
                <img
                  src={locations === "/home" ? Home1 : Home2}
                  alt="home"
                  className="w-12"
                />
                <h1
                  className={`text-black ${
                    locations === "/home" ? "opacity-100" : "opacity-25"
                  }`}
                >
                  Home
                </h1>
              </div>
            </Link>
          </div>
          <div className="flex-1">
            <Link to="/menu" onClick={() => setLocations("/menu")}>
              <div className="font-semibold flex flex-col justify-center items-center cursor-pointer">
                <img
                  src={locations === "/menu" ? Menu1 : Menu2}
                  alt="home"
                  className="w-12"
                />
                <h1
                  className={`text-black ${
                    locations === "/menu" ? "opacity-100" : "opacity-25"
                  }`}
                >
                  Menu
                </h1>
              </div>
            </Link>
          </div>
        </div>
        <Switch>
          <Route path="/home" component={Home} exact />
          <Route path="/menu" component={Menu} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default RouteApp;
