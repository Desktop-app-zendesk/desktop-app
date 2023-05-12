import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AllTickets() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/ticket-details');
  };
  useEffect(() => {
    axios
      .get('http://localhost:3000/tickets')
      // eslint-disable-next-line promise/always-return
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res.data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, []);
  return (
    <section>
      <div
        className="relative overflow-x-12 cursor-pointer"
        onClick={() => {
          handleClick();
        }}
        aria-hidden="true"
      >
        <table className="w-full text-sm mt-1 text-left">
          <tbody>
            <tr className="border-t border-b">
              <td className="px-6 py-4 text-sm">Open</td>
              <td className="px-6 py-4 text-sm">Sample Ticket</td>
              <td className="text-sm">details</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default AllTickets;
