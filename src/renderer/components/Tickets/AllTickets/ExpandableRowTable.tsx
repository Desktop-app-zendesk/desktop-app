/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo, useState } from 'react';
import { useTable, Column, TableOptions } from 'react-table';
import { Link } from 'react-router-dom';
import { Eye } from '@phosphor-icons/react';

interface Data {
  id: number;
  ticketstatus: string;
  subject: string;
  email: string;
  requester: string;
  requested: string;
  priority: string;
}

const data: Data[] = [
  {
    id: 1,
    ticketstatus: 'Close',
    subject: 'Zendesk Site not works properly',
    email: 'john.doe@example.com',
    requester: 'Customer',
    requested: '26jan 2023',
    priority: 'Medium',
  },
  {
    id: 2,
    ticketstatus: 'Open',
    subject: 'site Error occurs on tickets creates',
    email: 'jane.doe@example.com',
    requester: 'Customer',
    requested: '1jan 2023',
    priority: 'Low',
  },
  {
    id: 3,
    ticketstatus: 'Close',
    subject: 'Zendesk call features not working',
    email: 'bob.smith@example.com',
    requester: 'Customer',
    requested: '15march 2023',
    priority: 'High',
  },
];

const columns: Column<Data>[] = [
  {
    Header: 'Ticket status',
    accessor: 'ticketstatus',
  },
  {
    Header: 'Subject',
    accessor: 'subject',
  },
  {
    Header: 'Requester',
    accessor: 'requester',
  },
];

interface RowProps {
  row: any;
}

 const emojis = ['➡️','⬇️'];
const Row: React.FC<RowProps> = ({ row }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const { original } = row;
  const [currentEmoji, setCurrentEmoji] = useState(emojis[0]);

  const handleEmojiToggle = () => {
    const currentIndex = emojis.indexOf(currentEmoji);
    const nextIndex = (currentIndex + 1) % emojis.length;
    setCurrentEmoji(emojis[nextIndex]);
  };

  return (
    <>
      <tr onClick={() => setIsExpanded(!isExpanded)} className="border-b">
        <td className="py-1" onClick={handleEmojiToggle} aria-hidden="true">
          {currentEmoji}
          {original.ticketstatus}
        </td>
        <td className="py-1">{original.subject}</td>
        <td className="py-1">{original.requester}</td>
        <Link to="/ticket-details"><Eye /></Link>
      </tr>
          
      {isExpanded && (
        <tr>
          <td colSpan={10000}>
            <p>Status:-{original.ticketstatus}</p>
            <p>SamplTicket:-{original.subject}</p>
            <p>Requester:-{original.requester}</p>
            <p>Requested:-{original.requested}</p>
            <p>Priority:-{original.priority}</p>
          </td>
        </tr>
      )}
    </>
  );
};

const ExpandableRowTable: React.FC<RowProps> = () => {
  const tableOptions: TableOptions<Data> = useMemo(
    () => ({ columns, data }),
    []
  );
  const tableInstance = useTable(tableOptions);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()} className="w-full text-sm mt-1 text-left">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            className="border-t border-b"
          >
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} className="  py-4 text-sm ">
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return <Row row={row} />;
        })}
      </tbody>
    </table>
  );
};

export default ExpandableRowTable;
