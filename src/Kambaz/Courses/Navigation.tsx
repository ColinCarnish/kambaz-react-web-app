import { Link, useLocation, useParams } from "react-router-dom";

export default function CourseNavigation() {
  const { cid } = useParams();
  const location = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const linkPath = `/Kambaz/Courses/${cid}/${link}`;
        return (
          <Link
            key={link}
            to={linkPath}
            id={`wd-course-${link.toLowerCase()}-link`}
            className={`list-group-item border border-0 ${location.pathname === linkPath ? "active" : "text-danger"}`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
