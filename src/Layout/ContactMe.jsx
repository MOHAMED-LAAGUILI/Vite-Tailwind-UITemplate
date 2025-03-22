/* eslint-disable react/prop-types */

export default function ContactMe({ MessageCircle, PhoneCall, phoneNumber }) {
    return (
      <>
        <div className="absolute bottom-[160px] right-4 z-50 space-y-2">
          {/* WhatsApp Icon */}
          <div className="group relative">
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-gradient-to-r from-green-500 to-green-700 p-4  transform duration-300 flex items-center justify-center  transition-all rounded-full w-14 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white">
                <MessageCircle size={25} color="white" />
              </div>
            </a>
            {/* Tooltip for WhatsApp */}
            <span className="absolute -left-4 bottom-4 transform -translate-x-full bg-black text-white dark:bg-white dark:text-black text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2">
            Whatsapp
            </span>
          </div>
  
          {/* Phone Icon */}
          <div className="group relative">
            <a href={`tel:${phoneNumber}`} target="_blank" rel="noopener noreferrer">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4  transform duration-300 flex items-center justify-center  transition-all rounded-full w-14 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white">
             

                <PhoneCall size={25} color="white" />
              </div>
            </a>
            {/* Tooltip for Phone Call */}
            <span className="absolute -left-4 bottom-4 transform -translate-x-full bg-black text-white dark:bg-white dark:text-black text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2">
            Call Me
            </span>
          </div>
        </div>
      </>
    );
  }
  