
import Alert03 from '../Components/Alert/FancyAlert0';
import ToastExample from '../Components/Alert/Toast';
import Alert04 from './../Components/Alert/FancyAlert';
function AlertPage() {
  return (
    <>

  
<Alert04/>
<ToastExample/>

<Alert03/>
  {/* Resources Section */}
  <div className="mt-8 text-center">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Other Resources:
          
          &nbsp;|&nbsp;
          <a
            href="https://devsnap.me/react-notifications"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            react-notifications

          </a>
          &nbsp;|&nbsp;
        </p>
      </div>

    </>
  )
}

export default AlertPage