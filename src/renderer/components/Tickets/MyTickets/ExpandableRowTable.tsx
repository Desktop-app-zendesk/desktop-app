/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Moment from 'moment';
import { useTable, Column, TableOptions } from 'react-table';

interface Data {
  id: number;
  status: string;
  subject: string;
  email: string;
  requester_id: string;
  created_at: string;
  priority: string;
}

const columns: Column<Data>[] = [
  {
    Header: 'Ticket status',
    accessor: 'status',
  },
  {
    Header: 'Subject',
    accessor: 'subject',
  },
  {
    Header: 'Requester',
    accessor: 'requester_id',
  },
];

interface RowProps {
  row: any;
}
interface DataProps {
  data: any;
}


const emojis = ['👉', '👇'];

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
          {original?.status}{' '}
        </td>
        <td className="py-1">{original?.subject}</td>
        <td className="py-1">{original?.requester_id}</td>
      </tr>

      {isExpanded && (
        <tr>
          <td colSpan={10000}>
            <p>Status:-{original?.status}</p>
            <p>SamplTicket:-{original?.subject}</p>
            <p>Requester:-{original?.requester_id}</p>
            <p>Requested:-{Moment(original.created_at).format('DD-MM-YYYY')}</p>
            <p>Priority:-{original?.priority}</p>
          </td>
        </tr>
      )}
    </>
  );
};

const ExpandableRowTable: React.FC<DataProps> = ({ data }) => {
  const tableOptions: TableOptions<Data> = { columns, data }
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
