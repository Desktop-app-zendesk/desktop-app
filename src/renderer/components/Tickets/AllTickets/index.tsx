/* eslint-disable promise/always-return */
/* eslint-disable no-console */
import { useEffect } from 'react';
import axios from 'axios';
import ExpandableRowTable from './ExpandableRowTable';

function AllTickets() {
  useEffect(() => {
    axios
      .get('http://localhost:3000/tickets')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <ExpandableRowTable row={undefined} />;
}

export default AllTickets;
