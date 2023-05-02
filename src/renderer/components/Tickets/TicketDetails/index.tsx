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
      <div className="border-t border-b border-solid border-zen-border py-2">
        <div className="inline-flex rounded-md shadow-sm m-1" role="group">
          <DialogForm
            id="add_new_organization"
            title="Add new organization"
            dialogBtnName="Example (create)"
            className="px-2 py-1 text-sm font-medium text-zen-gray-text border border-zen-grayborder rounded-l-lg rounded-r-none bg-zen-whitebg hover:bg-zen-selectedbg text-lowercase"
          />
          <button
            type="button"
            className={`px-2 py-1 text-sm font-medium text-zen-gray-text border border-zen-grayborder  ${
              segment === 'customer' ? 'bg-zen-selectedbg' : 'bg-zen-whitebg'
            } hover:bg-zen-selectedbg`}
            onClick={() => {
              setSegment('customer');
            }}
          >
            The Customer
          </button>
          <button
            type="button"
            className={`px-2 py-1 text-sm font-medium text-zen-gray-text border border-zen-grayborder rounded-r-md ${
              segment === 'incident' ? 'bg-zen-selectedbg' : 'bg-zen-whitebg'
            } hover:bg-zen-selectedbg`}
            onClick={() => {
              setSegment('incident');
            }}
          >
            <span className="inline-block  text-white max-w-[max-content]  max-h-[max-content]  rounded-md bg-zen-open m-1 px-1">
              Open
            </span>
            Incident
          </button>
        </div>
      </div>
      <div>
        <div className="px-1">{getSelectedSegment()}</div>
      </div>
    </div>
  );
}

export default TicketDetails;
