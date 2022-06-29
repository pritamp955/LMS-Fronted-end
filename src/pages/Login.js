import React from "react";

export default function Login() {
  return (
    <main className="login">
      <div>
        <div className="login_wrapper">
          <section className="login_content">
            <form id="loginform">
              <h1>Login Form</h1>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  name="username"
                />
              </div>
              <div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                />
              </div>
              <div>
                <a
                  className="btn btn-default submit"
                  href="javascript:void(0)"
                  onClick="document.getElementById('loginform').submit();"
                >
                  Log in
                </a>
              </div>

              <div className="clearfix"></div>

              <div className="separator">
                <div className="clearfix"></div>
                <br />

                <div>
                  <h1>
                    <i className="fa fa-paw"></i> Spark LMS
                  </h1>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
