import React from "react";
import SideMenu from "../components/SideMenu";
import TopMenu from "../components/TopMenu";
import Footer from "../components/Footer";

export default function MemberList() {
  return (
    <main className="nav-md">
      <div className="container body">
        <div className="main_container">
          <SideMenu />
          <TopMenu />

          <div className="right_col" role="main">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="x_panel">
                <div className="x_title">
                  <h2>List of Members</h2>
                  <div className="clearfix"></div>
                </div>
                <div className="x_content">
                  <div
                    className="alert alert-success alert-dismissible fade in"
                    role="alert"
                    // th:if="${memberInUse}"
                  >
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                    <span>Member is in use, cannot be deleted.</span>
                  </div>

                  <table
                    id="datatable"
                    className="table table-striped table-bordered"
                  >
                    <thead>
                      <tr>
                        <th>Full Name</th>
                        <th style="width: 100px;">Type</th>
                        <th style="width: 100px;">Gender</th>
                        <th style="width: 50px;">Age</th>
                        <th style="width: 90px;">Joining Date</th>
                        <th style="width: 50px;">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <tr th:each="m : ${members}">
                        <td th:text="${m.firstName + ' ' + m.middleName + ' ' + m.lastName}"></td>
                        <td th:text="${m.type}"></td>
                        <td th:text="${m.gender}"></td>
                        <td th:text="${#dates.year(#dates.createToday()) - #dates.year(m.dateOfBirth)}"></td>
                        <td th:text="${#dates.format(m.joiningDate, 'dd-MMM-yyyy')}"></td>
                        <td>
                          <a th:href="@{'/member/edit/' + ${m.id}}">
                            <i className="fa fa-edit"></i>
                          </a>
                          <a
                            data-toggle="modal"
                            data-target=".remove-member-modal"
                            onClick="removeMemberDialog(this);"
                            th:data-member-id="${m.id}"
                            th:data-member-name="${m.firstName + ' ' + m.middleName + ' ' + m.lastName}"
                            style="cursor: pointer;"
                          >
                            <i className="fa fa-remove"></i>
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
            className="modal fade remove-member-modal"
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
                  <h4 className="modal-title">Remove Member</h4>
                </div>
                <div className="modal-body">
                  <p>
                    Are you sure you want to remove <br />
                    <strong>
                      <span id="member-name"></span>
                    </strong>
                    ?
                  </p>
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
                    onClick="removeMember();"
                  >
                    Yes!
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
