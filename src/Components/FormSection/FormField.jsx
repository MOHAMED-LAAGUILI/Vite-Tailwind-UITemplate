/* eslint-disable react/prop-types */
const FormField = ({ 
    label, 
    placeholder, 
    required = false, 
    type = "text", 
    value = "", 
    disabled = false,
    suffix = "",
    className = ""
  }) => {
    return (
      <div className={className}>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className="relative">
          <input
            type={type}
            placeholder={placeholder}
            defaultValue={value}
            disabled={disabled}
            className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${disabled ? 'bg-gray-100' : ''}`}
          />
          {suffix && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
              {suffix}
            </div>
          )}
        </div>
      </div>
    )
  }
  
  export default FormField