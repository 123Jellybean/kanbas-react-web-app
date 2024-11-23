import { Link, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const { pathname } = useLocation();
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
    <div id="wd-courses-navigation" className="list-group fs-5">
      {links.map((link) => (
        <Link
          key={link}
          to={link}
          className={`list-group-item border border-0
                    ${
                      pathname.includes(link)
                        ? "active border-start border-3 border-dark bg-transparent text-dark rounded-0"
                        : "inactive text-danger"
                    }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
