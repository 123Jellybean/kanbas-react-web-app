import { Link, NavLink, useParams } from "react-router-dom";
import * as db from "../../Database";
import { FaChevronDown } from "react-icons/fa";

export default function AssignmentEditor() {
  const { aid } = useParams();
  const assignments = db.assignments;
  const links = [
    "Cancel",
    "Save"
  ]
  return (
    <div id="wd-assignments-editor">
      <h5>Assignment Name</h5>
          {assignments.map((assignment: any) => (
            <div>
      <input
        defaultValue={assignment.name}
        placeholder="Assignment Name"
        className="form-control mb-2 "
      />
      <br />
      <textarea
        defaultValue={assignment.description}
        className="form-control mb-2"
        rows={8} // Adjust the number of visible rows as needed
        style={{ resize: "vertical" }} // Allow vertical resizing
      />

      {/* Wrap the table and buttons in a flex container */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* Table for form fields */}
        <div style={{ flexGrow: 1 }}>
          <table align="right">
            <tbody>
              <tr>
                <td align="right">
                  <p className="mb-2 mt-3 me-3">Points</p>
                </td>
                <td style={{ width: "70%" }}>
                  <input
                    defaultValue={assignment.points}
                    placeholder="numerical value"
                    className="form-control mb-2 mt-2"
                  />
                </td>
              </tr>

              <tr>
                <td align="right" valign="top">
                  <p className="mb-2 mt-3 me-3">Assignment Group</p>
                </td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <select
                      className="form-control mb-2 mt-3"
                      style={{ flex: 1, paddingRight: "30px" }}
                    >
                      <option value="Assignment">ASSIGNMENTS</option>
                      <option value="Quiz">QUIZ</option>
                      <option value="Exam">EXAM</option>
                    </select>
                    <FaChevronDown
                      className="mb-2 mt-3"
                      style={{
                        position: "absolute",
                        right: "10px",
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td align="right" valign="top">
                  <p className="mb-2 mt-3 me-4">Display Grade as</p>
                </td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <select
                      className="form-control mb-4 mt-3"
                      style={{ flex: 1, paddingRight: "30px" }}
                    >
                      <option value="Assignment">Percentage</option>
                      <option value="Quiz">Points</option>
                      <option value="Exam">Letter</option>
                    </select>
                    <FaChevronDown
                      className="mb-2"
                      style={{
                        position: "absolute",
                        right: "10px",
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td align="right" valign="top">
                  <p className="mb-2 mt-3 me-4">Submission Type</p>
                </td>
                <td className="form-control mb-3">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <select className="form-control mb-2 mt-3">
                      <option value="Assignment">Online</option>
                      <option value="Quiz">In-Person</option>
                    </select>
                    <FaChevronDown
                      className="mb-2 mt-3"
                      style={{
                        position: "absolute",
                        right: "10px",
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                  <h6>
                    <b>Online Entry Options</b>
                  </h6>
                  <input
                    type="checkbox"
                    name="check-entry"
                    id="wd-text-entry"
                  />
                  <label className="ms-2">Text Entry</label> <br />
                  <input
                    type="checkbox"
                    name="check-entry"
                    id="wd-website-url"
                  />
                  <label className="ms-2">Website URL</label> <br />
                  <input type="checkbox" name="check-entry" id="wd-media-url" />
                  <label className="ms-2">Media Recordings</label> <br />
                  <input
                    type="checkbox"
                    name="check-entry"
                    id="wd-annotate-url"
                  />
                  <label className="ms-2">Student Annotation</label> <br />
                  <input type="checkbox" name="check-entry" id="wd-file-url" />
                  <label className="ms-2">File Uploads</label> <br />
                </td>
              </tr>
              {/* Assign To & Due */}
              <tr>
                <td align="right" valign="top">
                  <h6 className="me-4 mt-2">Assign</h6>
                </td>
                <div className="form-control">
                  <h6 className="mt-2">
                    <b>Assign To</b>
                  </h6>
                  <input
                    id="wd-assign-to"
                    value="Everyone"
                    className="form-control mb-2"
                  />
                  <h6>
                    <b>Due</b>
                  </h6>
                  <input
                    type="date"
                    id="wd-due-date"
                    className="form-control mb-2"
                    value="2024-05-13"
                    style={{ width: "100%" }}
                  />
                  <tr>
                    <td style={{ width: "50%" }}>
                      <h6>
                        <b>Available from</b>
                      </h6>
                      <input
                        type="date"
                        id="wd-available-from"
                        className="form-control mb-2"
                        value={assignment.opens}
                        placeholder="2024-05-06"
                      />
                    </td>
                    <td style={{ width: "50%" }}>
                      <h6>
                        <b>Until</b>
                      </h6>
                      <input
                        type="date"
                        id="wd-available-from"
                        className="form-control mb-2"
                        value={assignment.due}
                      />
                    </td>
                  </tr>
                </div>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Buttons */}
        <hr />

        <div style={{ textAlign: "right", marginTop: "10px" }}>
        <nav>
        {links.map((link) => (
          <NavLink
            key={link}
            to={`/Kanbas/Courses/${aid}/${link}`}
            className={({ isActive }) =>
              isActive
                ? "list-group-item custom-active border border-0"
                : "list-group-item custom-inactive border border-0"
            }
          >
            {link}
          </NavLink>
        ))}
      </nav>
          <button className="btn btn-secondary me-2">Cancel</button>
          <button className="btn btn-danger">Save</button>
        </div>
      </div>
    </div>
      ))}
      </div>
  );
}
