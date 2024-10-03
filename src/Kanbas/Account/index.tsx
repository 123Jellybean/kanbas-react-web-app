import { Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./AccountNavigation";
import Signin from "./Signin";
import Signup from "./Signup";
import Profile from "./Profile";

export default function Account() {
  return (
    <div id="wd-account-screen">
      <div className="d-flex">
        <div className="d-none d-md-block">
          <AccountNavigation />
        </div>
        <Signin />
        <Routes>
          <Route path="/Signin/" element={<Signin />} />
          <Route path="/Signup/" element={<Signup />} />
          <Route path="/Profile/" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}
