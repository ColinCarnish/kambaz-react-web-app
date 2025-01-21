import React from 'react';
export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><b>Assignment Name</b></label>
        <br></br>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <label htmlFor="wd-points"><b>Points</b></label>
      <br />
      <input id="wd-points" type="number" value={100} style={{ width: '100px' }} />
      <br /><br />
      
      <label htmlFor="wd-assignment-group"><b>Assignment Group</b></label>
      <br />
      <select id="wd-assignment-group" style={{ width: '100%' }}>
        <option value="assignments">ASSIGNMENTS</option>
      </select>
      <br /><br />
      
      <label htmlFor="wd-display-grade"><b>Display Grade as</b></label>
      <br />
      <select id="wd-display-grade" style={{ width: '100%' }}>
        <option value="percentage">Percentage</option>
      </select>
      <br /><br />
      
      <label htmlFor="wd-submission-type"><b>Submission Type</b></label>
      <br />
      <select id="wd-submission-type" style={{ width: '100%' }}>
        <option value="online">Online</option>
      </select>
      <br /><br />
      
      <fieldset style={{ border: '1px solid #ccc', padding: '10px' }}>
        <legend><b>Online Entry Options</b></legend>
        <div>
          <input type="checkbox" id="text-entry" />
          <label htmlFor="text-entry"> Text Entry</label>
        </div>
        <div>
          <input type="checkbox" id="website-url" />
          <label htmlFor="website-url"> Website URL</label>
        </div>
        <div>
          <input type="checkbox" id="media-recordings" />
          <label htmlFor="media-recordings"> Media Recordings</label>
        </div>
        <div>
          <input type="checkbox" id="student-annotation" />
          <label htmlFor="student-annotation"> Student Annotation</label>
        </div>
        <div>
          <input type="checkbox" id="file-uploads" />
          <label htmlFor="file-uploads"> File Uploads</label>
        </div>
      </fieldset>
      <br />

      <label htmlFor="wd-assign-to"><b>Assign to</b></label>
      <br />
      <input id="wd-assign-to" value="Everyone" style={{ width: '100%' }} />
      <br /><br />
      
      <label htmlFor="wd-due-date"><b>Due</b></label>
      <br />
      <input id="wd-due-date" type="date" defaultValue="2024-05-13" style={{ width: '100%' }} />
      <br /><br />
      
      <label htmlFor="wd-available-dates"><b>Available from</b></label>
      <br />
      <input id="wd-available-from" type="date" defaultValue="2024-05-06" style={{ width: '48%', marginRight: '4%' }} />
      <input id="wd-available-until" type="date" defaultValue="2024-05-20" style={{ width: '48%' }} />
      <br /><br />
      
      <button style={{ marginRight: '10px' }}>Cancel</button>
      <button>Save</button>
    </div>
  );
}
  