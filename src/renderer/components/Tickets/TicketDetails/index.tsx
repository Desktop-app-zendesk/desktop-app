import { useState } from 'react';
import DialogForm from '../../../common/Dialog';
import Incident from './Incident';
import Customer from './Customer';

function TicketDetails() {
  const [segment, setSegment] = useState('incident');

  const getSelectedSegment = () => {
    switch (segment) {
      case 'customer': {
        return <Customer />;
      }
      case 'incident': {
        return <Incident />;
      }
      default: {
        return <Incident />;
      }
    }
  };

  return (
    <div>
      <div className="border-t border-b border-solid border-zen-gray-200 py-2">
        <div className="inline-flex rounded-md shadow-sm m-1" role="group">
          <DialogForm
            id="add_new_organization"
            title="Add new organization"
            dialogBtnName="Example (create)"
            className="px-2 py-1 text-sm font-medium text-zen-gray-800 border border-zen-gray-200 rounded-l-lg rounded-r-none bg-zen-white-100 hover:bg-zen-gray-300 shadow-none normal-case"
          />
          <button
            type="button"
            className={`px-2 py-1 text-sm font-medium text-zen-gray-800 border border-zen-gray-200  ${
              segment === 'customer' ? 'bg-zen-gray-300' : 'bg-zen-white-100'
            } hover:bg-zen-gray-300`}
            onClick={() => {
              setSegment('customer');
            }}
          >
            The Customer
          </button>
          <button
            type="button"
            className={`px-2 py-1 text-sm font-medium text-gray-800 border border-gray-200 rounded-r-md ${
              segment === 'incident' ? 'bg-zen-gray-300' : 'bg-zen-white-100'
            } hover:bg-zen-gray-300`}
            onClick={() => {
              setSegment('incident');
            }}
          >
            <span className="inline-block  text-white max-w-[max-content]  max-h-[max-content]  rounded-md bg-zen-orange-500 m-1 px-1">
              Open
            </span>
            Incident
          </button>
        </div>
      </div>
      <div>{getSelectedSegment()}</div>
    </div>
  );
}

export default TicketDetails;
