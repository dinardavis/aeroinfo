
import { NavLink, Outlet } from "react-router-dom"


export default function HomeLayout() {

  return (
    <section className="home-layout">
      <nav className="home-nav">
        <NavLink 
          to="/home"
          end
          className={({isActive}) => isActive ? "active-region" : null } 
        >
          Global 
        </NavLink>
          
        <NavLink 
          to="north-america"
          className={({isActive}) => isActive ? "active-region" : null }
        >
          North America 
        </NavLink>
          
        <NavLink 
          to="central-south-america"
          className={({isActive}) => isActive ? "active-region" : null }
        >
          Central & South America  
        </NavLink>
          
        <NavLink 
          to="europe"
          className={({isActive}) => isActive ? "active-region" : null } 
        >
          Europe 
        </NavLink>
          
        <NavLink 
          to="asia-pacific"
          className={({isActive}) => isActive ? "active-region" : null } 
        >
          Asia Pacific 
        </NavLink>
          
        <NavLink 
          to="middle-east"
          className={({isActive}) => isActive ? "active-region" : null } 
        >
          Middle East 
        </NavLink>
          
        <NavLink 
          to="africa"
          className={({isActive}) => isActive ? "active-region" : null } 
        >
          Africa 
        </NavLink>
          
      </nav>
      <div className="home-content">
        <Outlet />
      </div>
    </section>
  )
}