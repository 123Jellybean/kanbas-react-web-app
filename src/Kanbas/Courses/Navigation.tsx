import { NavLink, useParams } from "react-router-dom";
import "../style.css";

export default function CoursesNavigation() {
  const { courseId } = useParams();

  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <nav>
        {links.map((link) => (
          <NavLink
            key={link}
            to={`/Kanbas/Courses/${courseId}/${link}`}
            className={({ isActive }) =>
              isActive
                ? "list-group-item custom-active border border-0"
                : "list-group-item custom-inactive border border-0"
            }
          >
            {link}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
