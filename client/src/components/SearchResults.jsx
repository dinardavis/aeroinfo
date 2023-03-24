import React from "react";
import { Outlet, useParams } from "react-router-dom";
import FrequentlyViewed from "./FrequentlyViewed";

export default function SearchResults() {

  const {region } = useParams();

  
  return (
    <div>
       <div className="home-content">
        <FrequentlyViewed /> 
        <div className="search-results">
          <h1>Results for {region}</h1>
          <Outlet />
        </div>
      </div>
    </div>
  
  )
}