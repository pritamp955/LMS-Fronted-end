import React from "react";

export default function TopMenu() {
  return null;

  return (
    <div className="top_nav">
      <div className="nav_menu">
        <nav>
          <div className="nav toggle">
            <a id="menu_toggle">
              <i className="fa fa-bars"></i>
            </a>
          </div>

          <ul className="nav navbar-nav navbar-right">
            <li className="">
              {/* <a
                href="javascript:;"
                className="user-profile dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="false"
              > */}
                {/* <span th:text="${session.loggedInUserName}"></span> */}
                {/* <span className=" fa fa-angle-down"></span>
              </a> */}
              <ul className="dropdown-menu dropdown-usermenu pull-right">
                <li>
                  <a href="/logout">
                    <i className="fa fa-sign-out pull-right"></i> Log Out
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
