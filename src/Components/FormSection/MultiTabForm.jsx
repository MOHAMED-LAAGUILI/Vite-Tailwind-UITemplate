import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import IdentityTab from './IdentityTab'
import EmploymentTab from './EmployeeTab'
import CompensationTab from './CompensationTab'
import DocumentsTab from './DocumentTab'
import SituationTab from './SituationTab'
import Modal from './Modal'


export default function MultiTabForm() {
  const [activeTab, setActiveTab] = useState('identity')
  const [progress, setProgress] = useState(11)
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState(null)
  
  const tabs = [
    { id: 'identity', label: 'Identité' },
    { id: 'employment', label: 'Emploi' },
    { id: 'compensation', label: 'Rénumération' },
    { id: 'documents', label: 'Documents' },
    { id: 'situation', label: 'Situation' }
  ]
  
  const openModal = (content) => {
    setModalContent(content)
    setShowModal(true)
  }
  
  const handleNextTab = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab)
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].id)
      setProgress(prev => Math.min(prev + 20, 100))
    }
  }
  
  const handlePrevTab = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab)
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1].id)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Tab Navigation */}
        <div className="flex overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 font-medium text-sm transition-all duration-300 whitespace-nowrap
                ${activeTab === tab.id 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Progress Bar */}
        <div className="px-6 py-4 border-b">
          <div className="flex items-center justify-between mb-2">
            <div className="text-gray-800 font-medium">Profil rempli à:</div>
            <div className="text-gray-600">{progress}% <span className="text-gray-500">(les champs avec <span className="text-red-500">*</span> sont obligatoires)</span></div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div 
              className="bg-pink-400 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'identity' && <IdentityTab />}
              {activeTab === 'employment' && <EmploymentTab />}
              {activeTab === 'compensation' && <CompensationTab />}
              {activeTab === 'documents' && <DocumentsTab />}
              {activeTab === 'situation' && <SituationTab openModal={openModal} />}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Navigation Buttons */}
        <div className="p-6 border-t flex justify-between">
          {activeTab !== 'identity' ? (
            <button 
              onClick={handlePrevTab}
              className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50 transition-colors flex items-center"
            >
              Précident: {tabs[tabs.findIndex(tab => tab.id === activeTab) - 1]?.label}
            </button>
          ) : (
            <div></div>
          )}
          
          <div className="flex gap-4">
            <button 
              className="px-4 py-2 border border-red-400 text-red-400 rounded hover:bg-red-50 transition-colors"
            >
              Annuler
            </button>
            
            {activeTab !== 'situation' ? (
              <button 
                onClick={handleNextTab}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors flex items-center"
              >
                Suivant: {tabs[tabs.findIndex(tab => tab.id === activeTab) + 1]?.label} <ChevronRight className="ml-1 w-4 h-4" />
              </button>
            ) : (
              <button 
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
              >
                Finaliser la création
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            {modalContent}
          </Modal>
        )}
      </AnimatePresence>
    </div>
  )
}
