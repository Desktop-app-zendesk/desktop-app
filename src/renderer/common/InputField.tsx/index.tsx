import { Input } from '@material-tailwind/react';

type Props = { id: string; inputLabelName: string };
export default function InputField(props: Props) {
  const { id, inputLabelName } = props;

  return (
    <div>
      <label htmlFor={id} className="block  text-zen-gray-800 font-semibold">
        {inputLabelName}
      </label>
      <Input id={id} variant="outlined" />
    </div>
  );
}
