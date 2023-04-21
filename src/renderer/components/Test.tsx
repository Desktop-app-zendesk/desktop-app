import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css'
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Select,
  Option,
} from "@material-tailwind/react";

import AllTickets from './AllTickets';

export default function Test() {
  const navigate = useNavigate();
  function handleClick(e: any) {
    e.target.id === 'myticket'
       navigate('/myTicket')
    //  navigate('/allTickets');
  }
  return (
    <section className="text-gray-600 body-font">
      {/* Section: Design Block */}
      <section className="mb-5">
        
        <div className="text-center bg-gray-50 text-gray-800 py-12 px-2">
          <button
            id="allticket"
            type="button"
            className="inline-block px-6 py-2.5 mr-2 bg-gray-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            All Tickets
          </button>
          <button
            id="myticket"
            type="button"
            className="inline-block px-6 py-2.5 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            onClick={handleClick}
          >
            My Ticket
          </button>
        </div>
      </section>
      <div className="container my-15 px-6 mx-auto">
      <Menu>
        <MenuHandler>
          <button className="absolute w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 -right-0 -top-0" type="button" data-toggle="true">
            <svg className="absolute w-12 h-12 text-gray-400 -left-1 -top-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
          </button>
        </MenuHandler>
        <MenuList>
          <MenuItem>View Profile</MenuItem>
          <MenuItem>Account Link</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
      <AllTickets/>
      {/* <section className="mb-32 text-gray-800 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-6 xl:gap-12 items-center">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight">
              All Tickets
            </h2>
          </div>
      
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-blue-600 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Ticket Status
              </th>
              <th scope="col" className="px-6 py-3">
                Subject
              </th>
              <th scope="col" className="px-6 py-3">
                Requester
              </th>
              <th scope="col" className="px-6 py-3">
                Requested
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Priority
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Open
              </th>
              <td className="px-6 py-4">
                Sample Ticket
              </td>
              <td className="px-6 py-4">
                The Customer
              </td>
              <td className="px-6 py-4">
                April 14
              </td>
              <td className="px-6 py-4">
                Incident
              </td>
              <td className="px-6 py-4">
                Normal
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                New
              </th>
              <td className="px-6 py-4">
                Issued Ticket
              </td>
              <td className="px-6 py-4">
                The Agent
              </td>
              <td className="px-6 py-4">
                April 20
              </td>
              <td className="px-6 py-4">
                Problem
              </td>
              <td className="px-6 py-4">
                High
              </td>
            </tr>
          </tbody>
        </table>
      </div>  
    </div>
  </section> */}
</div>
      </section>
  );
}
