import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogFooter,
  IconButton,
} from '@material-tailwind/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import CustomDialogBody from './CustomDialogBody';

type Props = {
  className: string;
  id: string;
  title: string;
  dialogBtnName: string;
};
function DialogForm(props: Props) {
  const { id, title, className, dialogBtnName } = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} className={className}>
        {dialogBtnName}
      </Button>

      <Dialog
        className="dialog max-w-none w-full"
        open={open}
        handler={handleOpen}
      >
        <DialogHeader>
          <div className="flex items-center justify-between w-full">
            <span>{title}</span>
            <IconButton
              color="blue-gray"
              size="sm"
              variant="text"
              onClick={handleOpen}
            >
              <XMarkIcon
                strokeWidth={2}
                className="h-5 w-5 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
              />
            </IconButton>
          </div>
        </DialogHeader>

        <CustomDialogBody id={id} />
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="middle none center mr-1 rounded-lg py-3 px-6 font-sans text-xs font-medium text-zen-blue-500 transition-all hover:bg-zen-blue-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none normal-case"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            className="middle none center rounded-lg bg-gradient-to-tr from-zen-blue-500 to-zen-blue-500 py-3 px-6 font-sans text-xs font-bold text-white shadow-md shadow-zen-blue-500/20 transition-all hover:shadow-lg hover:shadow-zen-blue-500-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none normal-case"
            onClick={handleOpen}
          >
            <span>Add</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default DialogForm;
