import React, { useState } from "react";
// import { Link } from "react-router-dom";

export default function SideMenu() {
  const [showcategory, setshowcategory] = useState(false);

  return (
    <div className="col-md-3 left_col">
      <div className="left_col scroll-view">
        <div className="navbar nav_title" style={{ border: 0 }}>
          <a href="/">
            <i className="fa fa-paw"></i>
            <span>Spark LMS</span>
          </a>
        </div>

        <div className="clearfix"></div>

        <br />

        {/* <!-- sidebar menu --> */}
        <div
          id="sidebar-menu"
          className="main_menu_side hidden-print main_menu"
        >
          <div className="menu_section">
            <ul className="nav side-menu">
              <li>
                <a href="/">
                  <i className="fa fa-home"></i>Dashboard
                </a>
              </li>
              <li>
                <a>
                  <i className="fa fa-user"></i> Members{" "}
                  <span className="fa fa-chevron-down"></span>
                </a>
                <ul className="nav child_menu">
                  <li>
                    <a href="/member/add">Add New</a>
                  </li>
                  <li>
                    <a href="/member/list">List</a>
                  </li>
                </ul>
              </li>

              <li>
                <a onClick={() => setshowcategory((cur) => !cur)}>
                  <i className="fa fa-sitemap"></i> Categories{" "}
                  <span className="fa fa-chevron-down"></span>
                </a>
                
                <Submenu show={showcategory} viewFor="category" />
              </li>

              <li>
                <a>
                  <i className="fa fa-book"></i> Books{" "}
                  <span className="fa fa-chevron-down"></span>
                </a>
                <ul className="nav child_menu">
                  <li>
                    <a href="/book/add">Add New</a>
                  </li>
                  <li>
                    <a href="/book/list">List</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>
                  <i className="fa fa-cart-arrow-down"></i> Book Issue{" "}
                  <span className="fa fa-chevron-down"></span>
                </a>
                <ul className="nav child_menu">
                  <li>
                    <a href="/issue/new">Issue New</a>
                  </li>
                  <li>
                    <a href="/issue/list">List</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- /sidebar menu --> */}
      </div>
    </div>
  );
}

const Submenu = ({ show, viewFor }) => {
  if (!show) return null;

  return (
    <ul className="nav" style={{ display: "flex", flexDirection: "column" }}>
      <li>
        <a href={`/${viewFor}/add`}>Add New</a>
      </li>
      <li>
        <a href={`/${viewFor}/list`}>List</a>
      </li>
    </ul>
  );
};
