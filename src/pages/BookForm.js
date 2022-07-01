import React, { useState } from "react";
import Footer from "../components/Footer";
import SideMenu from "../components/SideMenu";

const categories = [
  {
    id: "1",
    name: "novel",
  },
  {
    id: "1",
    name: "story",
  },
];

export default function BookForm() {
  const [tag, settag] = useState("");
  const [category, setcategory] = useState("");
  const [author, setauthor] = useState("");
  const [title, settitle] = useState("");
  const [isbn, setisbn] = useState("");
  const [publisher, setpublisher] = useState("");

  return (
    <main className="nav-md">
      <div className="container body">
        <div className="main_container">
          <SideMenu />

          {/* <!-- page content --> */}
          <div className="right_col" role="main">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="x_panel">
                  <div className="x_title">
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
                    <form className="form-horizontal form-label-left">
                      <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12">
                          Category <span className="required">*</span>
                        </label>
                        <div className="col-md-3 col-sm-3 col-xs-12">
                          <select
                            value={category}
                            defaultValue={""}
                            onChange={(e) => setcategory(e.target.value)}
                            className="form-control"
                            id="category-selectbox"
                          >
                            <option value="">--select--</option>

                            {categories.map((item) => (
                              <option key={item.id} value={item.id}>
                                {item.name}
                              </option>
                            ))}
                          </select>
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
                          <input
                            type="text"
                            value={tag}
                            onChange={(e) => settag(e.target.value)}
                            className="form-control col-md-7 col-xs-12"
                          />
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
                          <input
                            type="text"
                            value={title}
                            onChange={(e) => settitle(e.target.value)}
                            className="form-control col-md-7 col-xs-12"
                          />
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
                          <input
                            type="text"
                            value={author}
                            onChange={(e) => setauthor(e.target.value)}
                            className="form-control col-md-7 col-xs-12"
                          />
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
                          <input
                            type="text"
                            value={publisher}
                            onChange={(e) => setpublisher(e.target.value)}
                            className="form-control col-md-7 col-xs-12"
                          />
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
                          <input
                            type="text"
                            value={isbn}
                            onChange={(e) => setisbn(e.target.value)}
                            className="form-control col-md-7 col-xs-12"
                          />
                        </div>
                      </div>

                      <div className="ln_solid"></div>
                      <div className="form-group">
                        <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                          <button
                            className="btn btn-primary"
                            type="reset"
                            id="resetBtn"
                          >
                            Reset
                          </button>

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
