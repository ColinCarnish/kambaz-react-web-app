import { Link } from "react-router-dom";
import { Button, Row, Col, Card, Form } from "react-bootstrap";

interface Courses {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  description: string;
}
interface DashboardProps {
  courses: Courses[];
  course: Courses;
  setCourse: (course: Courses) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}


export default function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }: DashboardProps) {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />


      <h2>New Course</h2>
      <Form>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Course Name"
            value={course.name}
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as="textarea"
            placeholder="Course Description"
            value={course.description}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" onClick={addNewCourse}>Add</Button>
        <Button variant="warning" onClick={updateCourse}>Update</Button>
      </Form>


      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                <Card.Body className="card-body">
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {course.name}
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    {course.description}
                  </Card.Text>
                  <Link to={`/Kambaz/Courses/${course._id}/Home`}>
                    <Button variant="primary"> Go </Button>
                  </Link>
                  <Button
                    variant="warning"
                    onClick={(e) => { e.stopPropagation(); setCourse(course); }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={(e) => { e.stopPropagation(); deleteCourse(course._id); }}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}


