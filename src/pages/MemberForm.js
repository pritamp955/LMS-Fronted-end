import React from "react";
import SideMenu from "../components/SideMenu";
import TopMenu from "../components/TopMenu";
import Footer from "../components/Footer";

export default function MemberForm() {
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
                    {/* <h2 th:if="${member.id==null}">Add New Member</h2>
                    <h2 th:if="${member.id!=null}">Edit Member Data</h2> */}
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
                    <br />
                    <form
                      id="member-form"
                      // th:action="@{/member/save}"
                      // method="post"
                      // th:object="${member}"
                      className="form-horizontal form-label-left"
                    >
                      <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12">
                          Member Type <span className="required">*</span>
                        </label>
                        <div className="col-md-2 col-sm-2 col-xs-12">
                          {/* <select th:field="*{type}" className="form-control">
                            <option
                              th:each="mt : ${memberTypes}"
                              th:value="${mt}"
                              th:text="${mt}"
                            ></option>
                          </select> */}
                        </div>
                      </div>

                      <div className="form-group">
                        <label
                          className="control-label col-md-3 col-sm-3 col-xs-12"
                          for="first-name"
                        >
                          First Name <span className="required">*</span>
                        </label>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                          {/* <input type="text" th:field="*{firstName}" className="form-control col-md-7 col-xs-12"> */}
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12 mt-5">
                          <span
                            // th:if="${#fields.hasErrors('firstName')}"
                            // th:errors="*{firstName}"
                          ></span>
                        </div>
                      </div>

                      <div className="form-group">
                        <label
                          className="control-label col-md-3 col-sm-3 col-xs-12"
                          for="first-name"
                        >
                          Middle Name <span className="required">*</span>
                        </label>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                          {/* <input type="text" th:field="*{middleName}" className="form-control col-md-7 col-xs-12"> */}
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12 mt-5">
                          <span
                          // th:if="${#fields.hasErrors('middleName')}"
                          // th:errors="*{middleName}"
                          ></span>
                        </div>
                      </div>

                      <div className="form-group">
                        <label
                          className="control-label col-md-3 col-sm-3 col-xs-12"
                          for="first-name"
                        >
                          Last Name
                        </label>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                          {/* <input type="text" th:field="*{lastName}" className="form-control col-md-7 col-xs-12"> */}
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12 mt-5">
                          <span
                          // th:if="${#fields.hasErrors('lastName')}"
                          // th:errors="*{lastName}"
                          ></span>
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12">
                          Gender <span className="required">*</span>
                        </label>
                        <div className="col-md-2 col-sm-2 col-xs-12">
                          {/* <select th:field="*{gender}" className="form-control">
                            <option th:value="'Male'" th:text="Male"></option>
                            <option
                              th:value="'Female'"
                              th:text="Female"
                            ></option>
                          </select> */}
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12">
                          Date of Birth <span className="required">*</span>
                        </label>
                        <div className="col-md-2 col-sm-2 col-xs-12">
                          {/* <input type="text" className="form-control" data-inputmask="'mask': '99-Aaa-9999'" name="dateOfBirth" id="dateOfBirth" */}
                          {/* th:value="${member.dateOfBirth}?${#dates.format(member.dateOfBirth, 'dd-MMM-yyyy')}:''" > */}
                          <span
                            className="fa fa-calendar form-control-feedback right"
                            aria-hidden="true"
                          ></span>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12 mt-5">
                          <span id="dobErr"></span>
                          <span
                          // th:if="${#fields.hasErrors('dateOfBirth')}"
                          // th:errors="*{dateOfBirth}"
                          ></span>
                        </div>
                      </div>

                      <div className="form-group">
                        <label
                          className="control-label col-md-3 col-sm-3 col-xs-12"
                          for="contact"
                        >
                          Contact #{" "}
                        </label>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                          {/* <input type="text" th:field="*{contact}" className="form-control col-md-7 col-xs-12"> */}
                        </div>
                      </div>

                      <div className="form-group">
                        <label
                          className="control-label col-md-3 col-sm-3 col-xs-12"
                          for="contact"
                        >
                          Email{" "}
                        </label>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                          {/* <input type="text" th:field="*{email}" className="form-control col-md-7 col-xs-12"> */}
                        </div>
                      </div>

                      {/* <input type="hidden" th:if="${id!=null}" th:field="*{id}" /> */}
                      {/* <input type="hidden" name="joiningDate" id="joiningDate" th:value="${member.joiningDate}?${#dates.format(member.joiningDate, 'dd-MMM-yyyy')}:${#dates.format(#dates.createNow(), 'dd-MMM-yyyy')}" /> */}

                      <div className="ln_solid"></div>
                      <div className="form-group">
                        <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                          {/* <th:block th:if="${id==null}">
                            <button className="btn btn-primary" type="reset">
                              Reset
                            </button>
                          </th:block>
                          <th:block th:if="${id!=null}">
                            <button
                              className="btn btn-primary"
                              type="button"
                              id="gotoListBtn"
                            >
                              Go to list page
                            </button>
                          </th:block> */}
                          <button
                            type="button"
                            className="btn btn-success"
                            id="saveBtn"
                          >
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
