import React from "react";
import SideMenu from "../components/SideMenu";
import TopMenu from "../components/TopMenu";
import Footer from "../components/Footer";

export default function IssueForm() {
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
                    <h2>Issue Books</h2>
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
                        <span aria-hidden="true">x</span>
                      </button>
                      {/* <span th:text="*{successMsg}"></span> */}
                    </div>

                    <div className="row">
                      <div className="col-xs-12">
                        <h3>
                          <span className="pull-right">
                            <b>Issue Date:</b>{" "}
                            {/* <span th:text="${#dates.format(issueDate!=null?issueDate:#dates.createNow() , 'dd-MMM-yyyy')}"></span> */}
                          </span>
                        </h3>
                      </div>
                    </div>
                    <br />
                    <form className="form-horizontal form-label-left">
                      <div className="row">
                        <div className="col-sm-5">
                          <div className="form-group">
                            <label className="control-label col-md-4 col-sm-4 col-xs-12">
                              Member Type
                            </label>
                            <div className="col-md-8 col-sm-8 col-xs-12">
                              <select className="form-control" id="memberTypeSel">
                                <option value="">
                                  -- Select Member Type --
                                </option>
                                {/* <option
                                  th:each="mt : ${memberTypes}"
                                  th:value="${mt}"
                                  th:text="${mt}"
                                ></option> */}
                              </select>
                            </div>
                          </div>

                          <div className="form-group">
                            <label className="control-label col-md-4 col-sm-4 col-xs-12">
                              Member
                            </label>
                            <div className="col-md-8 col-sm-8 col-xs-12">
                              <select className="form-control" id="memberSel">
                                <option value="">-- Select Member --</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-7" style="padding-left: 0px;">
                          <div className="form-group">
                            <label className="control-label col-md-3 col-sm-3 col-xs-12">
                              Category
                            </label>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <select className="form-control" id="categorySel">
                                <option value="">-- Select Category --</option>
                                {/* <option
                                  th:each="c : ${categories}"
                                  th:value="${c.id}"
                                  th:text="${c.name}"
                                ></option> */}
                              </select>
                            </div>
                            <div className="col-md-3 col-sm-3 col-xs-3">
                              <button
                                type="button"
                                style="float:right;"
                                id="addBookBtn"
                                className="btn"
                              >
                                Add Book
                              </button>
                            </div>
                          </div>

                          <div className="form-group">
                            <label className="control-label col-md-3 col-sm-3 col-xs-12">
                              Book
                            </label>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <select className="form-control" id="booksSel">
                                <option value="">-- Select Book --</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div
                          className="col-sm-12 mt-10"
                          style="border: 1px solid #E6E9ED; min-height: 200px;"
                        >
                          <table
                            id="issueBooksTable"
                            className="table table-striped"
                          >
                            <thead>
                              <tr>
                                <th style="width: 50px;">#</th>
                                <th style="width: 120px;">Tag</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th style="width: 50px;">Action</th>
                              </tr>
                            </thead>
                            <tbody></tbody>
                          </table>
                        </div>
                      </div>
                      <div className="row mt-10">
                        <div className="col-sm-12">
                          <button
                            type="button"
                            style="float:right; width: 150px;"
                            id="saveBtn"
                            className="btn btn-success"
                          >
                            Issue Book(s)
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade errors-modal"
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-sm">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">x</span>
                  </button>
                  <h4 className="modal-title">Error(s)</h4>
                </div>
                <div className="modal-body"></div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Ok
                  </button>
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
