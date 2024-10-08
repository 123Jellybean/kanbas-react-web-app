import { Link, NavLink } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 me-5 rounded-0">
      <nav>
      <NavLink
        to="/Kanbas/Account/Signin"
        id="wd-account-signin-link"
        className= {({ isActive }) =>
          isActive
            ? "list-group-item custom-active border border 0"
            : "list-group-item custom-inactive border border 0"
      }
      >
        {" "}
        Signin{" "}
      </NavLink>
      <NavLink
        to="/Kanbas/Account/Signup"
        id="wd-account-signup-link"
        className= {({ isActive }) =>
          isActive
            ? "list-group-item custom-active border border 0"
            : "list-group-item custom-inactive border border 0"
      }
      >
        {" "}
        Signup{" "}
      </NavLink>
      
      <NavLink
        to="/Kanbas/Account/Profile"
        id="wd-account-profile-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item custom-active border border-0"
            : "list-group-item custom-inactive border border 0"
}
      >
        {" "}
        Profile{" "}
      </NavLink>
      </nav>
    </div>
  );
}
