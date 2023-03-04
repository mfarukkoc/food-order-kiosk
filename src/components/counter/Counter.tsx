import React from "react";

interface Props {
  count: number;
  onChange: (count: number) => void;
  disableDecrement?: boolean;
}

const Counter = ({ count, onChange, disableDecrement }: Props) => {
  return (
    <div className="flex justify-between items-center gap-4">
      <button
        className={`block w-12 py-1 px-3 rounded-xl text-sm  border  ${
          count <= 1
            ? "bg-transparent border-stone-300"
            : "border-yellow-400 bg-yellow-400"
        } disabled:cursor-not-allowed`}
        onClick={() => onChange(count - 1)}
        disabled={disableDecrement}
      >
        -
      </button>
      <span className="block">{count}</span>
      <button
        className={`block w-12 py-1 px-3 rounded-xl text-sm  border border-yellow-400 bg-yellow-400 disabled:cursor-not-allowed`}
        onClick={() => onChange(count + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
