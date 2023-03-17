import React from "react";
import AirportResults from "../../components/AirportResults";
import FrequentlyViewed from "../../components/FrequentlyViewed";

export default function Global(props) {

  const [data, setData] = React.useState({});

  React.useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  console.log(data.message)

  return (
    <div>
       <div className="home-content">
        <FrequentlyViewed /> 
        <div className="search-results">
          <h1>Global Search Results</h1>
          <h1>{!data ? "Loading..." : data.message}</h1>
          <AirportResults />
        </div>
      </div>
    </div>
  
  )
}