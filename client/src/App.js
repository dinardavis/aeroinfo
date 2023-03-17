import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomeLayout from "./components/HomeLayout";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Global from "./pages/map-regions/Global";
import NorthAmerica from "./pages/map-regions/NorthAmerica";
import CentralSouthAmerica from "./pages/map-regions/CentralSouthAmerica";
import Europe from "./pages/map-regions/Europe";
import AsiaPacific from "./pages/map-regions/AsiaPacific";
import MiddleEast from "./pages/map-regions/MiddleEast";
import Africa from "./pages/map-regions/Africa";
import AirportDetail from "./components/AirportDetail";



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<HomeLayout />}>
            <Route index element={<Global />} />
            {/* <Route path="north-america" element={<NorthAmerica />} />
            <Route path="central-south-america" element={<CentralSouthAmerica />} />
            <Route path="europe" element={<Europe />} />
            <Route path="asia-pacific" element={<AsiaPacific />} />
            <Route path="middle-east" element={<MiddleEast />} />
            <Route path="africa" element={<Africa />} />  */}
            <Route path=":airportCode" element={<AirportDetail />} />
          </Route>
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
