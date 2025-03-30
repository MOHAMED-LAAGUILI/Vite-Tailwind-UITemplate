import { useState } from "react";
import FileUpload from "./FileUpload";
import { PlusCircle, Trash } from "lucide-react";

const DocumentsTab = () => {
  const [ setDocuments ] = useState({});
  const [extraDocs, setExtraDocs] = useState([]);

  const handleFileChange = (label, file) => {
    setDocuments((prev) => ({ ...prev, [label]: file }));
  };

  const handleAddExtraDoc = () => {
    setExtraDocs((prev) => [...prev, { id: Date.now(), label: "Autre document" }]);
  };

  const handleRemoveExtraDoc = (id) => {
    setExtraDocs((prev) => prev.filter((doc) => doc.id !== id));
    setDocuments((prev) => {
      const newDocs = { ...prev };
      delete newDocs[id];
      return newDocs;
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-medium mb-2">Documents du salarié</h2>
        <p className="text-gray-500 mb-6">Déposez ici les documents nécessaires au dossier salarié</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "Pièce d'identité", accept: ".pdf,.png,.jpg", required: true },
            { label: "Justification de domicile", accept: ".pdf,.png,.jpg", required: true },
            { label: "RIB", accept: ".pdf,.png,.jpg", required: true },
            { label: "Contrat de travail", accept: ".pdf,.doc,.docx" },
            { label: "Diplômes", accept: ".pdf,.png,.jpg" },
            { label: "CV", accept: ".pdf,.doc,.docx" },
          ].map((doc) => (
            <FileUpload
              key={doc.label}
              label={doc.label}
              accept={doc.accept}
              required={doc.required}
              errorMessage="Veuillez sélectionner un document"
              onChange={(file) => handleFileChange(doc.label, file)}
            />
          ))}

          {extraDocs.map((doc) => (
            <div key={doc.id} className="flex items-center gap-4">
              <FileUpload
                label={doc.label}
                accept=".pdf,.png,.jpg,.doc,.docx"
                onChange={(file) => handleFileChange(doc.id, file)}
              />
              <button
                type="button"
                className="p-2 text-red-500 hover:text-red-700"
                onClick={() => handleRemoveExtraDoc(doc.id)}
                aria-label="Supprimer le document"
              >
                <Trash className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={handleAddExtraDoc}
          className="mt-8 flex items-center text-blue-500 hover:text-blue-600 transition-colors"
        >
          <PlusCircle className="mr-2 h-5 w-5" /> Ajouter un document supplémentaire
        </button>
      </div>
    </div>
  );
};

export default DocumentsTab;
