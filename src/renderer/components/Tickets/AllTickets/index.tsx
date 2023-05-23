import { useEffect } from 'react';
import axios from 'axios';
import ExpandableRowTable from './ExpandableRowTable';

function AllTickets() {
  const fetchApi = async () => {
    const apiData = await axios.get('http://localhost:3000/tickets');
    console.log(apiData); // eslint-disable-line
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return <ExpandableRowTable row={undefined} />;

}

export default AllTickets;
