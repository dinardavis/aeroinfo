import React from "react";

export default function AirportResults() {

  const airportData = [
    {
      "code": "AAA",
      "lat": "-17.3595",
      "lon": "-145.494",
      "name": "Anaa Airport",
      "city": "Anaa",
      "state": "Tuamotu-Gambier",
      "country": "French Polynesia",
      "woeid": "12512819",
      "tz": "Pacific Midway",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4921",
      "elev": "7",
      "icao": "NTGA",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "AAA",
      "lat": "-17.3595",
      "lon": "-145.494",
      "name": "Anaa Airport",
      "city": "Anaa",
      "state": "Tuamotu-Gambier",
      "country": "French Polynesia",
      "woeid": "12512819",
      "tz": "Pacific Midway",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4921",
      "elev": "7",
      "icao": "NTGA",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "AAA",
      "lat": "-17.3595",
      "lon": "-145.494",
      "name": "Anaa Airport",
      "city": "Anaa",
      "state": "Tuamotu-Gambier",
      "country": "French Polynesia",
      "woeid": "12512819",
      "tz": "Pacific Midway",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4921",
      "elev": "7",
      "icao": "NTGA",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "AAA",
      "lat": "-17.3595",
      "lon": "-145.494",
      "name": "Anaa Airport",
      "city": "Anaa",
      "state": "Tuamotu-Gambier",
      "country": "French Polynesia",
      "woeid": "12512819",
      "tz": "Pacific Midway",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4921",
      "elev": "7",
      "icao": "NTGA",
      "direct_flights": "2",
      "carriers": "1"
    },
    {
      "code": "AAA",
      "lat": "-17.3595",
      "lon": "-145.494",
      "name": "Anaa Airport",
      "city": "Anaa",
      "state": "Tuamotu-Gambier",
      "country": "French Polynesia",
      "woeid": "12512819",
      "tz": "Pacific Midway",
      "phone": "",
      "type": "Airports",
      "email": "",
      "url": "",
      "runway_length": "4921",
      "elev": "7",
      "icao": "NTGA",
      "direct_flights": "2",
      "carriers": "1"
    },

  ]

  const airportResults = airportData.map((airport) => {
    return (
      <div className="search-result-card">
        <h1>{`${airport.name} (${airport.code})`}</h1>
        <h2>{`${airport.city}, ${airport.state}`}</h2>
        <h2>{`${airport.country}`}</h2>
      </div>
    )
  })

  return (
    airportResults
  )
}