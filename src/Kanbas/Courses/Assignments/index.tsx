import { BsGripVertical } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControls from "./AssignmentControls";
import { FaPlus } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { PiNotebook } from "react-icons/pi";


export default function Assignments() {
  return (
    <div>
      <div>
        <AssignmentControls />
        <br />
        <br />
        <br />
        <ul id="wd-assignmentss" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            {/*Assignments row*/}
            <div className="wd-title p-3 ps-2 bg-secondary">
            
              <BsGripVertical className="me-2 fs-3" />
              <MdArrowDropDown className="fs-3" />
              ASSIGNMENTS
              <IoEllipsisVertical className="float-end fs-3" />
              <FaPlus className="float-end me-3 fs-4" />
            </div>

            
            <ul className="wd-lessons list-group rounded-0">
              {/*A1 row*/}
              <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                <div>
                  <BsGripVertical className="mt-4 me-2 fs-2" />
                  <PiNotebook
                    className="mt-4 me-2 fs-2"
                    style={{ color: "green" }}
                  />
                  <span className="ms-3 fw-bold">A1</span>
                  <br />
                  <span className="text-danger ms-5 ps-5">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00 am |
                  <div className="ms-5 ps-5 text-muted">
                    <b> Due</b> May 13 at 11:59pm | 100 pts</div>  
                </div>
                <LessonControlButtons />
              </li>

              {/*A2 row*/}
              <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                <div>
                  <BsGripVertical className="mt-4 me-2 fs-2" />
                  <PiNotebook
                    className="mt-4 me-2 fs-2"
                    style={{ color: "green" }}
                  />
                  <span className="ms-3 fw-bold">A2</span>
                  <br />
                  <span className="text-danger ms-5 ps-5">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00 am |
                  <div className="ms-5 ps-5 text-muted">
                    <b> Due</b> May 20 at 11:59pm | 100 pts</div>  
                </div>
                <LessonControlButtons />
              </li>

              {/*A3 row*/}
              <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                <div>
                  <BsGripVertical className="mt-4 me-2 fs-2" />
                  <PiNotebook
                    className="mt-4 me-2 fs-2"
                    style={{ color: "green" }}
                  />
                  <span className="ms-3 fw-bold">A3</span>
                  <br />
                  <span className="text-danger ms-5 ps-5">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00 am |
                  <div className="ms-5 ps-5 text-muted">
                    <b> Due</b> May 27 at 11:59pm | 100 pts</div>  
                </div>
                <LessonControlButtons />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
