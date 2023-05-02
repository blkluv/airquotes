import type { MultiValue } from "react-select";
import Select from "react-select";

export type SelectedVibeType = (typeof vibes)[number] | undefined;

type MultiSelectDropdownProps = {
  setVibes: (vibes: MultiValue<SelectedVibeType>) => void;
};

const vibes = [
  { value: "famous", label: "Famous" },
  { value: "funny", label: "Funny" },
  { value: "euphemism", label: "Euphemism" },
  { value: "irony", label: "Irony" },
  { value: "metaphor", label: "Metaphor" },
  { value: "sarcasm", label: "Sarcasm" },
  { value: "satire", label: "Satire" },
  { value: "movies", label: "Movies" },
  { value: "TV shows", label: "TV Shows" },
];

const MultiSelectDropdown = ({ setVibes }: MultiSelectDropdownProps) => {
  const pickOption = (data: MultiValue<SelectedVibeType>) => {
    setVibes(data);
  };

  return (
    <div>
      <Select
        instanceId="vibeSelect"
        classNames={{
          control: (state) => `p-0.5 w-full rounded-md`,
        }}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            // This line disable the blue border
            // boxShadow: 'none',
            borderColor: "none",
            cursor: "pointer",
            "&:hover": {
              borderColor: "none",
            },
            transition: "all ease 0s 0s",
          }),
          option: (base) => {
            return {
              ...base,
              cursor: "pointer",
              color: "black",
              backgroundColor: `white`,
              ":hover": {
                backgroundColor: "#F5F5F5",
              },
            };
          },
          clearIndicator: (baseStyles) => {
            return {
              ...baseStyles,
              cursor: "pointer",
            };
          },
        }}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: "black",
          },
        })}
        options={vibes}
        defaultValue={[vibes[0]]}
        placeholder={"If not selected, it will generate a famous quote."}
        onChange={pickOption}
        isSearchable={true}
        closeMenuOnSelect={false}
        isMulti
      />
    </div>
  );
};

export default MultiSelectDropdown;
