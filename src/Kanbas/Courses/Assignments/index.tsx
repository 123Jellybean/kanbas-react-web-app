import { BsGripVertical } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControls from "./AssignmentControls";
import { FaPlus } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { PiNotebook } from "react-icons/pi";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import * as db from "../../Database";

function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );
  const { pathname } = useLocation();

  return (
    <div>
      <AssignmentControls />
      <br />

      {/* Assignments header */}
      <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
        <BsGripVertical className="me-2 fs-3" />
        <MdArrowDropDown className="fs-3" />
        <span className="fw-bold">ASSIGNMENTS</span>
        <div className="ms-auto">
          <FaPlus className="me-3 fs-4" />
          <IoEllipsisVertical className="fs-3" />
        </div>
      </div>

      {/* Assignments list */}
      <ul id="wd-assignmentss" className="list-group rounded-0">
        {courseAssignments.map((assignment) => (
          <li
            key={assignment._id}
            className="wd-lesson list-group-item ps-3 d-flex align-items-start"
          >
            <div className="d-flex align-items-center me-3">
              <BsGripVertical className="fs-2" />
              <PiNotebook className="ms-2 fs-2" style={{ color: "green" }} />
            </div>

            {/* Assignment title and modules */}
            <div className="flex-grow-1">
              <Link
                to={`/Kanbas/Courses/${cid}/Editor`}
                className="fw-bold h4 mb-0"
              >
                {assignment.title}
              </Link>

              {/* Module information */}
              <div className="ms-4">
                <span className="text-danger">Multiple Modules</span> |
                <b> Not available until</b> {assignment.available} |<b> Due:</b>{" "}
                {assignment.due} | 100 pts
              </div>
            </div>

            {/* Control buttons */}
            <div className="ms-auto">
              <LessonControlButtons />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Assignments;
