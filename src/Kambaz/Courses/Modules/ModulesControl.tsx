import { Button, Dropdown } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaCompressAlt } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckMark";
import ModuleEditor from "./ModuleEditor";

export default function ModulesControls({
  moduleName,
  setModuleName,
  addModule,
}: {
  moduleName: string;
  setModuleName: (title: string) => void;
  addModule: () => void;
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 

  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <Button variant="danger" onClick={handleShow}>
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </Button>

      <Dropdown className="float-end me-2">
        <Dropdown.Toggle variant="secondary" size="lg" id="wd-publish-all-btn">
          <GreenCheckmark /> Publish All
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item id="wd-publish-all">
            <GreenCheckmark /> Publish All
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-all-modules-and-items">
            <GreenCheckmark /> Publish all modules and items
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-modules-only">
            <GreenCheckmark /> Publish modules only
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item id="wd-unpublish-all-modules-and-items">
            Unpublish all modules and items
          </Dropdown.Item>
          <Dropdown.Item id="wd-unpublish-modules-only">
            Unpublish modules only
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Button variant="outline-primary" size="lg" className="me-2 float-end" id="wd-view-progress">
        <MdOutlineRemoveRedEye className="me-2" /> View Progress
      </Button>

      <Button variant="outline-secondary" size="lg" className="me-2 float-end" id="wd-collapse-all">
        <FaCompressAlt className="me-2" /> Collapse All
      </Button>

      <ModuleEditor
        show={show}
        handleClose={handleClose}
        dialogTitle="Add Module"
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
      />
    </div>
  );
}


