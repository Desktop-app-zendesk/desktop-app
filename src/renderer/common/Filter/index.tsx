import { Funnel, ArrowCircleLeft } from '@phosphor-icons/react';
import { useState } from 'react';

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex items-center justify-end mb-1 px-4">
      <button
          className="bg-zen-green-800 px-1 py-1 rounded text-white"
          type="button"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <Funnel size={12} color="#FFFFFF" />
        </button>
 
      {showSidebar && (
        <button
          className="flex text-4xl text-black items-center cursor-pointer fixed right-10 top-6 z-50"
          type="button"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <ArrowCircleLeft size={32} />
        </button>
      )
}
    
      <div
        className={`top-0 right-0 bg-white p-20 pl-22 pr-23 px-5 py-14 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <label
          htmlFor="selection"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
        >
          Ticket Status
          <select
            id="selection"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="new">New</option>
            <option value="open">Open</option>
            <option value="pending">Pending</option>
            <option value="solved">Solved</option>
          </select>
        </label>

        <label
          htmlFor="selection"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
        >
          Requester
          <select
            id="selection"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="any">Any</option>
            <option value="assignee">(assignee)</option>
            <option value="current user">(current user)</option>
          </select>
        </label>

        <label
          htmlFor="selection"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
        >
          Request date
          <select
            id="selection"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="any">In the last 24 hours</option>
            <option value="assignee">In the last 6 months</option>
            <option value="current user">In the last 7 days</option>
            <option value="assignee">In the last year</option>
            <option value="current user">Over a year ago</option>
          </select>
        </label>

        <label
          htmlFor="selection"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
        >
          Type
          <select
            id="selection"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="any">Any</option>
            <option value="assignee">-</option>
            <option value="current user">Question</option>
            <option value="assignee">Incident</option>
            <option value="current user">Problem</option>
            <option value="current user">Task</option>
          </select>
        </label>

        <label
          htmlFor="selection"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
        >
         Priority
          <select
            id="selection"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="any">Any</option>
            <option value="assignee">-</option>
            <option value="current user">Low</option>
            <option value="assignee">Normal</option>
            <option value="current user">High</option>
            <option value="current user">Urgent</option>
          </select>
        </label>
      </div>
    </div>
  );
}
export default Sidebar;
