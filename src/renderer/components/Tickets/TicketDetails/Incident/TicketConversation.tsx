import { useNavigate } from 'react-router-dom';
import { Avatar } from '@material-tailwind/react';

function TicketConversation() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex border-b border-solid border-zen-gray-200 p-2 h-[90px]">
        <div className="w-40">
          <Avatar
            src="../images/test.png"
            alt="avatar"
            variant="circular"
            size="sm"
            onClick={() => navigate('/')}
          />
        </div>
        <div className="flex flex-col flex-grow flex-shrink flex-0 overflow-y-scroll ">
          <div
            role="presentation"
            className="text-zen-blue-400 text-sm cursor-pointer pb-1"
            onClick={() => navigate('/')}
          >
            <strong>The Customer</strong>
          </div>
          <div>
            <div className="text-sm max-h-20">
              <p>Hi there,</p>

              <p>
                I’m sending an email because I’m having a problem setting up
                your new product. Can you help me troubleshoot?
              </p>

              <p>
                Thanks,
                <br /> The Customer
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-solid border-zen-gray-200 p-1">
        <div className="flex">
          <div className="text-gray-800">To</div>
          <div className="flex justify-between w-full">
            <div className="inline-flex flex-nowrap items-center box-border border-0 max-w-full overflow-hidden align-middle no-underline whitespace-nowrap font-semibold text-sm rounded-full px-2 mr-1 min-w-30 text-gray-700 bg-gray-200">
              <img
                src="../images/test.png"
                alt="avatar"
                className="rounded-full w-4 h-4 mr-1"
              />
              <span className="mr-1">The Customer</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                aria-hidden="true"
                focusable="false"
                data-test-id="qa-email_ccs__email_label__edit"
                aria-label="Edit user"
                className="sc-1z0xs9s-4 juEjHa"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  d="M.5 11.5v-2L9.1.9c.2-.2.5-.2.7 0l1.3 1.3c.2.2.2.5 0 .7l-8.6 8.6h-2zm7-9l2 2"
                />
              </svg>
            </div>
            <button type="button" className="text-blue-500 hover:underline">
              CC
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TicketConversation;
