import { FaSearch, FaPlus} from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckMark";

export default function Assignments() {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="position-relative w-25">
          <FaSearch className="position-absolute text-muted" style={{ left: "10px", top: "50%", transform: "translateY(-50%)" }} />
          <input
            type="text"
            placeholder="Search..."
            className="form-control ps-4"
          />
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
        <h3 className="mb-0">ASSIGNMENTS</h3>
        <span className="text-muted">40% of Total</span>
      </div>
      <ul className="list-group">
        {[
          { id: 1, title: "A1", available: "May 6", due: "May 13" },
          { id: 2, title: "A2", available: "May 13", due: "May 20" },
          { id: 3, title: "A3", available: "May 20", due: "May 27" },
        ].map((assignment) => (
          <li key={assignment.id} className="list-group-item d-flex justify-content-between align-items-center border-start border-success ps-3">
            <div>
              <a href="#/Kambaz/Courses/1234/Assignments/125" className="wd-assignment-link text-black text-decoration-none fw-bold fs-6 d-block">
                {assignment.title}
              </a>
              <div className="text-muted small">
                Multiple Modules | <b>Not available until</b> {assignment.available}
                <br />
                <b>Due:</b> {assignment.due} at 11:59pm | 100 pts
              </div>
            </div>
            <GreenCheckmark />
          </li>
        ))}
      </ul>
    </div>
  );
}
