import CourseNavigation from "./Navigation";
import { courses } from "../Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";
interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
  description: string;
}
const typedCourses: Course[] = courses as Course[];
export default function Courses() {
  const { cid } = useParams<{ cid: string }>();
  const course = typedCourses.find((c) => c._id === cid);
  const { pathname } = useLocation();
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-3 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <CourseNavigation />
            </td>
            <td valign="top">
              <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home />} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Assignments" element={<Assignments />} />
                <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                <Route path="People" element={<PeopleTable />} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
