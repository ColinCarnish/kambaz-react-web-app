import ModulesControls from "./ModulesControl";
import LessonControlButtons from "./LessonsControlButtons";
import { useParams } from "react-router";
import { BsGripVertical } from "react-icons/bs";
import * as db from "../../Database";

interface Lesson {
  _id: string;
  name: string;
  description: string;
  module: string;
}

interface Modules {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons?: Lesson[];
}

export default function Modules() {
  const modules: Modules[] = db.modules as Modules[];
  const { cid } = useParams();

  return (
    <div>
      <div className="d-flex mb-2">
        <ModulesControls />
      </div>
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module) => module.course === cid)
          .map((module) => (
            <li key={module._id} className="list-group-item p-0 mb-2 border-gray">
              <div className="p-3 bg-secondary d-flex align-items-center">
                <BsGripVertical className="me-2 fs-5" /> {module.name}
              </div>
              {module.lessons && (
                <ul className="list-group rounded-0">
                  {module.lessons.map((lesson) => (
                    <li key={lesson._id} className="list-group-item d-flex align-items-center p-3 justify-content-between">
                      <span>
                        <BsGripVertical className="me-2 fs-5" /> {lesson.name}
                      </span>
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
