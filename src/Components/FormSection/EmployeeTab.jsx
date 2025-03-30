import SelectField from "./SelectField"
import DateField from "./DateField"
import FormField from "./FormField"
import Accordion from "./Accordion"


const EmploymentTab = () => {
  return (
    <div className="space-y-8">
      <Accordion 
        title="Informations emploi" 
        defaultOpen={true}
        titleClass="text-pink-500"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <SelectField 
            label="Type de contrat" 
            placeholder="Selectionner" 
            options={['CDI', 'CDD', 'Intérim', 'Stage']} 
            required 
          />
          <SelectField 
            label="Statut" 
            placeholder="Selectionner" 
            options={['Cadre', 'Non-cadre']} 
            required 
          />
          <SelectField 
            label="Service" 
            placeholder="Selectionner" 
            options={['Commercial', 'Technique', 'Administration']} 
          />
          <SelectField 
            label="Fonction" 
            placeholder="Selectionner" 
            options={['Directeur', 'Manager', 'Employé']} 
            required 
          />
        </div>
      </Accordion>
      
      <Accordion 
        title="Dates d'entrée et de sortie" 
        defaultOpen={true}
        titleClass="text-pink-500"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <DateField 
            label="Date de début du contrat" 
            placeholder="JJ-MM-YYYY" 
            required 
          />
          <DateField 
            label="Date de signature du contrat" 
            placeholder="JJ-MM-YYYY" 
          />
          <DateField 
            label="Date de début d'emploi" 
            placeholder="JJ-MM-YYYY" 
            required 
          />
          <div className="flex gap-4">
            <FormField 
              label="Motif début d'emploi" 
              placeholder="XXX" 
              className="w-1/2"
            />
            <SelectField 
              label=" " 
              placeholder="Selectionner" 
              options={['Embauche', 'Mutation', 'Autre']} 
              className="w-1/2"
            />
          </div>
          <DateField 
            label="Date de fin période probatoire" 
            placeholder="JJ-MM-YYYY" 
          />
          <DateField 
            label="Date d'ancienneté" 
            placeholder="JJ-MM-YYYY" 
          />
          <FormField 
            label="Date de fin d'emploi" 
            placeholder="Non applicable" 
            disabled 
          />
          <FormField 
            label="Date de fin de préavis" 
            placeholder="Non applicable" 
            disabled 
          />
          <FormField 
            label="Motif fin d'emploi" 
            placeholder="Non applicable" 
            disabled 
          />
          <FormField 
            label="Motif de rupture" 
            placeholder="Non applicable" 
            disabled 
          />
        </div>
      </Accordion>
      
      <Accordion 
        title="Définition de l'emploi" 
        titleClass="text-pink-500"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <SelectField 
            label="Catégorie professionnelle" 
            placeholder="Selectionner" 
            options={['Ouvrier', 'Employé', 'Technicien', 'Cadre']} 
            required 
          />
          <SelectField 
            label="Niveau" 
            placeholder="Selectionner" 
            options={['1', '2', '3', '4', '5']} 
          />
          <FormField 
            label="Coefficient" 
            placeholder="Coefficient" 
            type="number"
          />
          <FormField 
            label="Échelon" 
            placeholder="Échelon" 
          />
          <SelectField 
            label="Position" 
            placeholder="Selectionner" 
            options={['1', '2', '3A', '3B', '3C']} 
          />
          <SelectField 
            label="Filière" 
            placeholder="Selectionner" 
            options={['Administrative', 'Technique', 'Commerciale']} 
          />
        </div>
      </Accordion>
    </div>
  )
}

export default EmploymentTab