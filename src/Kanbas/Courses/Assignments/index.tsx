import { BsGripVertical } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControls from "./AssignmentControls";
import { FaPlus } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { PiNotebook } from "react-icons/pi";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
  const { aid } = useParams();
  const assignments = db.assignments;

  return (
    <div>
      <AssignmentControls />
      <br />
      <ul id="wd-assignmentss" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          {/* Header for the Assignments section */}
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <MdArrowDropDown className="fs-3" />
            ASSIGNMENTS
            <IoEllipsisVertical className="float-end fs-3" />
            <FaPlus className="float-end me-3 fs-4" />
          </div>
          {/* Render each assignment dynamically */}
          <ul className="wd-lessons list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === aid)
              .map((assignment: any) => (
                <li
                  key={assignment._id}
                  className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center"
                >
                  <div>
                    <BsGripVertical className="mt-4 me-2 fs-2" />
                    <PiNotebook
                      className="mt-4 me-2 fs-2"
                      style={{ color: "green" }}
                    />
                    <span className="ms-3 fw-bold">{assignment.name}</span>
                    <br />
                    <span className="text-danger ms-5 ps-5">
                      {assignment.module}{" "}
                    </span>{" "}
                    |<b> Not available until</b> {assignment.opens} |
                    <div className="ms-5 ps-5 text-muted">
                      <b>Due</b> {assignment.due} | 100 pts
                    </div>
                  </div>
                  <LessonControlButtons />
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
