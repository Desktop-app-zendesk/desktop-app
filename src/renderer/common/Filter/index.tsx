import { Funnel, ArrowCircleLeft } from '@phosphor-icons/react';
import { useState } from 'react';
import FilterSelector from './Sidebar';

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const ticketOptions = [
    { value: 'new', label: 'New' },
    { value: 'open', label: 'Open' },
    { value: 'pending', label: 'Pending' },
    { value: 'solved', label: 'Solved' },
  ];
  const requesterOptions = [
    { value: 'any', label: 'Any' },
    { value: 'assignee', label: '(assignee)' },
    { value: 'current user', label: '(current user)' },
  ];
  const requestDateOptions = [
    { value: 'any', label: 'In the last 24 hours' },
    { value: 'assignee', label: 'In the last 6 months' },
    { value: 'current user', label: 'In the last 7 days' },
    { value: 'assignee', label: 'In the last year' },
    { value: 'current user', label: 'Over a year ago' },
  ];
  const typeOptions = [
    { value: 'any', label: 'Any' },
    { value: 'assignee', label: '-' },
    { value: 'current user', label: 'Question' },
    { value: 'assignee', label: 'Incident' },
    { value: 'current user', label: 'Problem' },
    { value: 'current user', label: 'Task' },
  ];

  const priorityOptions = [
    { value: 'any', label: 'Any' },
    { value: 'assignee', label: '-' },
    { value: 'current user', label: 'Low' },
    { value: 'assignee', label: 'Normal' },
    { value: 'current user', label: 'High' },
    { value: 'current user', label: 'Urgent' },
  ];

  return (
    <div className="filter-sidebar">
      <button
        className="filter-funnel"
        type="button"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <Funnel size={12} color="#FFFFFF" />
      </button>

      {showSidebar && (
        <button
          className="filter-collapse"
          type="button"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <ArrowCircleLeft size={32} />
        </button>
      )}
      <div
        className={`sidebar-padding ${
          showSidebar ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <FilterSelector label="Ticket Status" options={ticketOptions} />
        <FilterSelector label="Requester" options={requesterOptions} />
        <FilterSelector label="Requester" options={requestDateOptions} />
        <FilterSelector label="Requester" options={typeOptions} />
        <FilterSelector label="Requester" options={priorityOptions} />
      </div>
    </div>
  );
}
export default Sidebar;
