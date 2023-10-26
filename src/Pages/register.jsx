import React from "react";
import { Link } from "react-router-dom";

import "../../src/styles/log-reg.css";

export default function SignUpPage() {
  return (
    <div className=" reg text-center m-5-auto">
      <h2>Join us</h2>
      <h6>Create your personal account</h6>
      <form action="/home" className="form">
        <p>
          <label>Username</label>
          <br />
          <input type="text" name="first_name" required />
        </p>
        <p>
          <label>Email address</label>
          <br />
          <input type="email" name="email" required />
        </p>
        <p>
          <label>Password</label>
          <br />
          <input type="password" name="password" requiredc />
        </p>
        <p>
          <input type="checkbox" name="checkbox" id="checkbox" required />{" "}
          <span>
            I agree all statements in{" "}
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              terms of service
            </a>
          </span>
          .
        </p>
        <p>
          <button id="sub_btn" type="submit">
            Register
          </button>
        </p>
      </form>
    </div>
  );
}
