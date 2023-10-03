export interface TicketDetails {
  id: number;
  status: string;
  subject: string;
  email: string;
  requester_id: string;
  created_at: string;
  priority: string;
}

export interface TicketList {
  ticketList: any;
  setTicketList?: Function;
}
