import ModulesControls from "./ModulesControl";
import { useState, useEffect } from "react";
import LessonControlButtons from "./LessonsControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
import { FormControl } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as coursesClient from "../client";

interface Lesson {
  _id: string;
  name: string;
  description: string;
  module: string;
}

interface Module {
  _id: string;
  name: string;
  description?: string;
  course: string;
  lessons?: Lesson[];
  editing?: boolean;
}


export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);
  return (
    <div>
      <div className="d-flex mb-2">
      <ModulesControls moduleName={moduleName} setModuleName={setModuleName} 
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }} />
      </div>
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .map((module: Module) => (
            <li key={module._id} className="list-group-item p-0 mb-2 border-gray">
              <div className="p-3 bg-secondary d-flex align-items-center">
                <BsGripVertical className="me-2 fs-5" />
                {!module.editing && module.name}
                { module.editing && (
                  <FormControl className="w-50 d-inline-block"
                        onChange={(e) => dispatch(
                          updateModule({ ...module, name: e.target.value })
                        )
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          dispatch(updateModule({ ...module, editing: false }));
                        }
                      }
                    }    
                        defaultValue={module.name}/>
                )}
                <ModuleControlButtons
                moduleId={module._id}
                deleteModule={(moduleId) => {
                  dispatch(deleteModule(moduleId));
                }}
                editModule={(moduleId) => dispatch(editModule(moduleId))} />
              </div>
              {module.lessons && (
                <ul className="list-group rounded-0">
                  {module.lessons.map((lesson: Lesson) => (
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
