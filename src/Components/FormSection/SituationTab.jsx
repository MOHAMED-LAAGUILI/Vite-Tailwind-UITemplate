/* eslint-disable react/prop-types */
import { Plus, Search } from 'lucide-react';
import AddPersonModal from './AddPersonModal';

const TableSection = ({ title, type, columns, openModal }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">{title}</h2>
        <button 
          onClick={() => openModal(<AddPersonModal title={`Ajouter ${type}`} type={type} />)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" /> Ajouter
        </button>
      </div>
      <div className="bg-gray-50 rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((col, index) => (
                <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="text-center">
              <td colSpan={columns.length} className="px-6 py-12">
                <div className="flex flex-col items-center justify-center text-gray-500">
                  <Search className="w-10 h-10 text-cyan-400 mb-2" />
                  <p>Aucun enregistrement correspondant trouvé</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const SituationTab = ({ openModal }) => {
  return (
    <div className="space-y-12">
      <TableSection 
        title="Conjoint" 
        type="conjoint" 
        openModal={openModal}
        columns={["Prénom", "Nom de famille", "Date de naissance", "Date de décès", "Nir", "Sexe", "Action"]} 
      />
      
      <TableSection 
        title="Enfants - Personnes à charge : 2" 
        type="enfant" 
        openModal={openModal}
        columns={["Prénom", "Nom de famille", "Date de naissance", "Date de décès", "Lien", "Nir", "Sexe", "Action"]} 
      />
      
      {/* Additional Information */}
      <div>
        <h2 className="text-lg font-medium mb-4">Informations complémentaires</h2>
        <div className="flex items-center">
          <input type="checkbox" id="oeth" className="w-5 h-5 rounded border-gray-300 text-blue-500 focus:ring-blue-500" />
          <label htmlFor="oeth" className="ml-2 text-gray-700">{"Bénéficie de l'obligation d'emploi"} (OETH)</label>
        </div>
      </div>
    </div>
  );
};

export default SituationTab;

