/* eslint-disable jsx-a11y/label-has-associated-control */
import { Input } from '@material-tailwind/react';

type Props = { id: string; inputLabelName: string };
export default function InputField(props: Props) {
  const { id, inputLabelName } = props;

  return (
    <div>
      <label htmlFor={id} className="block font-medium text-gray-700 mb-1" />
      {inputLabelName}
      <Input id={id} variant="outlined" />
    </div>
  );
}
