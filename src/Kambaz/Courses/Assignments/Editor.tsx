import { useParams, Link, useNavigate } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import * as db from "../../Database";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  description?: string;
  points?: number;
  due?: string;
  available?: string;
}

const formatDateForDisplay = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
  });
};

const formatDateForInput = (dateString: string) => {
  const date = new Date(dateString);
  return date.toISOString().slice(0, 10);
};

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid?: string; aid?: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reduxAssignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const assignmentsData: Assignment[] = [...(db.assignments || []), ...reduxAssignments];
  let assignment = assignmentsData.find((a) => a._id === aid && a.course === cid);

  if (!assignment) {
    assignment = {
      _id: aid!,
      title: "",
      course: cid!,
      description: "",
      points: 100,
      due: new Date().toISOString(),
      available: new Date().toISOString(),
    };
  }

  const handleSave = () => {
    const updatedAssignment = {
      ...assignment!,
      title: (document.getElementById("title") as HTMLInputElement).value,
      description: (document.getElementById("description") as HTMLTextAreaElement).value,
      points: Number((document.getElementById("points") as HTMLInputElement).value),
      due: (document.getElementById("due") as HTMLInputElement).value,
      available: (document.getElementById("available") as HTMLInputElement).value,
    };

    const exists = reduxAssignments.some((a: Assignment) => a._id === aid);
    if (exists) {
      dispatch(updateAssignment(updatedAssignment));
    } else {
      dispatch(addAssignment(updatedAssignment));
    }

    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Label><b>Assignment Name</b></Form.Label>
        <Form.Control id="title" type="text" defaultValue={assignment.title} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><b>Description</b></Form.Label>
        <Form.Control
          id="description"
          as="textarea"
          rows={12}
          defaultValue={assignment.description || "No instructions provided."}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><b>Points</b></Form.Label>
        <Form.Control id="points" type="number" defaultValue={assignment.points || 100} />
      </Form.Group>
      <Row className="mb-3">
        <Col>
          <Form.Label><b>Due</b> ({formatDateForDisplay(assignment.due || "")})</Form.Label>
          <Form.Control id="due" type="date" defaultValue={formatDateForInput(assignment.due || "")} />
        </Col>
        <Col>
          <Form.Label><b>Available from</b> ({formatDateForDisplay(assignment.available || "")})</Form.Label>
          <Form.Control id="available" type="date" defaultValue={formatDateForInput(assignment.available || "")} />
        </Col>
        <Col>
          <Form.Label><b>Available until</b> ({formatDateForDisplay(assignment.available || "")})</Form.Label>
          <Form.Control id="available" type="date" defaultValue={formatDateForInput(assignment.available || "")} />
        </Col>
      </Row>
      <div className="d-flex justify-content-end">
        <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
        <button onClick={handleSave} className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}


