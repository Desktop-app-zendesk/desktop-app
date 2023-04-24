import { useState } from 'react';
import Filter from 'renderer/common/Filter';
import Header from '../../common/Header';
import AllTickets from './AllTickets';
import MyTicket from './MyTickets';

export default function Tickets() {
  const [tab, setTab] = useState('allTickets');

  const getSelectedTabContainer = () => {
    switch (tab) {
      case 'allTickets': {
        return <AllTickets />;
      }
      case 'myTickets': {
        return <MyTicket />;
      }
      default: {
        return <AllTickets />;
      }
    }
  };

  return (
    <div>
      <Header />
      <Filter />
      <div className="px-4">
        <button
          className={`zen-tab-headers ${
            tab === 'allTickets' ? 'selected' : ''
          }`}
          onClick={() => {
            setTab('allTickets');
          }}
          type="button"
        >
          All Tickets
        </button>
        <button
          className={`zen-tab-headers ${tab === 'myTickets' ? 'selected' : ''}`}
          onClick={() => {
            setTab('myTickets');
          }}
          type="button"
        >
          My Tickets
        </button>
      </div>
      <div className="px-4">{getSelectedTabContainer()}</div>
    </div>
  );
}
