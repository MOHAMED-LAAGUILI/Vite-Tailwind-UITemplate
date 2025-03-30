/* eslint-disable react/prop-types */

import DateField from "./DateField"
import FormField from "./FormField"
import SelectField from "./SelectField"

const AddPersonModal = ({ title, type }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">{title}</h2>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField 
            label="Prénom" 
            placeholder="Prénom" 
            required 
          />
          <FormField 
            label="Nom de famille" 
            placeholder="Nom de famille" 
            required 
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <DateField 
            label="Date de naissance" 
            placeholder="JJ-MM-YYYY" 
            required 
          />
          <DateField 
            label="Date de décès" 
            placeholder="JJ-MM-YYYY" 
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <SelectField 
            label="Sexe" 
            placeholder="Selectionner" 
            options={['Homme', 'Femme']} 
            required 
          />
          {type === 'enfant' && (
            <SelectField 
              label="Lien" 
              placeholder="Selectionner" 
              options={['Enfant', 'Autre personne à charge']} 
              required 
            />
          )}
        </div>
        
        <FormField 
          label="NIR (Numéro de sécurité sociale)" 
          placeholder="X XX XX XX XXX XXX XX" 
        />
        
        <div className="flex justify-end gap-4 mt-6">
          <button className="px-4 py-2 border border-red-400 text-red-400 rounded hover:bg-red-50 transition-colors">
            Annuler
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddPersonModal