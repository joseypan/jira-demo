import { useState } from "react";

export default function useArray<T>(persons: T[]) {
  const [value, setValue] = useState(persons);
  const add = (person: T) => {
    setValue([...value, person]);
  };
  const clear = () => {
    setValue([]);
  };
  const removeIndex = (index: number) => {
    const newArray = value.filter((item, idx) => idx !== index);
    setValue(newArray);
  };
  return { value, clear, removeIndex, add };
}
