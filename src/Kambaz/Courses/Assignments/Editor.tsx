export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><b>Assignment Name</b></label>
        <br></br>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br /><br />    
            <label htmlFor="wd-points"><b>Points </b></label>
            <input id="wd-points" type="number" value={100} />
            <br /><br />

            <label htmlFor="wd-assignment-group"><b>Assignment Group </b></label>
            <select id="wd-assignment-group">
                <option value="assignments">ASSIGNMENTS </option>
            </select>
            <br /><br />

            <label htmlFor="wd-display-grade"><b>Display Grade as </b></label>
            <select id="wd-display-grade">
                <option value="percentage">Percentage</option>
            </select>
            <br /><br />

            <label htmlFor="wd-submission-type"><b>Submission Type </b></label>
            <select id="wd-submission-type">
                <option value="online">Online</option>
            </select>
            <br /><br />

            <fieldset>
                <legend><b>Online Entry Options </b></legend>
                <input type="checkbox" id="text-entry" />
                <label htmlFor="text-entry"> Text Entry</label>
                <br />
                <input type="checkbox" id="website-url" />
                <label htmlFor="website-url"> Website URL</label>
                <br />
                <input type="checkbox" id="media-recordings" />
                <label htmlFor="media-recordings"> Media Recordings</label>
                <br />
                <input type="checkbox" id="student-annotation" />
                <label htmlFor="student-annotation"> Student Annotation</label>
                <br />
                <input type="checkbox" id="file-uploads" />
                <label htmlFor="file-uploads"> File Uploads</label>
            </fieldset>
            <br /><br />

            <label htmlFor="wd-assign-to"><b>Assign to </b></label>
            <input id="wd-assign-to" value="Everyone" />
            <br /><br />

            <label htmlFor="wd-due-date"><b>Due </b></label>
            <input id="wd-due-date" type="date" defaultValue="2024-05-13" />
            <br /><br />

            <label htmlFor="wd-available-dates"><b>Available from </b></label>
            <input id="wd-available-from" type="date" defaultValue="2024-05-06" />
            <input id="wd-available-until" type="date" defaultValue="2024-05-20" />
            <br /><br />

        <button>Cancel</button>
        <button>Save</button>
    </div>
  );
}
  
