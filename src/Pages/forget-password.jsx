import React from "react";
import { Link } from "react-router-dom";

import "../../src/styles/log-reg.css";

export default function ForgetPasswordPage() {
  return (
    <div className="log text-center m-5-auto">
      <h2>Reset your password</h2>
      <h6>Enter your email address and we will send you a new password</h6>
      <form action="/login" className="form">
        <p>
          <label id="reset_pass_lbl">Email address</label>
          <br />
          <input type="email" name="email" required />
        </p>
        <p>
          <button id="sub_btn" type="submit">
            Send password reset email
          </button>
        </p>
      </form>
      <footer>
        <p>
          First time? <Link to="/register">Create an account</Link>.
        </p>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
