import { useParams } from "react-router-dom";


export default function AirportDetail() {

  const params = useParams();

  console.log(params)

  return (
    <h1>Airport Detail Page</h1>
  )
}