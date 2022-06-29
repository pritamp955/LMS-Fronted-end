import React from "react";
import { NavLink } from "react-router-dom";

export default function TopTiles() {
  return (
    <div className="row tile_count">
      <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
        <NavLink to="/member/list">
          <span className="count_top ">
            <i className="fa fa-user"></i> Members
          </span>
        </NavLink>
        {/* <div className="count green" th:text="${topTiles.totalMembers}"></div> */}
      </div>
      <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
        <span className="count_top ">
          <i className="fa fa-user"></i> Parents
        </span>
        {/* <div className="count" th:text="${topTiles.totalParents}"></div> */}
      </div>
      <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
        <span className="count_top ">
          <i className="fa fa-user"></i> Students
        </span>
        {/* <div className="count" th:text="${topTiles.totalStudents}"></div> */}
      </div>
      <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
        <NavLink to="/categories/list">
          <span className="count_top">
            <i className="fa fa-sitemap"></i> Categories
          </span>
        </NavLink>
        {/* <div className="count green" th:text="${topTiles.totalCategories}"></div> */}
      </div>
      <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
        <NavLink to="/book/list">
          <span className="count_top ">
            <i className="fa fa-book"></i> Books
          </span>
        </NavLink>
        {/* <div className="count" th:text="${topTiles.totalBooks}"></div> */}
      </div>
      <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
        <NavLink to="/issue/list">
          <span className="count_top">
            <i className="fa fa-cart-arrow-down"></i> Books Issued
          </span>
        </NavLink>
        {/* <div className="count green" th:text="${topTiles.totalIssuedBooks}"></div> */}
      </div>
    </div>
  );
}
