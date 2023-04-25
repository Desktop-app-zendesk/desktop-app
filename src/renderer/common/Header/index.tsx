import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react';

export default function Header() {
  return (
    <div className="h-12 border-b bg-zen-green-800 mb-4">
      <Menu>
        <MenuHandler>
          <button
            className="absolute w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 right-1 top-1"
            type="button"
            data-toggle="true"
          >
            <svg
              className="absolute w-12 h-12 text-gray-400 -left-1 -top-0"
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
