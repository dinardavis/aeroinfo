import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {

  return (
    <div className="main-container">
      <Header />
      <main className="main-content">   
        <Outlet />
      </main>
      <Footer />
    </div>
   
  )
}
