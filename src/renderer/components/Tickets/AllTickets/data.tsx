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
        open: 'open',
        sampleticket: '10',
        email: 'rans.johnson@example.com',
        details: 'Zendesk Site not works properly ',
    },
    {
      id: 3,
      open: 'Close',
      sampleticket: '30',
      email: 'bob.johnson@example.com',
      details: 'site Error occurs on tickets creates ',
    },
    {
      id: 3,
      open: 'Open',
      sampleticket: '35',
      email: 'bob.johnson@example.com',
      details: 'Zendesk call features not working',
    },
  ];