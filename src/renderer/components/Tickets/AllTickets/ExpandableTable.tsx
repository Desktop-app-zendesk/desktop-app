import React, { useState } from 'react';
import { data } from '../AllTickets/data';
type DataRow = {
  id: number;
  open: string;
  sampleticket: string;
  email: string;
  details: string;
};

type TableProps = {
  data: DataRow[];
};

const emojis = ['👉', '👇', ];
export const ExpandableTableRow: React.FC<{ data: DataRow }> = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const [currentEmoji, setCurrentEmoji] = useState(emojis[0]);

  const handleEmojiToggle = () => {
    const currentIndex = emojis.indexOf(currentEmoji);
    const nextIndex = (currentIndex + 1) % emojis.length;
    setCurrentEmoji(emojis[nextIndex]);
  };

  return (
    <>
      <table className="w-full table-auto">
        <tr onClick={() => setExpanded(!expanded)}>
          <table className="w-full text-sm mt-1 ">
            <tbody>
              <tr className="border-b">
                <td className="px-6" onClick={handleEmojiToggle}>{currentEmoji} {data.open}</td>
                <td className="pl-80">{data.sampleticket}</td>
                <td className="pl-96 ml-96  text-left">{data.details}</td>
              </tr>
            </tbody>
          </table>

          <div></div>
        </tr>
      </table>
      {expanded && (
        <tr>
          <td colSpan={5}>
            <p>Additional details about {data.open}:</p>
            <ul>
              <li>sample: {data.sampleticket}</li>
              <li>Email: {data.email}</li>
              <li>Address: {data.details}</li>
            </ul>
          </td>
        </tr>
      )}
    </>
  );
};

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="w-full">
      <table className="w-full text-sm mt-1 text-left">
        <tbody>
          <tr className="border-t border-b">
            <th className="px-8 py-4 text-sm">Open</th>
            <th className="px-8 py-4 text-sm">Sample Ticket </th>
            <th className="text-sm pr-6">details</th>
          </tr>
        </tbody>
      </table>

      <div>
        {data.map((row) => (
          <ExpandableTableRow key={row.id} data={row} />
        ))}
      </div>
    </table>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <Table data={data} />
    </div>
  );
};

export default App;
