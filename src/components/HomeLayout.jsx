
import { Link, Outlet } from "react-router-dom"
import FrequentlyViewed from "./FrequentlyViewed"

export default function HomeLayout() {

  return (
    <section className="home-layout">
      <nav className="home-nav">
        <Link to="/home">Global</Link>
        <Link to="north-america">North America</Link>
        <Link to="central-south-america">Central & South America</Link>
        <Link to="europe">Europe</Link>
        <Link to="asia-pacific">Asia Pacific</Link>
        <Link to="middle-east">Middle East</Link>
        <Link to="africa">Africa</Link>
      </nav>
      <div className="home-content">
        <FrequentlyViewed /> 
        <Outlet />
      </div>
    </section>
  )
}