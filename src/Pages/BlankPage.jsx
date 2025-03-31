
import { useEffect } from 'react';
import { initFlowbite } from 'flowbite';
import SharpCard from '../Components/BodyCard';
import { Bell, Settings } from "lucide-react"; // Example icons

export default function BlankPage() {
  useEffect(() => {
    initFlowbite();    
  }, []);

  return(
  <>
<SharpCard 
        title="Notifications" 
        Icon={Bell} 
        actionButton={<button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">View</button>}
      >
        {/* Children content for Notifications card */}
        <div className="text-sm text-gray-600 dark:text-gray-300">
          <p>You have 5 new notifications.</p>
        </div>
      </SharpCard>

      {/* Card Without Action Button */}
      <SharpCard title="Settings" Icon={Settings}>
        {/* Children content for Settings card */}
        <div className="text-sm text-gray-600 dark:text-gray-300">
          <p>Manage your account settings here.</p>
        </div>
      </SharpCard>
  </>
  );
}
