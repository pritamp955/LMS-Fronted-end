import React from "react";
import Footer from "../components/Footer";
import SideMenu from "../components/SideMenu";
import TopMenu from "../components/TopMenu";
import TopTiles from "../components/TopTiles";

export default function Home() {
  return (
    <main className="nav-md">
      <div className="container body">
        <div className="main_container">
          <SideMenu />
          <TopMenu />

          {/* <!-- page content --> */}
          <div className="right_col" role="main">
            <TopTiles />
          </div>
          {/* <!-- /page content --> */}

          <Footer />
        </div>
      </div>
    </main>
  );
}
