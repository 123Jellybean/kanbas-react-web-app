import { NavLink, useParams, Link } from "react-router-dom";
import { courses } from "../Database";
import { useLocation } from "react-router";
import "../style.css";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  const links = [
    { label: "Home", path: "/Kanbas/Courses/:cid/Home" },
    { label: "Modules", path: "/Kanbas/Courses/:cid/Modules" },
    { label: "Piazza", path: "/Kanbas/Courses/:cid/Piazza" },
    { label: "Zoom", path: "/Kanbas/Courses/:cid/Zoom" },
    { label: "Assignments", path: "/Kanbas/Courses/:cid/Assignments/*" },
    { label: "Quizzes", path: "/Kanbas/Courses/:cid/Quizzes" },
    { label: "Grades", path: "/Kanbas/Courses/:cid/Grades" },
    { label: "People", path: "/Kanbas/Courses/:cid/People" },
    { label: "Settings", path: "/Kanbas/Courses/:cid/Settings" },
  ];

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
     {links.map((link) => (
        <Link to={`/Kanbas/Courses/${cid}/${link.label}`}
              className={
                    `list-group-item
                    list-group-item-active

                    ${pathname.includes(link.label) 
                      ? "list-group-item custom-active border border-0" 
                      : "list-group-item custom-inactive border border-0" }
                    `}>
               <br />
              {link.label}
        </Link>
     ))}
        </div>
  );
}