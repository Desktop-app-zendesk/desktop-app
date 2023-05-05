import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react';
import { House } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="h-12 border-b bg-zen-green-800 mb-4 px-4 flex justify-between items-center">
      <Link to="/">
        <House size={24} color="#FFFFFF" weight="fill" />
      </Link>
      <Menu>
        <MenuHandler>
          <button
            className="p-1 bg-gray-100 relative rounded-full dark:bg-gray-600"
            type="button"
            data-toggle="true"
          >
            <svg
              className="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </MenuHandler>
        <MenuList>
          <MenuItem>View Profile</MenuItem>
          <MenuItem>Account Link</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
