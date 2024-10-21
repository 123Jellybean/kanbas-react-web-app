import { Link, NavLink, useParams } from "react-router-dom";
import * as db from "../../Database";
import { FaChevronDown } from "react-icons/fa";

export default function AssignmentEditor() {
  const { cid } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );

  return (
    <div id="wd-assignments-editor">
      <h5>Assignment Name</h5>

    </div>
  );
}
