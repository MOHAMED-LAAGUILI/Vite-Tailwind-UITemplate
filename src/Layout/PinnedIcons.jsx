/* eslint-disable react/prop-types */

export default function PinnedIcons({
  phoneNumber,
  whatsappMessage,
  phoneMessage,
  supportUrl,
  supportMessage,
  coffeeLogo,
  position,
  showSupport = true,
  showWhatsApp = true,
  showPhone = true,
  className,
  PhoneCall,
  MessageCircle,
  twMerge,
  handleMouseEnter,
  handleMouseLeave,
  isHovering
}) {

  const positionClasses = {
    "bottom-right": "bottom-16 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
  }
  return (
    <div 
      className={twMerge(
        "fixed z-50 space-y-2 flex flex-col items-center", 
        positionClasses[position],
        className
      )}
      aria-label="Quick contact options"
    >
      {showWhatsApp && (
        <div 
          className="relative group"
          onMouseEnter={() => handleMouseEnter("whatsapp")}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="block"
          >
            <div className="bg-gradient-to-r from-green-500 to-green-700 p-4 flex items-center justify-center rounded-full w-14 h-14 hover:shadow-lg ring-4 ring-white dark:ring-gray-800 transition-all duration-300 hover:scale-105">
              <MessageCircle size={25} color="white" />
            </div>
          </a>
          <span 
            className={twMerge(
              "absolute left-1/2 transform -translate-x-1/2 -translate-y-full bg-black text-white text-xs rounded py-1 px-2 transition-opacity duration-300 whitespace-nowrap",
              isHovering === "whatsapp" ? "opacity-100" : "opacity-0"
            )}
          >
            {whatsappMessage}
          </span>
        </div>
      )}

      {showPhone && (
        <div 
          className="relative group"
          onMouseEnter={() => handleMouseEnter("phone")}
          onMouseLeave={handleMouseLeave}
        >
          <a 
            href={`tel:${phoneNumber}`} 
            aria-label="Call us"
            className="block"
          >
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 flex items-center justify-center rounded-full w-14 h-14 hover:shadow-lg ring-4 ring-white dark:ring-gray-800 transition-all duration-300 hover:scale-105">
              <PhoneCall size={25} color="white" />
            </div>
          </a>
          <span 
            className={twMerge(
              "absolute left-1/2 transform -translate-x-1/2 -translate-y-full bg-black text-white text-xs rounded py-1 px-2 transition-opacity duration-300 whitespace-nowrap",
              isHovering === "phone" ? "opacity-100" : "opacity-0"
            )}
          >
            {phoneMessage}
          </span>
        </div>
      )}

      {showSupport && (
        <div 
          className="relative group"
          onMouseEnter={() => handleMouseEnter("support")}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href={supportUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Support us"
            className="block"
          >
            <div className="bg-gradient-to-r from-yellow-200 to-yellow-400 p-4 flex items-center justify-center rounded-full w-14 h-14 hover:shadow-lg ring-4 ring-white dark:ring-gray-800 transition-all duration-300 hover:scale-105">
              <img
                src={coffeeLogo || "/placeholder.svg"}
                alt="Buy Me A Coffee"
                className="w-8 h-8 object-contain"
              />
            </div>
          </a>
          <span 
            className={twMerge(
              "absolute left-1/2 transform -translate-x-1/2 -translate-y-full bg-black text-white text-xs rounded py-1 px-2 transition-opacity duration-300 whitespace-nowrap",
              isHovering === "support" ? "opacity-100" : "opacity-0"
            )}
          >
            {supportMessage}
          </span>
        </div>
      )}
    </div>
  )
}
