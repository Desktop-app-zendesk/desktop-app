import { Funnel, ArrowCircleLeft } from '@phosphor-icons/react';
import { useState } from 'react';
import Filters from './Sidebar';

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

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
        className={`top-0 right-0 bg-white p-20 pl-22 pr-23 px-5 py-14 text-white fixed h-full z-40  ease-in-out duration-300
      }
    } ${showSidebar ? 'translate-x-0 ' : 'translate-x-full'}`}
      >
        <Filters />
      </div>
    </div>
  );
}
export default Sidebar;
