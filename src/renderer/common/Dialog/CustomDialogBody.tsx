import { DialogBody } from '@material-tailwind/react';
import InputField from '../InputField.tsx';

type Props = {
  id: string;
};
function CustomDialogBody(props: Props) {
  const { id } = props;

  const getdialogContainer = () => {
    switch (id) {
      case 'add_new_organization': {
        return (
          <DialogBody divider>
            <InputField id="name" inputLabelName="Name" />
            <div>
              <label
                htmlFor="domains"
                className="block mt-3 font-semibold text-zen-gray-800 dark:text-white"
              >
                Domains
                <div className=" text-sm text-zen-gray-800 font-medium">
                  Enter domains separated by a space. For example,
                  &quot;acme.com ajax.com&quot;. Emails from these domains will
                  be added to the organization.
                </div>
                <input
                  type="text"
                  id="domains"
                  className="bg-gray-50 mt-3 border border-gray-300 text-zen-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </label>
            </div>
          </DialogBody>
        );
      }
      case 'add_new_user': {
        return (
          <DialogBody divider>
            <InputField id="name" inputLabelName="Name" />
            <InputField id="email" inputLabelName="Email" />
          </DialogBody>
        );
      }
      default: {
        return '';
      }
    }
  };
  return <>{getdialogContainer()}</>;
}

export default CustomDialogBody;
