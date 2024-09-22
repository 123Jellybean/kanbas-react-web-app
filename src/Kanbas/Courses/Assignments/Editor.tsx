export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label> <br /> <br />
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of your Web
                application running on Netlify.  The landing page should include the following:
                Your full name and section
                Links to each of the lab assignments
                Link to the Kanbas application
                Links to all relevant source code repositories
                The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br />
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select>
                            <option value="Assignment">ASSIGNMENTS</option>
                            <option value="Quiz">QUIZ</option>
                            <option selected value="Exam">
                                EXAM</option> </select>
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select>
                            <option value="Percentage">Percentage</option>
                            <option value="Points">Points</option>
                            <option selected value="Letter">
                                Letter</option> </select>
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select>
                            <option value="Online">Online</option>
                            <option value="In-Person">In-Person</option>
                        </select>
                    </td> <br />
                </tr>

                <tr> <td align="left" valign="top">
                    <label>Online Entry Options</label><br />

                    <input type="checkbox" name="check-genre" id="wd-text-entry" />
                    <label htmlFor="wd-text-entry">Text Entry</label><br />

                    <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
                    <label htmlFor="wd-chkbox-drama">Drama</label><br />

                    <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
                    <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br />

                    <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
                    <label htmlFor="wd-chkbox-fantasy">Fantasy</label>
                </td>
                </tr>

                {/* Complete on your own */}

            </table>

            <button>Cancel</button> <button>Save</button>

        </div >
    );
}

