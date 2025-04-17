import { useParams, Link, useNavigate } from "react-router-dom";
import { FaSearch, FaPlus, FaEllipsisV } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckMark";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { deleteAssignment } from "./reducer";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  available?: string;
  due?: string;
  points?: number;
}

export default function Assignments() {
  const { cid } = useParams<{ cid?: string }>();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);

  const filteredAssignments = assignments.filter(
    (assignment: Assignment) => assignment.course === cid
);

  const handleDeleteClick = (assignment: Assignment) => {
    setSelectedAssignment(assignment);
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (selectedAssignment) {
      dispatch(deleteAssignment(selectedAssignment._id));
    }
    setShowModal(false);
    setSelectedAssignment(null);
  };

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
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/${uuidv4()}`)}
          >
            <FaPlus className="me-1" /> Assignment
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
        <h3 className="mb-0 fw-bold">ASSIGNMENTS</h3>
        <button className="btn btn-light border rounded-pill px-3">40% of Total</button>
      </div>
      <ul className="list-group">
        {filteredAssignments.length > 0 ? (
          filteredAssignments.map((assignment: Assignment) => (
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
                <button style={{ marginLeft: "15px", marginRight: "10px" }}>
                  <Link
                    to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                    className="text-black text-decoration-none fw-bold fs-6 d-block"
                  >
                    Edit Assignment
                  </Link>
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  style={{ marginLeft: "15px", marginRight: "15px" }}
                  onClick={() => handleDeleteClick(assignment)}
                >
                  Delete
                </button>
                <GreenCheckmark />
                <FaEllipsisV className="text-muted" style={{ cursor: "pointer" }} />
              </div>
            </li>
          ))
        ) : (
          <li className="list-group-item text-muted">No assignments found for this course.</li>
        )}
      </ul>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete{" "}
          <b>{selectedAssignment?.title}</b>? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
