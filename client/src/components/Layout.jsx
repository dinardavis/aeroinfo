import Header from "./Header";
import Footer from "./Footer";
import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {

  return (
    <div className="main-container">
      <Header />
      <main className="main-content"> 
        <nav className="home-nav">
          <NavLink to="search/all-results" className={({isActive}) => isActive ? "active-region" : null }>Global</NavLink> 
          <NavLink to="search/north-america" className={({isActive}) => isActive ? "active-region" : null }>North America</NavLink> 
          <NavLink to="search/central-south-america" className={({isActive}) => isActive ? "active-region" : null }>Central & South America</NavLink> 
          <NavLink to="search/europe" className={({isActive}) => isActive ? "active-region" : null }>Europe</NavLink> 
          <NavLink to="search/asia-pacific" className={({isActive}) => isActive ? "active-region" : null }>Asia Pacific</NavLink> 
          <NavLink to="search/middle-east" className={({isActive}) => isActive ? "active-region" : null }>Middle East</NavLink> 
          <NavLink to="search/africa" className={({isActive}) => isActive ? "active-region" : null }>Africa</NavLink>      
        </nav>
        <div className="home-content">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
   
  )
}

