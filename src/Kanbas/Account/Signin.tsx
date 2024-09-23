import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input className="wd-username" placeholder="username" /> <br />
      <input
        className="wd-password"
        placeholder="password"
        type="password"
      />{" "}
      <br />
      <Link id="wd-signin-btn" to="/Kanbas/Dashboard">
        {" "}
        Sign in{" "}
      </Link>{" "}
      <br />
      <Link id="wd-signup-link" to="/Kanbas/Account/Signup">
        Sign up
      </Link>
      <hr />
      <br />
      <h1>Landing Page</h1>
      <h2>Jenna Sigman </h2>
      <h3>Section: CS4550 - 01</h3>
      <Link id="wd-labs" to="/Labs">
        Link to labs
      </Link>
      <br />
      <Link id="wd-labs" to="/Kanbas/Dashboard">
        Link to Kanbas
      </Link>
      <br />

    </div>
  );
}
