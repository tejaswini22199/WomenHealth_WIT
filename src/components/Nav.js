import React from "react";
import '../tailwind.css'
import '../tailwind.min.css';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import Fitness from "./Fitness";
import PeriodTracker from "./PeriodTracker";
import Team from './Team';
import Home from './Home';
import NutritionAnalysis from './NutritionAnalysis'
const Nav=({ fixed }) =>{
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
     <BrowserRouter>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-blue-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
              href=""
            >WomenHealth@360
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2"><Link className="nav-link" to="/">Home</Link></span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2"><Link className="nav-link" to="/nutrition">Nutriget</Link></span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2"><Link className="nav-link" to="/periodtracker">HealthSaviour</Link></span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2"><Link className="nav-link" to="/gym">SpecializedGym</Link></span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                 <span className="ml-2"><Link className="nav-link" to="/team">AboutTeam</Link></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <Switch>
      <Route exact path="/">
          <Home/>
          </Route>
      </Switch> */}
       <Switch>
        <Route exact path="/">
          <Home/>
          </Route>
          <Route exact path="/nutrition">
          <NutritionAnalysis/>
        </Route>
         <Route exact path="/periodtracker">
          <PeriodTracker/>
        </Route> 
         <Route exact path="/gym">
          <Fitness/>
        </Route>
        <Route exact path="/team">
          <Team/>
        </Route> 
      </Switch> 
      </BrowserRouter>
    </>
  );
}
export default Nav