export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label> <br /> <br />
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online. Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section Links to each of the lab
        assignments Link to the Kanbas application Links to all relevant source
        code repositories The Kanbas application should include a link to
        navigate back to the landing page.
      </textarea>
      <br />
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select>
                <option value="Assignment">ASSIGNMENTS</option>
                <option value="Quiz">QUIZ</option>
                <option selected value="Exam">
                  EXAM
                </option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select>
                <option value="Percentage">Percentage</option>
                <option value="Points">Points</option>
                <option selected value="Letter">
                  Letter
                </option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select>
                <option value="Online">Online</option>
                <option value="In-Person">In-Person</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label>Online Entry Options</label> <br />
            </td>
            <td>
              <div>
                <input type="checkbox" name="check-entry" id="wd-text-entry" />
                <label htmlFor="wd-text-entry">Text Entry</label>
                <br />

                <input type="checkbox" name="check-entry" id="wd-website-url" />
                <label htmlFor="wd-website-url">Website URL</label>
                <br />

                <input
                  type="checkbox"
                  name="check-entry"
                  id="wd-media-recordings"
                />
                <label htmlFor="wd-media-recordings">Media Recordings</label>
                <br />

                <input
                  type="checkbox"
                  name="check-entry"
                  id="wd-student-annotation"
                />
                <label htmlFor="wd-student-annotation">
                  Student Annotation
                </label>
                <br />

                <input type="checkbox" name="check-entry" id="wd-file-upload" />
                <label htmlFor="wd-file-upload">File Uploads</label>
              </div>
            </td>
          </tr>
          <br />

          {/* Assign To & Due */}

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td align="left" valign="top">
              <label htmlFor="wd-assign-to">Assign To</label>
              <input id="wd-assign-to" value="Everyone" />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input type="date" id="wd-due-date" value="2024-05-13" />
            </td>
          </tr>

          {/* Available from - Until */}
          <tr>
            <td align="right" />
            <td align="left" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
              <br />
              <input type="date" id="wd-available-from" value="2024-05-06" />
            </td>

            <td align="left" valign="top">
              <label htmlFor="wd-available-until">Until</label>
              <br />
              <input type="date" id="wd-available-until" value="2024-05-20" />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <hr />
      <div style={{ textAlign: "right" }}>
        <button>Cancel</button> <button>Save</button>
      </div>
    </div>
  );
}
