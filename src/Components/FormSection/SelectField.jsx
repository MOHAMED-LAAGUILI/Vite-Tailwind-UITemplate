/* eslint-disable react/prop-types */
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const SelectField = ({ 
  label, 
  placeholder, 
  options = [], 
  required = false, 
  value = "",
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(value)
  
  const handleSelect = (option) => {
    setSelected(option)
    setIsOpen(false)
  }
  
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-left focus:outline-none focus:ring-blue-500 focus:border-blue-500 flex justify-between items-center"
        >
          <span className={selected ? 'text-gray-900' : 'text-gray-500'}>
            {selected || placeholder}
          </span>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto max-h-60"
            >
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => handleSelect(option)}
                  className={`cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-blue-50 ${
                    selected === option ? 'bg-blue-50 text-blue-700' : 'text-gray-900'
                  }`}
                >
                  {option}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default SelectField