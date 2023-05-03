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


export const data: DataRow[] = [
    {
        id: 1,
        open: 'Close',
        sampleticket: '19',
        email: 'toms.johnson@example.com',
        details: 'Errors in ticket system occurs',
    },
    {
      id: 3,
      open: 'Open',
      sampleticket: '23',
      email: 'roy.johnson@example.com',
      details: 'Features not working proprly',
    },
    {
      id: 3,
      open: 'Close',
      sampleticket: '33',
      email: 'joy.johnson@example.com',
      details: 'Email not sent from Zendesk',
    },
  ];