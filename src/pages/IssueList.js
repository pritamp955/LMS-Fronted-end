import React from "react";
import SideMenu from "../components/SideMenu";
import TopMenu from "../components/TopMenu";
import Footer from "../components/Footer";

export default function IssueList() {
  return (
    <body className="nav-md">
      <div className="container body">
        <div className="main_container">
          <SideMenu />
          <TopMenu />

          <div className="right_col" role="main">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="x_panel">
                <div className="x_title">
                  <h2>List of Issues</h2>
                  <div className="clearfix"></div>
                </div>
                <div className="x_content">
                  <table
                    id="datatable"
                    className="table table-striped table-bordered"
                  >
                    <thead>
                      <tr>
                        <th>Member</th>
                        <th>Books</th>
                        <th style="width: 100px;">IssueDate</th>
                        <th style="width: 50px;">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <tr th:each="i : ${issues}">
                        <td th:text="${i.member.firstName + ' ' + i.member.middleName + ' ' + i.member.lastName}"></td>
                        <td>
                          <ul th:id="${'issue_' + i.id}">
                            <th:block th:each="ib : ${i.issuedBooks}">
                              <li
                                th:if="${ib.returned==0}"
                                th:text="${ib.book.title}"
                                th:data-id="${ib.id}"
                              ></li>
                            </th:block>
                          </ul>
                        </td>
                        <td th:text="${#dates.format(i.issueDate, 'dd-MMM-yyyy')}"></td>
                        <td>
                          <a
                            href="javascript:void(0);"
                            title="Return book(s)"
                            th:onClick="'returnBook(' + ${i.id} + ')'"
                          >
                            <i className="fa fa-undo"></i>
                          </a>
                        </td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade return-book-modal"
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-md">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <h4 className="modal-title">Return Book(s)</h4>
                </div>
                <div className="modal-body">
                  <table id="returnBookTable" className="table">
                    <thead>
                      <tr>
                        <th style="width: 5px;">
                          <input
                            type="checkbox"
                            id="select-all"
                            onClick="sellectAll()"
                            style="margin-top: 5px;"
                          />
                        </th>
                        <th style="padding-bottom: 10px; padding-left: 0px">
                          Select All
                        </th>
                      </tr>
                    </thead>
                  </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick="returnBookConfirm();"
                  >
                    Return Selected
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </body>
  );
}
