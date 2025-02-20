import { useParams, Link } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";
import * as db from "../../Database";
interface Assignment {
  _id: string;
  title: string;
  course: string;
  description?: string;
  points?: number;
  dueDate?: string;
  availableDate?: string;
}
const assignmentsData: Assignment[] = (db.assignments || []) as Assignment[];
export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid?: string; aid?: string }>();
  const assignment = assignmentsData.find((a) => a._id === aid && a.course === cid);
  if (!assignment) {
    return <p className="text-danger">Error: Assignment not found.</p>;
  }
  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Label><b>Assignment Name</b></Form.Label>
        <Form.Control type="text" defaultValue={assignment.title} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><b>Description</b></Form.Label>
        <Form.Control
          as="textarea"
          rows={12}
          defaultValue={assignment.description || "No description provided."}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><b>Points</b></Form.Label>
        <Form.Control type="number" defaultValue={assignment.points || 100} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><b>Assignment Group</b></Form.Label>
        <Form.Select defaultValue="ASSIGNMENTS">
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="PROJECTS">PROJECTS</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><b>Display Grade as</b></Form.Label>
        <Form.Select defaultValue="Percentage">
          <option value="Percentage">Percentage</option>
          <option value="Complete/Incomplete">Complete/Incomplete</option>
          <option value="Points">Points</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><b>Submission Type</b></Form.Label>
        <Form.Select defaultValue="Online">
          <option value="Online">Online</option>
        </Form.Select>
        <Form.Group className="mt-2 ms-3">
          <Form.Check type="checkbox" label="Text Entry" />
          <Form.Check type="checkbox" label="Website URL" defaultChecked />
          <Form.Check type="checkbox" label="Media Recordings" />
          <Form.Check type="checkbox" label="Student Annotation" />
          <Form.Check type="checkbox" label="File Uploads" />
        </Form.Group>
      </Form.Group>
      <Row className="mb-3">
        <Col>
          <Form.Label><b>Due</b></Form.Label>
          <Form.Control type="datetime-local" defaultValue={assignment.dueDate || "2024-05-13T23:59"} />
        </Col>
        <Col>
          <Form.Label><b>Available from</b></Form.Label>
          <Form.Control type="datetime-local" defaultValue={assignment.availableDate || "2024-05-06T12:00"} />
        </Col>
        <Col>
          <Form.Label><b>Until</b></Form.Label>
          <Form.Control type="datetime-local" />
        </Col>
      </Row>
      <div className="d-flex justify-content-end">
        <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
        <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-danger">Save</Link>
      </div>
    </div>
  );
}

