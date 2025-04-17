import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import reactImage from "/images/reactjs.webp";
import mlImage from "/images/machinelearning.jpg";
import discreteImage from "/images/discrete.svg";
import pythonImage from "/images/python.webp";
import hciImage from "/images/hci.avif";
import ethicsImage from "/images/ethics.png";
import algorithmsImage from "/images/algorithms.jpg";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
      <Row xs={1} md={5} className="g-4">
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link to="/Kambaz/Courses/1234/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src={reactImage} width="100%" height={160}/>
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
                <Card.Text  className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link to="/Kambaz/Courses/1234/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src={mlImage} width="100%" height={160}/>
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">DS4400 Machine Learning & Data Mining</Card.Title>
                <Card.Text  className="wd-dashboard-course-description">Data Scientist & ML Engineer</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link to="/Kambaz/Courses/1234/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src={discreteImage} width="100%" height={160}/>
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">CS1800 Discrete Structures</Card.Title>
                <Card.Text  className="wd-dashboard-course-description">Math Expert</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link to="/Kambaz/Courses/1234/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src={pythonImage} width="100%" height={160}/>
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">DS3500 Advanced Programming with Data</Card.Title>
                <Card.Text  className="wd-dashboard-course-description">Python Programmer & Data Visualizer</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link to="/Kambaz/Courses/1234/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src={hciImage} width="100%" height={160}/>
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">IS4300 Human Computer Interaction</Card.Title>
                <Card.Text  className="wd-dashboard-course-description">Human Centered Designer</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link to="/Kambaz/Courses/1234/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src={ethicsImage} width="100%" height={160}/>
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">PHIL5010 AI Ethics</Card.Title>
                <Card.Text  className="wd-dashboard-course-description">Technological Ethicist</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link to="/Kambaz/Courses/1234/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src={algorithmsImage} width="100%" height={160}/>
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">CS3000 Algorithms & Data</Card.Title>
                <Card.Text  className="wd-dashboard-course-description">Algorithm Analyst</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>
      </Row>
      </div>
    </div>
);}
