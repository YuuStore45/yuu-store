import React, { Dispatch, SetStateAction } from "react";

interface QuantityInputProps {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

export default function QuantityInput({ value, setValue }: QuantityInputProps) {
  return (
    <div className="h-9">
      <button
        className="border-gray h-full border px-4 hover:bg-white100 duration-200"
        onClick={() => setValue(value <= 1 ? value : value - 1)}
      >
        -
      </button>
      <input
        value={value}
        min="1"
        inputMode="numeric"
        step={1}
        onChange={(event) => setValue(Number(event.target.value))}
        type="number"
        className="w-14 h-full border border-y-gray border-x-0 px-2 outline-none "
      />
      <button
        className="border-gray h-full border px-4 hover:bg-white100 duration-200"
        onClick={() => setValue(value + 1)}
      >
        +
      </button>
    </div>
  );
}
