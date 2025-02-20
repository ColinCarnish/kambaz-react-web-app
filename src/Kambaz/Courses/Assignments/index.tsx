import { useParams, Link } from "react-router-dom";
import { FaSearch, FaPlus, FaEllipsisV } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckMark";
import * as db from "../../Database";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  available?: string;
  due?: string;
  points?: number;
}
const assignmentsData: Assignment[] = (db.assignments || []) as Assignment[];
export default function Assignments() {
  const { cid } = useParams<{ cid?: string }>();
  const assignments = assignmentsData.filter((assignment) => assignment.course === cid);
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="position-relative w-25">
          <FaSearch
            className="position-absolute text-muted"
            style={{ left: "10px", top: "50%", transform: "translateY(-50%)" }}
          />
          <input type="text" placeholder="Search..." className="form-control ps-4" />
        </div>
        <div>
          <button className="btn btn-light border me-2">
            <FaPlus className="me-1" /> Group
          </button>
          <button className="btn btn-danger text-white">
            <FaPlus className="me-1" /> Assignment
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
        <h3 className="mb-0 fw-bold">ASSIGNMENTS</h3>
        <button className="btn btn-light border rounded-pill px-3">
          40% of Total
        </button>
      </div>
      <ul className="list-group">
        {assignments.length > 0 ? (
          assignments.map((assignment) => (
            <li
              key={assignment._id}
              className="list-group-item d-flex justify-content-between align-items-center border-start border-success ps-3"
              style={{ borderLeftWidth: "4px" }}
            >
              <div className="d-flex align-items-center">
                <span className="me-3 text-muted" style={{ cursor: "grab" }}>
                  ≡
                </span>
                <div>
                  <Link
                    to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                    className="text-black text-decoration-none fw-bold fs-6 d-block"
                  >
                    {assignment.title}
                  </Link>
                  <div className="text-muted small">
                    <span className="text-danger">Multiple Modules</span> |{" "}
                    <b className="text-danger">Not available until</b>{" "}
                    {assignment.available || "N/A"}
                    <br />
                    <b>Due:</b> {assignment.due || "N/A"} at 11:59pm |{" "}
                    {assignment.points || 100} pts
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <GreenCheckmark />
                <FaEllipsisV className="ms-3 text-muted" style={{ cursor: "pointer" }} />
              </div>
            </li>
          ))
        ) : (
          <li className="list-group-item text-muted">No assignments found for this course.</li>
        )}
      </ul>
    </div>
  );
}
