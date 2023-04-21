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



function AllTickets() {
  const navigate = useNavigate();
  const handleClick = () => {  
    navigate('/');
  };
  return (
    <div className="container my-16 px-6 mx-auto">
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
      <section className="mb-32 text-gray-800 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-6 xl:gap-12 items-center">
          
        <Menu>
            <MenuHandler>
              <button className="w-20 h-10 overflow-hidden bg-blue-400 dark:bg-blue-600 -right-0 -top-0 text-white" type="button">Filter</button>
            </MenuHandler>
            <MenuList>
                
              <MenuItem>Filter2</MenuItem>

            </MenuList>
          </Menu>
      <div className="relative overflow-x-12">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-blue-600 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Ticket Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Subject
                </th>
                <th scope="col" className="px-5 py-3">
                    
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
                <td>
                  <div className="space-y-4">
                    <details className="w-full rounded-lg ring-1 ring-purple-600">
                      <summary className="px-3 py-6">
                         
                      </summary>
    
                    </details>
                  </div>
                </td>  
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </section>
</div>
  );
}

export default AllTickets;
