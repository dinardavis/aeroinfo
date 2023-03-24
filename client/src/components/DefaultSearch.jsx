import React from "react";
import FrequentlyViewed from "./FrequentlyViewed";
import AirportResults from "../components/AirportResults";

export default function DefaultSearch(props) {

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