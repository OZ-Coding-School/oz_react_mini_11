import React from "react";

function CommonInput({ label, type, name, value, onChange, error }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-1 font-semibold">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default CommonInput;
