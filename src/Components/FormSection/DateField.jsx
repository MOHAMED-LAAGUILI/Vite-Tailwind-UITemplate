/* eslint-disable react/prop-types */
import { useState } from "react";

const DateField = ({ label, placeholder, required = false, value = "" }) => {
  const [date, setDate] = useState(value);

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="date-input" className="text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          id="date-input"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder={placeholder}
          onPaste={(e) => e.preventDefault()} // Prevents invalid pasting
          className="w-full px-5 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
       
      </div>
    </div>
  );
};

export default DateField;
