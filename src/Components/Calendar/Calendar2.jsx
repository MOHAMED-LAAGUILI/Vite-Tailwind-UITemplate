/* eslint-disable react/prop-types */ 
import { useState, useEffect } from "react"
import moment from "moment"
import { Search, ChevronLeft, ChevronRight, Download, ChevronDown, Plus, X, Calendar, User } from "lucide-react"
import { employees } from "../../mock/employees"
import { absenceEvents, absenceTypes } from "../../mock/absence"

// Add Absence Modal Component
function AddAbsenceModal({ isOpen, onClose, onSave }) {
  const [selectedEmployee, setSelectedEmployee] = useState("")
  const [absenceType, setAbsenceType] = useState("conge")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [comment, setComment] = useState("")
  const [showEmployeeDropdown, setShowEmployeeDropdown] = useState(false)
  const [showTypeDropdown, setShowTypeDropdown] = useState(false)
  const [employeeSearch, setEmployeeSearch] = useState("")

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.firstName.toLowerCase().includes(employeeSearch.toLowerCase()) ||
      emp.lastName.toLowerCase().includes(employeeSearch.toLowerCase()) ||
      emp.matricule.toLowerCase().includes(employeeSearch.toLowerCase()),
  )

  const handleSave = () => {
    // Validate form
    if (!selectedEmployee || !startDate || !endDate || !absenceType) {
      alert("Veuillez remplir tous les champs obligatoires")
      return
    }

    // Create new absence object
    const newAbsence = {
      id: Math.max(...absenceEvents.map((e) => e.id)) + 1,
      employeeId: selectedEmployee,
      start: new Date(startDate),
      end: new Date(endDate),
      type: absenceType,
      comment,
    }

    // Call the save function
    onSave(newAbsence)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Ajouter une absence</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors" aria-label="Fermer">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {/* Employee Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="employee-select">
                Salarié <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <button
                  type="button"
                  id="employee-select"
                  className="flex items-center justify-between w-full px-3 py-2 border rounded-md bg-white hover:border-gray-400 transition-colors"
                  onClick={() => setShowEmployeeDropdown(!showEmployeeDropdown)}
                  aria-expanded={showEmployeeDropdown}
                  aria-haspopup="listbox"
                >
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="truncate">
                      {selectedEmployee
                        ? employees.find((e) => e.id === selectedEmployee)?.lastName +
                          " " +
                          employees.find((e) => e.id === selectedEmployee)?.firstName
                        : "Sélectionner un salarié"}
                    </span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>

                {showEmployeeDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
                    <div className="p-2 border-b sticky top-0 bg-white">
                      <input
                        type="text"
                        placeholder="Rechercher..."
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        value={employeeSearch}
                        onChange={(e) => setEmployeeSearch(e.target.value)}
                        autoFocus
                      />
                    </div>
                    <div role="listbox">
                      {filteredEmployees.length > 0 ? (
                        filteredEmployees.map((emp) => (
                          <div
                            key={emp.id}
                            role="option"
                            aria-selected={selectedEmployee === emp.id}
                            className={`flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer ${
                              selectedEmployee === emp.id ? "bg-blue-50" : ""
                            }`}
                            onClick={() => {
                              setSelectedEmployee(emp.id)
                              setShowEmployeeDropdown(false)
                            }}
                          >
                            <div className="h-8 w-8 rounded-full overflow-hidden mr-2 flex-shrink-0 border">
                              <img
                                src={emp.avatar || "/placeholder.svg"}
                                alt=""
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="overflow-hidden">
                              <div className="font-medium truncate">{emp.lastName}</div>
                              <div className="text-sm text-gray-500 truncate">{emp.firstName}</div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="px-3 py-2 text-gray-500 text-center">Aucun résultat</div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Absence Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="absence-type">
                Type d'absence <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <button
                  type="button"
                  id="absence-type"
                  className="flex items-center justify-between w-full px-3 py-2 border rounded-md bg-white hover:border-gray-400 transition-colors"
                  onClick={() => setShowTypeDropdown(!showTypeDropdown)}
                  aria-expanded={showTypeDropdown}
                  aria-haspopup="listbox"
                >
                  <div className="flex items-center">
                    <div
                      className="h-4 w-4 mr-2 rounded-sm flex-shrink-0"
                      style={{ backgroundColor: absenceTypes[absenceType]?.color || "#FFF2CC" }}
                    ></div>
                    <span className="truncate">{absenceTypes[absenceType]?.label || "Congé"}</span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>

                {showTypeDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
                    <div role="listbox">
                      {Object.entries(absenceTypes).map(([key, { label, color }]) => (
                        <div
                          key={key}
                          role="option"
                          aria-selected={absenceType === key}
                          className={`flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer ${
                            absenceType === key ? "bg-blue-50" : ""
                          }`}
                          onClick={() => {
                            setAbsenceType(key)
                            setShowTypeDropdown(false)
                          }}
                        >
                          <div
                            className="h-4 w-4 mr-2 rounded-sm flex-shrink-0"
                            style={{ backgroundColor: color }}
                          ></div>
                          <span>{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Date Range */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="start-date">
                  Date de début <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                  <input
                    type="date"
                    id="start-date"
                    className="pl-10 pr-3 py-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    value={startDate}
                    onChange={(e) => {
                      setStartDate(e.target.value)
                      if (e.target.value && !endDate) {
                        setEndDate(e.target.value)
                      }
                    }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="end-date">
                  Date de fin <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                  <input
                    type="date"
                    id="end-date"
                    className="pl-10 pr-3 py-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    value={endDate}
                    min={startDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Comment */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="comment">
                Commentaire
              </label>
              <textarea
                id="comment"
                className="px-3 py-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                rows={3}
                placeholder="Ajouter un commentaire (optionnel)"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>
          </form>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end p-4 border-t gap-2">
          <button onClick={onClose} className="px-4 py-2 border rounded-md hover:bg-gray-100 transition-colors">
            Annuler
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  )
}

export default function EmployeeCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 2, 1)) // March 2025
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [selectedMotif, setSelectedMotif] = useState("all")
  const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false)
  const [showMotifDropdown, setShowMotifDropdown] = useState(false)
  const [absences, setAbsences] = useState(absenceEvents)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Function to navigate between months
  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate)
    newDate.setMonth(newDate.getMonth() + direction)
    setCurrentDate(newDate)
  }

  // Get days of the month
  const getDaysInMonth = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    return Array.from({ length: daysInMonth }, (_, i) => i + 1)
  }

  // Get visible days based on screen size
  const getVisibleDays = () => {
    return getDaysInMonth()
  }

  // Filter employees based on search query and department
  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch =
      emp.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.matricule.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesDepartment = selectedDepartment === "all" || emp.department === selectedDepartment

    return matchesSearch && matchesDepartment
  })

  // Handle adding a new absence
  const handleAddAbsence = (newAbsence) => {
    setAbsences([...absences, newAbsence])
  }

  // Close dropdowns when clicking outside
  const handleClickOutside = (e, setter) => {
    if (e.target.closest(".dropdown-container")) return
    setter(false)
  }

  // Effect to add click outside listener
  useEffect(() => {
    const handleGlobalClick = (e) => {
      if (showDepartmentDropdown) handleClickOutside(e, setShowDepartmentDropdown)
      if (showMotifDropdown) handleClickOutside(e, setShowMotifDropdown)
    }

    document.addEventListener("mousedown", handleGlobalClick)
    return () => document.removeEventListener("mousedown", handleGlobalClick)
  }, [showDepartmentDropdown, showMotifDropdown])

  return (
    <div className="employee-calendar-container bg-white rounded-lg shadow p-4 max-w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div className="flex items-center gap-2">
          <button
            className="p-2 border rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => navigateMonth(-1)}
            aria-label="Mois précédent"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors font-medium">
            {moment(currentDate).format("MMMM YYYY")}
          </button>
          <button
            className="p-2 border rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => navigateMonth(1)}
            aria-label="Mois suivant"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus className="h-4 w-4" />
          <span>Ajouter une absence</span>
        </button>
      </div>

      {/* Search and filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Rechercher un salarié..."
            className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Department dropdown */}
        <div className="relative dropdown-container">
          <button
            className="flex items-center justify-between w-full px-4 py-2 border rounded-md bg-white hover:border-gray-400 transition-colors"
            onClick={() => setShowDepartmentDropdown(!showDepartmentDropdown)}
            aria-expanded={showDepartmentDropdown}
            aria-haspopup="listbox"
          >
            <span className="text-gray-700">
              {selectedDepartment === "all" ? "Tous les départements" : selectedDepartment === "it" ? "IT" : "RH"}
            </span>
            <ChevronDown className="h-4 w-4 ml-2 text-gray-500" />
          </button>

          {showDepartmentDropdown && (
            <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
              <div role="listbox">
                <div
                  role="option"
                  aria-selected={selectedDepartment === "all"}
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                    selectedDepartment === "all" ? "bg-blue-50" : ""
                  }`}
                  onClick={() => {
                    setSelectedDepartment("all")
                    setShowDepartmentDropdown(false)
                  }}
                >
                  Tous les départements
                </div>
                <div
                  role="option"
                  aria-selected={selectedDepartment === "it"}
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                    selectedDepartment === "it" ? "bg-blue-50" : ""
                  }`}
                  onClick={() => {
                    setSelectedDepartment("it")
                    setShowDepartmentDropdown(false)
                  }}
                >
                  IT
                </div>
                <div
                  role="option"
                  aria-selected={selectedDepartment === "hr"}
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                    selectedDepartment === "hr" ? "bg-blue-50" : ""
                  }`}
                  onClick={() => {
                    setSelectedDepartment("hr")
                    setShowDepartmentDropdown(false)
                  }}
                >
                  RH
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Motif dropdown */}
        <div className="relative dropdown-container">
          <button
            className="flex items-center justify-between w-full px-4 py-2 border rounded-md bg-white hover:border-gray-400 transition-colors"
            onClick={() => setShowMotifDropdown(!showMotifDropdown)}
            aria-expanded={showMotifDropdown}
            aria-haspopup="listbox"
          >
            <span className="text-gray-700">
              {selectedMotif === "all" ? "Tous les motifs" : absenceTypes[selectedMotif]?.label || "Motif"}
            </span>
            <ChevronDown className="h-4 w-4 ml-2 text-gray-500" />
          </button>

          {showMotifDropdown && (
            <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
              <div role="listbox">
                <div
                  role="option"
                  aria-selected={selectedMotif === "all"}
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                    selectedMotif === "all" ? "bg-blue-50" : ""
                  }`}
                  onClick={() => {
                    setSelectedMotif("all")
                    setShowMotifDropdown(false)
                  }}
                >
                  Tous les motifs
                </div>
                {Object.entries(absenceTypes).map(([key, { label, color }]) => (
                  <div
                    key={key}
                    role="option"
                    aria-selected={selectedMotif === key}
                    className={`flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                      selectedMotif === key ? "bg-blue-50" : ""
                    }`}
                    onClick={() => {
                      setSelectedMotif(key)
                      setShowMotifDropdown(false)
                    }}
                  >
                    <div className="w-4 h-4 mr-2 rounded-sm" style={{ backgroundColor: color }}></div>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end">
          <button className="p-2 border rounded-md hover:bg-gray-100 transition-colors" aria-label="Télécharger">
            <Download className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6 bg-gray-50 p-3 rounded-md">
        {Object.entries(absenceTypes).map(([key, { label, color }]) => (
          <div key={key} className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: color }}></div>
            <span className="text-sm">{label}</span>
          </div>
        ))}
      </div>

      {/* Calendar - Responsive approach */}
      <div className="overflow-x-auto mb-6 border rounded-md">
        <div className="min-w-[800px]">
          {" "}
          {/* Force minimum width for horizontal scroll on mobile */}
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border p-2 w-12">
                  <div className="flex items-center justify-center h-5 w-5 rounded border border-gray-300">
                    <input
                      type="checkbox"
                      className="opacity-0 absolute h-5 w-5 cursor-pointer"
                      aria-label="Sélectionner tous"
                    />
                  </div>
                </th>
                <th className="border p-2 text-left">Matricule</th>
                <th className="border p-2 text-left">Salariés</th>
                {getVisibleDays().map((day) => {
                  const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
                  const dayName = moment(date).format("dd").charAt(0).toUpperCase() + moment(date).format("dd").slice(1)
                  const isWeekend = date.getDay() === 0 || date.getDay() === 6
                  const isToday = new Date().toDateString() === date.toDateString()

                  return (
                    <th
                      key={day}
                      className={`border p-2 text-center ${isToday ? "bg-blue-100" : ""} ${isWeekend ? "bg-gray-100" : ""}`}
                    >
                      <div className="text-xs font-medium">{dayName}</div>
                      <div className={`text-sm ${isToday ? "font-bold" : ""}`}>{day}</div>
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((employee) => {
                  // Filter absences for this employee and selected motif
                  const employeeAbsences = absences.filter(
                    (event) =>
                      event.employeeId === employee.id && (selectedMotif === "all" || event.type === selectedMotif),
                  )

                  return (
                    <tr key={employee.id} className="hover:bg-gray-50">
                      <td className="border p-2 text-center">
                        <div className="flex items-center justify-center h-5 w-5 rounded border border-gray-300">
                          <input
                            type="checkbox"
                            className="opacity-0 absolute h-5 w-5 cursor-pointer"
                            aria-label={`Sélectionner ${employee.firstName} ${employee.lastName}`}
                          />
                        </div>
                      </td>
                      <td className="border p-2 text-sm">{employee.matricule}</td>
                      <td className="border p-2">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full overflow-hidden border flex-shrink-0">
                            <img
                              src={"https://i.pravatar.cc/300"}
                              alt=""
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="min-w-0">
                            <div className="font-medium truncate">{employee.lastName}</div>
                            <div className="text-xs text-gray-500 truncate">{employee.firstName}</div>
                          </div>
                        </div>
                      </td>
                      {getVisibleDays().map((day) => {
                        const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
                        const hasAbsence = employeeAbsences.find(
                          (event) => date >= new Date(event.start) && date <= new Date(event.end),
                        )

                        const isWeekend = date.getDay() === 0 || date.getDay() === 6
                        const isToday = new Date().toDateString() === date.toDateString()

                        let cellStyle = {}
                        let title = ""

                        if (hasAbsence) {
                          cellStyle = { backgroundColor: absenceTypes[hasAbsence.type].color }
                          title = `${absenceTypes[hasAbsence.type].label}${hasAbsence.comment ? ": " + hasAbsence.comment : ""}`
                        } else if (isWeekend) {
                          cellStyle = {
                            backgroundImage:
                              "linear-gradient(45deg, #f3f4f6 25%, transparent 25%, transparent 50%, #f3f4f6 50%, #f3f4f6 75%, transparent 75%, transparent)",
                            backgroundSize: "10px 10px",
                          }
                        } else if (isToday) {
                          cellStyle = { border: "2px solid #3b82f6" }
                        }

                        return (
                          <td
                            key={day}
                            className="border p-2 text-center h-12 cursor-pointer hover:opacity-80 transition-opacity"
                            style={cellStyle}
                            title={title}
                            onClick={() => {
                              if (!hasAbsence) {
                                setIsModalOpen(true)
                              }
                            }}
                          >
                            {/* Cell content */}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })
              ) : (
                <tr>
                  <td colSpan={getVisibleDays().length + 3} className="border p-4 text-center text-gray-500">
                    Aucun salarié trouvé
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-600">
          Affichage 1 - {Math.min(10, filteredEmployees.length)} sur {employees.length} Salariés
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border rounded-md hover:bg-gray-100 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed">
            « Préc
          </button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm">1</button>
          <button className="px-3 py-1 border rounded-md hover:bg-gray-100 transition-colors text-sm">2</button>
          <button className="px-3 py-1 border rounded-md hover:bg-gray-100 transition-colors text-sm">3</button>
          <button className="px-3 py-1 border rounded-md hover:bg-gray-100 transition-colors text-sm">Suiv »</button>
        </div>
      </div>

  

      {/* Add Absence Modal */}
      <AddAbsenceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleAddAbsence} />
    </div>
  )
}

