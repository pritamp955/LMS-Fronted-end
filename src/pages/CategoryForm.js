import React from "react";
import SideMenu from "../components/SideMenu";
import TopMenu from "../components/TopMenu";
import Footer from "../components/Footer";

export default function CategoryForm() {
  return (
    <main className="nav-md">
      <div className="container body">
        <div className="main_container">
          <SideMenu />
          <TopMenu />

          <div className="right_col" role="main">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="x_panel">
                  <div className="x_title">
                    {/* <h2 th:if="${category.id==null}">Add New Category</h2>
                    <h2 th:if="${category.id!=null}">Edit Category Data</h2> */}
                    <div className="clearfix"></div>
                  </div>
                  <div className="x_content">
                    <div
                      className="alert alert-success alert-dismissible fade in"
                      role="alert"
                      // th:if="${successMsg}"
                    >
                      <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                      {/* <span th:text="*{successMsg}"></span> */}
                    </div>
                    <br />
                    <form
                      // th:action="@{/category/save}"
                      // method="post"
                      // th:object="${category}"
                      className="form-horizontal form-label-left"
                    >
                      <div className="form-group">
                        <label
                          className="control-label col-md-3 col-sm-3 col-xs-12"
                          for="first-name"
                        >
                          Category Name <span className="required">*</span>
                        </label>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                          {/* <input type="text" th:field="*{name}" className="form-control col-md-7 col-xs-12"> */}
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12 mt-5">
                          <span
                            // th:if="${#fields.hasErrors('name')}"
                            // th:errors="*{name}"
                          ></span>
                        </div>
                      </div>

                      <div className="form-group">
                        <label
                          className="control-label col-md-3 col-sm-3 col-xs-12"
                          for="first-name"
                        >
                          Short Name <span className="required">*</span>
                        </label>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                          {/* <input type="text" th:field="*{shortName}" className="form-control col-md-7 col-xs-12" placeholder="e.g: ENG"> */}
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12 mt-5">
                          <span
                            // th:if="${#fields.hasErrors('shortName')}"
                            // th:errors="*{shortName}"
                          ></span>
                        </div>
                      </div>

                      <div className="form-group">
                        <label
                          className="control-label col-md-3 col-sm-3 col-xs-12"
                          for="first-name"
                        >
                          Notes{" "}
                        </label>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                          <textarea
                            className="form-control col-md-7 col-xs-12"
                            rows="3"
                            // th:field="*{notes}"
                          ></textarea>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12 mt-5">
                          <span
                            // th:if="${#fields.hasErrors('notes')}"
                            // th:errors="*{notes}"
                          ></span>
                        </div>
                      </div>

                      <input
                        type="hidden"
                        // th:if="${id!=null}"
                        // th:field="*{id}"
                      />
                      <input
                        type="hidden"
                        name="createDate"
                        id="createDate"
                        // th:value="${category.createDate}?${#dates.format(category.createDate, 'dd-MMM-yyyy')}:${#dates.format(#dates.createNow(), 'dd-MMM-yyyy')}"
                      />

                      <div className="ln_solid"></div>
                      <div className="form-group">
                        <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                          {/* <th:block th:if="${id==null}">
                            <button className="btn btn-primary" type="reset">
                              Reset
                            </button>
                          </th:block> */}
                          {/* <th:block th:if="${id!=null}">
                            <button
                              className="btn btn-primary"
                              type="button"
                              id="gotoListBtn"
                            >
                              Go to list page
                            </button>
                          </th:block> */}
                          <button type="submit" className="btn btn-success">
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </main>
  );
}
