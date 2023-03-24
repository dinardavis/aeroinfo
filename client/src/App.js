import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import DefaultSearch from "./components/DefaultSearch";
import SearchResults from "./components/SearchResults";
import AirportResults from "./components/AirportResults";
import AirportDetail from "./components/AirportDetail";



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DefaultSearch />} />
          <Route path=":airportCode" element={<AirportDetail />} />
          <Route path="search" element={<SearchResults />}>
            <Route path=":region" element={<AirportResults />} />
          </Route>
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
