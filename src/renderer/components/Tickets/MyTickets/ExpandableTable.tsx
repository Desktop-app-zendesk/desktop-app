import React, { useState } from 'react';

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

const ExpandableTableRow: React.FC<{ data: DataRow }> = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    < >
    <table className='w-full table-auto'>
       
      <tr onClick={() => setExpanded(!expanded)}>
      
       
      
     
        <table className="w-full text-sm mt-1 ">
          <tbody>
            <tr className="border-b">
              <td className="px-6">{data.open}</td>
              <td className="pl-72">{data.sampleticket}</td>
              <td className="pl-96 ml-96  text-left">{data.details}</td>
            </tr>
          </tbody>
        </table>
        
 
      
    <div></div>
        {/* <td className="px-6 py-4 text-sm">{data.open}</td>
        <td className="ml-6 py-4 text-sm">{data.sampleticket}</td>
        <td className="ml-28 py-4 text-sm">{data.details}</td> */}
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
    <table className='w-full'>
        {/* <div className="relative overflow-x-12">
      <thead>
        <tr className="border-t border-b">
          <th className="px-6 py-4 text-sm">Open</th>
          <th className="px-6 py-4 text-sm">Sample Ticket 1</th>
          <th className="text-sm">Details</th>
         
        </tr>
      </thead>
      </div> */}
      
     
        <table className="w-full text-sm mt-1 text-left">
          <tbody>
            <tr className="border-t border-b">
              <th className="px-6 py-4 text-sm">Open</th>
              <th className="px-6 py-4 text-sm">Sample Ticket 1</th>
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
  const data: DataRow[] = [
    {
      id: 1,
      open: 'Open',
      sampleticket: '2',
      email: 'john.doe@example.com',
      details: ' 123 Main St, Anytown USA',
    },
    {
      id: 3,
      open: 'Close',
      sampleticket: '30',
      email: 'bob.johnson@example.com',
      details: '780 Oak St, Anytown UAE',
    },
    {
      id: 3,
      open: 'Open',
      sampleticket: '35',
      email: 'bob.johnson@example.com',
      details: '789 Oak St, Anytown USA',
    },
  ];

  return (
    <div>
     
      <Table data={data} />
    </div>
  );
};

export default App;

