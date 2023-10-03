import { useState, useContext, useEffect } from 'react';
import ExpandableRowTable from './ExpandableRowTable';
import { TicketDetails } from "renderer/common/Models";
import { AppContext } from 'renderer/containers/AppContext';
import { getTickets } from '../../../common/service/ticketService'

function AllTickets() {
  const value: any = useContext(AppContext);
  const { ticketList, setTicketList } = value;
  const [tickets, setTickets] = useState<Array<TicketDetails>>([]);

  const fetchApi = async () => {
    const response = await getTickets()
    setTickets(response?.data)
    setTicketList(response?.data)
  };
  
  useEffect(() => {
    fetchApi();
  }, []);

  return <ExpandableRowTable data={tickets} />;
}

export default AllTickets;
