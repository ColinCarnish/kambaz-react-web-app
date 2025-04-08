import { useEffect, useState } from "react";
import * as enrollmentsClient from "../Enrollments/client";
import * as coursesClient from "../client";
import { useSelector } from "react-redux";
import { Button, Card, Col, Row } from "react-bootstrap";

interface Course {
  _id: string;
  name: string;
  description: string;
}

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

export default function EnrollmentsScreen() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [courses, setCourses] = useState<Course[]>([]);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);

  const loadData = async () => {
    const allCourses = await coursesClient.fetchAllCourses();
    const userEnrollments = await enrollmentsClient.findCoursesForUser(currentUser._id);
    setCourses(allCourses);
    setEnrollments(userEnrollments);
  };

  const isEnrolled = (courseId: string) =>
    enrollments.some((e) => e.course === courseId);

  useEffect(() => {
    if (currentUser?._id) {
      loadData();
    }
  }, [currentUser]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Enroll/Unenroll</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
            <Button>
                Unenroll
            </Button>
            <br>
            </br>
            <Button>
                Enroll
            </Button>
        </Row>
    </div>
  );
  
}
