import { NavLink, useParams } from "react-router-dom";
import { courses } from "../Database";
import { useLocation } from "react-router";
import "../style.css";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid); // Ensure courses exist
  const { pathname } = useLocation();

  // Define the navigation links
  const links = [
    { path: "Home", label: "Home" },
    { path: "Modules", label: "Modules" },
    { path: "Piazza", label: "Piazza" },
    { path: "Zoom", label: "Zoom" },
    { path: "Assignments", label: "Assignments" },
    { path: "Quizzes", label: "Quizzes" },
    { path: "People", label: "People" },
  ];

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map(({ path, label }) => (
        <NavLink
          key={path}
          to={`/Kanbas/Courses/${cid}/${path}`}
          className={({ isActive }) =>
            isActive
              ? "list-group-item custom-active border border-0"
              : "list-group-item custom-inactive text-danger border border-0"
          }
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
}
