import React from 'react';
import { useNavigate } from 'react-router-dom';

interface AllTicketsProps {}

export const AllTickets: React.FC<AllTicketsProps> = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className="container my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-6 xl:gap-12 items-center">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight">
              All Tickets
            </h2>
          </div>
          <div className="mb-6 lg:mb-0">
            <button
              id="allticket"
              className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              role="button"
              onClick={handleClick}
            >
              Back
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
