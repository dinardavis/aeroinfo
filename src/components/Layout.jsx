import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {

  return (
    <>
      <Header />
      <main className="main-content">   
        <Outlet />
      </main>
      <Footer />
    </>
   
  )
}
