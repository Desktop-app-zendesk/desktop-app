import { Funnel, ArrowCircleLeft } from '@phosphor-icons/react';
import { useState } from 'react';
import FilterSelector from './FilterSelector';
import {
  ticketOptions,
  requesterOptions,
  requestDateOptions,
  typeOptions,
  priorityOptions,
} from './Constant';

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const filterOptions = [
    { label: 'Ticket Status', options: ticketOptions },
    { label: 'Requester', options: requesterOptions },
    { label: 'Request date', options: requestDateOptions },
    { label: 'Type', options: typeOptions },
    { label: 'Priority', options: priorityOptions },
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
        {filterOptions.map((option) => (
          <FilterSelector
            key={option.label}
            label={option.label}
            options={option.options}
          />
        ))}
      </div>
    </div>
  );
}
export default Sidebar;
