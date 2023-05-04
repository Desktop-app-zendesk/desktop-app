import { useNavigate } from 'react-router-dom';
import { Avatar } from '@material-tailwind/react';

function TicketConversation() {
  const navigate = useNavigate();
  return (
    <div className="flex border-b border-solid border-zen-gray-200 p-2">
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
          className="text-zen-gray-800 text-sm cursor-pointer pb-1"
          onClick={() => navigate('/')}
        >
          <strong>The Customer</strong>
        </div>
        <div>
          <div className="text-sm max-h-20">
            <p>Hi there,</p>

            <p>
              I’m sending an email because I’m having a problem setting up your
              new product. Can you help me troubleshoot?
            </p>

            <p>
              Thanks,
              <br /> The Customer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TicketConversation;
