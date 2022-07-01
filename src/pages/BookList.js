import axios from "axios";
import React, { useEffect, useState } from "react";
import { BookListItem } from "../components/BookListItem";
import Footer from "../components/Footer";
import SideMenu from "../components/SideMenu";

export default function BookList() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios({
        method: "GET",
        url: "",
      });

      if (response.data) setdata(response.data);
    };

    getData();
  });

  if (!data || data?.length === 0) {
    return <p>No books found.</p>;
  }

  return (
    <main className="nav-md">
      <div className="container body">
        <div className="main_container">
          <SideMenu />

          {/* <!-- page content --> */}
          <div className="right_col" role="main">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="x_panel">
                <div className="x_title">
                  <h2>List of Books</h2>
                  <div className="clearfix"></div>
                </div>
                <div className="x_content">
                  <div
                    className="alert alert-success alert-dismissible fade in"
                    role="alert"
                  >
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">x</span>
                    </button>
                    <span>Book is in use, cannot be deleted.</span>
                  </div>

                  <table
                    id="datatable"
                    className="table table-striped table-bordered"
                  >
                    <thead>
                      <tr>
                        <th>Category</th>
                        <th>Tag</th>
                        <th style={{ width: "350px" }}>Title</th>
                        <th style={{ width: "150px" }}>Authors</th>
                        <th style={{ width: "50px" }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.length > 0 &&
                        data.map((book, idx) => (
                          <BookListItem key={idx.toString()} book={book} />
                        ))}

                      {data?.length === 0 && (
                        <tr>
                          <td>No books.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /page content --> */}

          <div
            className="modal fade remove-book-modal"
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
                  <h4 className="modal-title">Remove Book</h4>
                </div>
                <div className="modal-body">
                  <p>
                    Are you sure you want to remove <br />
                    <strong>
                      <span id="book-name"></span>
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
                    // onClick="removeBook();"F
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
