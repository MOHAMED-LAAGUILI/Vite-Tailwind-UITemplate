import { useState } from 'react';
import { Upload } from 'lucide-react';
import SelectField from './SelectField';
import FormField from './FormField';
import DateField from './DateField';
import FileUpload from './FileUpload';

const formFields = [
  { label: 'Matricule interne', type: 'text', placeholder: 'Saisir le matricule' },
  { label: 'Nom', type: 'text', placeholder: 'Nom', required: true, value: 'Dupont' },
  { label: 'Prenom', type: 'text', placeholder: 'Prenom', required: true, value: 'aaadad' },
  { label: 'Adresse', type: 'text', placeholder: 'Numéro et nom de rue', required: true },
  { label: 'Code postal', type: 'text', placeholder: 'Code postal', required: true, value: '60000' },
  { label: 'Ville', type: 'text', placeholder: 'Ville', required: true, value: 'Paris' },
  { label: 'Téléphone', type: 'text', placeholder: 'Téléphone', required: true, value: '0689' },
  { label: 'Email professionnel', type: 'email', placeholder: 'email@example.com', value: 'jean.dupant@email.com' },
  { label: 'Email personnel', type: 'email', placeholder: 'email@example.com', value: 'jean.dupant@email.com' },
  { label: 'Numéro de sécurité sociale', type: 'text', placeholder: 'X XX XX XX XXX XXX XX', required: true },
  { label: 'Nombre denfant', type: 'number', placeholder: '0', required: true, value: '0' },
];

const selectFields = [
  { label: 'Section', options: ['Section A', 'Section B', 'Section C'] },
  { label: 'Civilité', options: ['M.', 'Mme.'], required: true, value: 'Mme.' },
  { label: 'Nationalité', options: ['Française', 'Autre'], required: true },
  { label: 'Pays de naissance', options: ['France', 'Autre'] },
  { label: 'Situation familiale', options: ['Célibataire', 'Marié(e)', 'Divorcé(e)'], required: true },
];

const fileUploadFields = [
  { label: "Pièce d'identité", accept: ".pdf,.png,.jpg", required: true },
  { label: "Justification de domicile", accept: ".pdf,.png,.jpg", required: true },
  { label: "RIB", accept: ".pdf,.png,.jpg", required: true },
  { label: "Contrat de travail", accept: ".pdf,.doc,.docx" },
  { label: "Diplômes", accept: ".pdf,.png,.jpg" },
  { label: "CV", accept: ".pdf,.doc,.docx" },
];

const IdentityTab = () => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => setPhoto(e.target.result);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 bg-gray-800 rounded-md flex items-center justify-center overflow-hidden">
            {photo ? <img src={photo || "/placeholder.svg"} alt="Profile" className="w-full h-full object-cover" /> : <Upload className="w-16 h-16 text-white" />}
          </div>
          <label className="mt-2 flex items-center text-blue-500 cursor-pointer">
            <Upload className="w-4 h-4 mr-2" /> Ajouter une photo
            <input type="file" className="hidden" onChange={handlePhotoUpload} accept="image/*" />
          </label>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          {formFields.slice(0, 2).map((field, index) => <FormField key={index} {...field} />)}
          {selectFields.slice(0, 1).map((field, index) => <SelectField key={index} {...field} />)}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {selectFields.slice(1, 2).map((field, index) => <SelectField key={index} {...field} />)}
        {formFields.slice(1, 3).map((field, index) => <FormField key={index} {...field} />)}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {formFields.slice(3, 6).map((field, index) => <FormField key={index} {...field} />)}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DateField label="Date de naissance" placeholder="JJ-MM-YYYY" required value="31-03-2025" />
        {formFields.slice(6, 7).map((field, index) => (
          <div key={index}>
            <FormField {...field} />
            <p className="text-sm text-pink-500 mt-1">Le numéro de téléphone doit être au format national français (ex: 06 12 34 56 78).</p>
          </div>
        ))}
        {formFields.slice(7, 8).map((field, index) => <FormField key={index} {...field} />)}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {formFields.slice(8, 9).map((field, index) => <FormField key={index} {...field} />)}
        {selectFields.slice(2, 4).map((field, index) => <SelectField key={index} {...field} />)}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {formFields.slice(9).map((field, index) => <FormField key={index} {...field} />)}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fileUploadFields.map((field, index) => <FileUpload key={index} {...field} />)}
      </div>
    </div>
  );
};

export default IdentityTab;
