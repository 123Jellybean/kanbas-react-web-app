import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function AssignmentControls() {
  return (
    <div
      id="wd-assignment-controls"
      className="d-flex justify-content-between align-items-right"
    >
      <div className="input-group" style={{ width: "400px" }}>
        <span className="input-group-text">
          <CiSearch />
        </span>
        <input
          type="text"
          placeholder="Search..."
          className="form-control"
        />
      </div>

      <div>
        <button
          id="wd-group-assignment-btn"
          className="btn btn-lg btn-secondary me-2"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Group
        </button>

        <Link to="/Kanbas/Courses/Assignments/editor">
          <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger">
            <FaPlus
              className="position-relative me-2"
              style={{ bottom: "1px" }}
            />
            Assignment
          </button>
        </Link>
      </div>
    </div>
  );
}
