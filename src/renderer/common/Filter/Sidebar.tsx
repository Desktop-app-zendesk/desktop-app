function Filters() {
  return (
    <>
      <label htmlFor="selection" className="filter-label">
        Ticket Status
        <select id="selection" className="select-filter">
          <option value="new">New</option>
          <option value="open">Open</option>
          <option value="pending">Pending</option>
          <option value="solved">Solved</option>
        </select>
      </label>

      <label htmlFor="selection" className="filter-label">
        Requester
        <select id="selection" className="select-filter">
          <option value="any">Any</option>
          <option value="assignee">(assignee)</option>
          <option value="current user">(current user)</option>
        </select>
      </label>

      <label htmlFor="selection" className="filter-label">
        Request date
        <select id="selection" className="select-filter">
          <option value="any">In the last 24 hours</option>
          <option value="assignee">In the last 6 months</option>
          <option value="current user">In the last 7 days</option>
          <option value="assignee">In the last year</option>
          <option value="current user">Over a year ago</option>
        </select>
      </label>

      <label htmlFor="selection" className="filter-label">
        Type
        <select id="selection" className="select-filter">
          <option value="any">Any</option>
          <option value="assignee">-</option>
          <option value="current user">Question</option>
          <option value="assignee">Incident</option>
          <option value="current user">Problem</option>
          <option value="current user">Task</option>
        </select>
      </label>

      <label htmlFor="selection" className="filter-label">
        Priority
        <select id="selection" className="select-filter">
          <option value="any">Any</option>
          <option value="assignee">-</option>
          <option value="current user">Low</option>
          <option value="assignee">Normal</option>
          <option value="current user">High</option>
          <option value="current user">Urgent</option>
        </select>
      </label>
    </>
  );
}

export default Filters;
