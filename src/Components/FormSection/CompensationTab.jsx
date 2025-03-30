import Accordion from "./Accordion"
import FormField from "./FormField"
import SelectField from "./SelectField"

const CompensationTab = () => {
  return (
    <div className="space-y-8">
      <Accordion 
        title="Rémunération principale" 
        defaultOpen={true}
        titleClass="text-pink-500"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <FormField 
            label="Salaire brut mensuel" 
            placeholder="0.00" 
            type="number"
            required 
            suffix="€"
          />
          <FormField 
            label="Salaire brut annuel" 
            placeholder="0.00" 
            type="number"
            suffix="€"
          />
          <SelectField 
            label="Mode de rémunération" 
            placeholder="Selectionner" 
            options={['Mensuel', 'Horaire']} 
            required 
          />
          <FormField 
            label="Taux horaire" 
            placeholder="0.00" 
            type="number"
            suffix="€"
          />
        </div>
      </Accordion>
      
      <Accordion 
        title="Primes et indemnités" 
        titleClass="text-pink-500"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <FormField 
            label="Prime mensuelle" 
            placeholder="0.00" 
            type="number"
            suffix="€"
          />
          <FormField 
            label="Prime annuelle" 
            placeholder="0.00" 
            type="number"
            suffix="€"
          />
          <FormField 
            label="Indemnité de transport" 
            placeholder="0.00" 
            type="number"
            suffix="€"
          />
          <FormField 
            label="Indemnité de repas" 
            placeholder="0.00" 
            type="number"
            suffix="€"
          />
        </div>
      </Accordion>
      
      <Accordion 
        title="Avantages en nature" 
        titleClass="text-pink-500"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <FormField 
            label="Véhicule de fonction" 
            placeholder="0.00" 
            type="number"
            suffix="€"
          />
          <FormField 
            label="Logement" 
            placeholder="0.00" 
            type="number"
            suffix="€"
          />
          <FormField 
            label="Téléphone" 
            placeholder="0.00" 
            type="number"
            suffix="€"
          />
          <FormField 
            label="Autres avantages" 
            placeholder="0.00" 
            type="number"
            suffix="€"
          />
        </div>
      </Accordion>
    </div>
  )
}

export default CompensationTab