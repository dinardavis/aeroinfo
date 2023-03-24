import { useParams } from "react-router-dom";


export default function AirportDetail() {

  const { airportCode } = useParams();


  return (
    <h1>Airport Name - ({airportCode.toUpperCase()})</h1>
  )
}