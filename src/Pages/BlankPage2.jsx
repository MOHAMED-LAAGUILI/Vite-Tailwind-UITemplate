
import { useEffect } from 'react';
import { initFlowbite } from 'flowbite';

export default function BlankPage2() {
  useEffect(() => {
    initFlowbite();    
  }, []);

  return(
  <div className='h-screen'>
<h1 className='text-2xl flex justify-center '>test 2</h1>



  </div>
  );
}
