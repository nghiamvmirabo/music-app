import { Input, Select } from "antd";
import { useState } from "react";
import { typeOptions } from "../dummy";

const { Search } = Input;

export default function MySearch({ loading, onSearch }) {
  const [value, setValue] = useState("");
  const [selectValue, setSelectValue] = useState(typeOptions[0]);

  const handleChange = (e) => setValue(e.target.value);
  const handleSelectChange = (value) => setSelectValue(value);

  return (
    <div>
      <Search
        className="search"
        placeholder="Enter the song..."
        loading={loading}
        onSearch={(value) =>
          onSearch({ searchTerm: value, selectValue: selectValue })
        }
        onChange={handleChange}
        value={value}
        enterButton
      />
      <Select
        className="select-options capitalize"
        defaultValue={typeOptions[0]}
        onChange={handleSelectChange}
      >
        {typeOptions.map((type, index) => (
          <Select.Option key={index} value={type} className="capitalize">
            {type}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
}
