"use client";

import { Select, Option } from "@material-tailwind/react";

// interface Item {
//   value: string;
//   name: string;
// }

export default function MySelect(props) {
  return (
    <div className="w-72">
      <Select
        label={props.label}
        onChange={props.onChange}
        defaultValue="0"//{props.defaultValue}
      >
        {props.items.map((item, index) => (
          <Option value={item.value} key={index}>
            {item.name}
          </Option>
        ))}
      </Select>
    </div>
  );
}
