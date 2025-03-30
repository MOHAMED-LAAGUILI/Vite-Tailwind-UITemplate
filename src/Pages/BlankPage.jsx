
import { useEffect } from 'react';
import { initFlowbite } from 'flowbite';

export default function BlankPage() {
  useEffect(() => {
    initFlowbite();    
  }, []);

  return(
  <div className='h-screen'>
<h1 className='text-2xl flex justify-center '>Flow bite</h1>



  </div>
  );
}
