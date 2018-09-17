import React from "react";

const Search = () => (
  <form>
  <div className="form-group">
    <label for="topic">Topic</label>
    <input type="text" className="form-control" id="topic" placeholder="Topic" />
  </div>
  <div className="form-group">
    <label for="startYear">Start Year</label>
    <input type="text" className="form-control" id="startYear" placeholder="Start Year" />
  </div>
  <div className="form-group">
    <label for="endYear">End Year</label>
    <input type="text" className="form-control" id="endYear" placeholder="End Year" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <a href="/jumbo">Click Me</a>
</form>
);

export default Search;