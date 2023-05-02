import {Funnel, ArrowCircleLeft} from '@phosphor-icons/react';
import {useState} from 'react'; 

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex items-center justify-end mb-1 px-4">
      {showSidebar ? (
        <button
          className="flex text-4xl text-black items-center cursor-pointer fixed right-10 top-6 z-50"
          type="button"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <ArrowCircleLeft size={32} />
        </button>
      ) : (
        <button
          className="bg-zen-green-800 px-1 py-1 rounded text-white"
          type="button"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <Funnel size={12} color="#FFFFFF" />
        </button>
      )}
      <div
        className={`top-0 right-0 w-[30vw] bg-white p-50 pl-50 px-8 py-14 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
    
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
        Ticket Status
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
    </div>
  );
}
export default Sidebar;
