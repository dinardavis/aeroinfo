import AirportResults from "../../components/AirportResults";
import FrequentlyViewed from "../../components/FrequentlyViewed";

export default function Global() {

  return (
    <div>
       <div className="home-content">
        <FrequentlyViewed /> 
        <div className="search-results">
          <h1>Global Search Results</h1>
          <AirportResults />
        </div>
      </div>
    </div>
  
  )
}