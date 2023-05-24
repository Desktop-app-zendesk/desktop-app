import { useState, useContext, useEffect } from "react";
import ExpandableRowTable from './ExpandableRowTable';
import { TicketDetails } from "renderer/common/Models";
import { AppContext } from "renderer/containers/AppContext";
import { getMyTickets } from "renderer/common/service/ticketService";


function MyTicket() {
  const value: any = useContext(AppContext);
  const { ticketList, setTicketList } = value;
  const [tickets, setTickets] = useState<Array<TicketDetails>>([]);

  const fetchApi = async () => {
    const response = await getMyTickets()
    setTickets(response?.data)
    setTicketList(response?.data)
    console.log("ticketList", ticketList)
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return <ExpandableRowTable data={tickets} />;
}

export default MyTicket;
