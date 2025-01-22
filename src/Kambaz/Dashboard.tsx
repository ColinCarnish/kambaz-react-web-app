import { Link } from "react-router-dom";
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
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src={reactImage} width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src={mlImage} width={200} />
            <div>
              <h5> DS4400 Machine Learning & Data Mining </h5>
              <p className="wd-dashboard-course-title">
                Data Scientist & ML Engineer </p>
              <button> Go </button>
            </div>
          </Link> ... 
        </div>
        <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src={discreteImage} width={200} />
            <div>
              <h5> CS 1800 Discrete Structures </h5>
              <p className="wd-dashboard-course-title">
                Math Expert  </p>
              <button> Go </button>
            </div>
          </Link> ... 
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src={pythonImage} width={200} />
            <div>
              <h5> DS 3500 Advanced Programming with Data </h5>
              <p className="wd-dashboard-course-title">
                Python Programmer & Data Visualizer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src={hciImage} width={200} />
            <div>
              <h5> IS 4300 Human Computer Interaction</h5>
              <p className="wd-dashboard-course-title">
                Human-Centered Designer </p>
              <button> Go </button>
            </div>
          </Link> ... 
        </div>
        <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src={ethicsImage} width={200} />
            <div>
              <h5> PHIL 5010 AI Ethics </h5>
              <p className="wd-dashboard-course-title">
                Technological Ethicist </p>
              <button> Go </button>
            </div>
          </Link>  
        </div>
        <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src={algorithmsImage} width={200} />
            <div>
              <h5> CS 3000 Algorithms and Data </h5>
              <p className="wd-dashboard-course-title">
                Algorithm Analyst </p>
              <button> Go </button>
            </div>
          </Link>  
        </div>
      </div>
    </div>
);}
