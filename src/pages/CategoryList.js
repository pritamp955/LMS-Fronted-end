import React from "react";
import SideMenu from "../components/SideMenu";
import TopMenu from "../components/TopMenu";
import Footer from "../components/Footer";

export default function CategoryList() {
  return (
    <main className="nav-md">
      <div className="container body">
        <div className="main_container">
          <SideMenu />
          <TopMenu />

          {/* <!-- page content --> */}
          <div className="right_col" role="main">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="x_panel">
                <div className="x_title">
                  <h2>List of Categories</h2>
                  <div className="clearfix"></div>
                </div>
                <div className="x_content">
                  <div
                    className="alert alert-success alert-dismissible fade in"
                    role="alert"
                    // th:if="${categoryInUse}"
                  >
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">x</span>
                    </button>
                    <span>
                      Category has related Book(s), cannot be deleted.
                    </span>
                  </div>

                  <table
                    id="datatable"
                    className="table table-striped table-bordered"
                  >
                    <thead>
                      <tr>
                        <th style="width: 200px;">Category</th>
                        <th style="width: 50px;">Short</th>
                        <th>Notes</th>
                        <th style="width: 50px;">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {/* <tr th:each="c : ${categories}">
                        <td th:text="${c.name}"></td>
                        <td th:text="${c.shortName}"></td>
                        <td th:text="${c.notes}"></td> */}
                        <td>
                          {/* <a th:href="@{'/category/edit/' + ${c.id}}">
                            <i className="fa fa-edit"></i>
                          </a> */}
                          <a
                            data-toggle="modal"
                            data-target=".remove-category-modal"
                            onClick="removeCategoryDialog(this);"
                            // th:data-category-id="${c.id}"
                            // th:data-category-name="${c.name}"
                            style="cursor: pointer;"
                          >
                            <i className="fa fa-remove"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /page content --> */}

          <div
            className="modal fade remove-category-modal"
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
                  <h4 className="modal-title">Remove Category</h4>
                </div>
                <div className="modal-body">
                  <p>
                    Are you sure you want to remove <br />
                    <strong>
                      <span id="category-name"></span>
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
                    onClick="removeCategory();"
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
