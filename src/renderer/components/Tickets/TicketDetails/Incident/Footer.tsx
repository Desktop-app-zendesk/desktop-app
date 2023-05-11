import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';

function Footer() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Open');
  const svgClass = isOpen ? '' : 'rotate-180';
  const ticketStatusMenu = [
    { status: 'Open', color: 'zen-orange-500' },
    { status: 'Pending', color: 'blue-500' },
    { status: 'Solved', color: 'gray-500' },
  ];
  return (
    <footer>
      <div className="flex border-b border-solid border-zen-gray-200 pt-1 h-10  ">
        <div className="absolute right-0">
          {isOpen && (
            <div
              id="dropdownTop"
              className="bg-white divide-y divide-gray-100 rounded-l-md shadow  dark:bg-gray-700 absolute h-[100px] w-[120px] right-[7px] top-[-104px] "
            >
              <ul className="py-3 text-sm font-semibold text-zen-gray-800 dark:text-zen-gray-800 list-none pl-6">
                {ticketStatusMenu.map((menu) => (
                  <li
                    className="relative flex items-center mb-3 hover:bg-gray-200"
                    aria-hidden="true"
                    onClick={() => setSelectedValue(menu.status)}
                    key={menu.status}
                  >
                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2">
                      <span
                        className={`w-3 h-3 block rounded-sm bg-${menu.color}`}
                      />
                    </span>
                    <span className="ml-5">{menu.status}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex 0">
            <div>
              <Button
                size="sm"
                className="bg-zen-green-800 font-medium normal-case mr-0.5 rounded-r-none px-2 py-2 shadow-none hover:shadow-none"
                onClick={() => navigate('/')}
              >
                <div>
                  Submit as{' '}
                  <span>
                    <strong>{selectedValue}</strong>
                  </span>
                </div>
              </Button>
            </div>
            <div>
              <button
                id="dropdownTopButton"
                data-dropdown-toggle="dropdownTop"
                data-dropdown-placement="top"
                className="mr-1 mb-1 md:mb-0 text-white bg-zen-green-800 focus:outline-none  font-medium rounded-r-md rounded-l-none text-sm px-3 py-2 text-center inline-flex items-center"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className={`w-4 h-4 transform ${svgClass}`}
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
