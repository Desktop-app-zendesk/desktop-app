type Option = {
  value: string;
  label: string;
};
type Props = { label: string; options: Option[] };

function FilterSelector(props: Props) {
  const { label, options } = props;

  return (
    <label htmlFor="selection" className="filter-label">
      {label}
      <select id="selection" className="select-filter">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default FilterSelector;
