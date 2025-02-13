import { Form, Button, Row, Col } from "react-bootstrap";
export default function AssignmentEditor() {
  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Label><b>Assignment Name</b></Form.Label>
        <Form.Control type="text" defaultValue={'A1'} />
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label><b>Instructions</b></Form.Label>
        <Form.Control
          as="textarea"
          rows={12}
          defaultValue={`The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.\n\nThe landing page should include the following:\n\n• Your full name and section\n• Links to each of the lab assignments\n• Link to the Kanbas application\n• Links to all relevant source code repositories\n\nThe Kanbas application should include a link to navigate back to the landing page.`}
        />
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label><b>Points</b></Form.Label>
        <Form.Control type="number" defaultValue={100} />
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
          <Form.Control type="datetime-local" defaultValue="2024-05-13T23:59" />
        </Col>
        <Col>
          <Form.Label><b>Available from</b></Form.Label>
          <Form.Control type="datetime-local" defaultValue="2024-05-06T12:00" />
        </Col>
        <Col>
          <Form.Label><b>Until</b></Form.Label>
          <Form.Control type="datetime-local" />
        </Col>
      </Row>
      
      <div className="d-flex justify-content-end">
        <Button variant="secondary" className="me-2">Cancel</Button>
        <Button variant="danger">Save</Button>
      </div>
    </div>
  );
}
