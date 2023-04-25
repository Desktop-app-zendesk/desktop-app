import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react';
import { Funnel } from '@phosphor-icons/react';

export default function Filter() {
  return (
    <div className="flex items-center justify-end mb-1 px-4">
      <Menu>
        <MenuHandler>
          <button
            className="bg-zen-green-800 px-1 py-1 rounded text-white"
            type="button"
          >
            <Funnel size={12} color="#FFFFFF" />
          </button>
        </MenuHandler>
        <MenuList>
          <MenuItem>Filter2</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
