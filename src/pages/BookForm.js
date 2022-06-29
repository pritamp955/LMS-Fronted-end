import React from "react";
import Footer from "../components/Footer";
import SideMenu from "../components/SideMenu";
import TopMenu from "../components/TopMenu";

export default function BookForm() {
  return (
    <main className="nav-md">
      <div className="container body">
        <div className="main_container">
          <SideMenu />
          <TopMenu />

          {/* <!-- page content --> */}
          <div className="right_col" role="main">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="x_panel">
                  <div className="x_title">
                    {/* <h2 th:if="${book.id==null}">Add New Book</h2>
                    <h2 th:if="${book.id!=null}">Edit Book Data</h2> */}
                    <div className="clearfix"></div>
                  </div>
                  <div className="x_content">
                    <div
                      className="alert alert-success alert-dismissible fade in"
                      role="alert"
                      //   th:if="${successMsg}"
                    >
                      <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">x</span>
                      </button>
                      {/* <span th:text="*{successMsg}"></span> */}
                    </div>
                    <br />
                    <form
                    //   th:action="@{/book/save}"
                    //   method="post"
                    //   th:object="${book}"
                      className="form-horizontal form-label-left"
                    >
                      <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12">
                          Category <span className="required">*</span>
                        </label>
                        <div className="col-md-3 col-sm-3 col-xs-12">
                          <select
                            // th:field="*{category}"
                            className="form-control"
                            id="category-selectbox"
                          >
                            {/* <option
                              th:each="c : ${categories}"
                              th:value="${c.id}"
                              th:text="${c.name}"
                              th:short-name="${c.shortName}"
                            ></option> */}
                          </select>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12 mt-5">
                          {/* <span
                            th:if="${#fields.hasErrors('category')}"
                            th:errors="*{category}"
                          ></span> */}
                        </div>
                      </div>

                      <div className="form-group">
                        <label
                          className="control-label col-md-3 col-sm-3 col-xs-12"
                          for="first-name"
                        >
                          Tag <span className="required">*</span>
                        </label>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                          {/* <input type="text" th:field="*{tag}" className="form-control col-md-7 col-xs-12"> */}
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12 mt-5">
                          {/* <span
                            th:if="${#fields.hasErrors('tag')}"
                            th:errors="*{tag}"
                          ></span> */}
                        </div>
                      </div>

                      <div className="form-group">
                        <label
                          className="control-label col-md-3 col-sm-3 col-xs-12"
                          for="first-name"
                        >
                          Book Title <span className="required">*</span>
                        </label>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          {/* <input type="text" th:field="*{title}" className="form-control col-md-7 col-xs-12"> */}
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12 mt-5">
                          {/* <span
                            th:if="${#fields.hasErrors('title')}"
                            th:errors="*{title}"
                          ></span> */}
                        </div>
                      </div>

                      <div className="form-group">
                        <label
                          className="control-label col-md-3 col-sm-3 col-xs-12"
                          for="first-name"
                        >
                          Authors <span className="required">*</span>
                        </label>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                          {/* <input type="text" th:field="*{authors}" className="form-control col-md-7 col-xs-12"> */}
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12 mt-5">
                          {/* <span
                            th:if="${#fields.hasErrors('authors')}"
                            th:errors="*{authors}"
                          ></span> */}
                        </div>
                      </div>

                      <div className="form-group">
                        <label
                          className="control-label col-md-3 col-sm-3 col-xs-12"
                          for="first-name"
                        >
                          Publisher{" "}
                        </label>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                          {/* <input type="text" th:field="*{publisher}" className="form-control col-md-7 col-xs-12"> */}
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12 mt-5">
                          {/* <span
                            th:if="${#fields.hasErrors('publisher')}"
                            th:errors="*{publisher}"
                          ></span> */}
                        </div>
                      </div>

                      <div className="form-group">
                        <label
                          className="control-label col-md-3 col-sm-3 col-xs-12"
                          for="first-name"
                        >
                          ISBN{" "}
                        </label>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                          {/* <input type="text" th:field="*{isbn}" className="form-control col-md-7 col-xs-12"> */}
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12 mt-5">
                          {/* <span
                            th:if="${#fields.hasErrors('isbn')}"
                            th:errors="*{isbn}"
                          ></span> */}
                        </div>
                      </div>

                      {/* <input type="hidden" th:if="${id!=null}" th:field="*{id}" /> */}
                      {/* <input type="hidden" th:field="*{status}" /> */}
                      {/* <input type="hidden" name="createDate" id="createDate" th:value="${book.createDate}?${#dates.format(book.createDate, 'dd-MMM-yyyy')}:${#dates.format(#dates.createNow(), 'dd-MMM-yyyy')}" /> */}

                      <div className="ln_solid"></div>
                      <div className="form-group">
                        <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                          {/* <th:block th:if="${id==null}">
                            <button
                              className="btn btn-primary"
                              type="reset"
                              id="resetBtn"
                            >
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
          {/* <!-- /page content --> */}

          <Footer />
        </div>
      </div>
    </main>
  );
}
