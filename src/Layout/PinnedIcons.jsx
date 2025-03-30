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
  showLinkedIn = true,
  showGitHub = true,
  showDiscord = true,
  className,
  PhoneCall,
  MessageCircle,
  Linkedin,
  Github,
  Discord,
  twMerge,
  handleMouseEnter,
  handleMouseLeave,
  isHovering,
  socialLinks
}) {
  
  const positionClasses = {
    "bottom-right": "bottom-16 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
  };

  const icons = [
    {
      show: showWhatsApp,
      href: `https://wa.me/${phoneNumber}`,
      label: "Chat with us on WhatsApp",
      bgClass: "bg-gradient-to-r from-green-500 to-green-700",
      icon: <MessageCircle size={25} color="white" />, 
      hoverKey: "whatsapp",
      message: whatsappMessage,
      tooltipOffset: "-left-[90px]"
    },
    {
      show: showPhone,
      href: `tel:${phoneNumber}`,
      label: "Call us",
      bgClass: "bg-gradient-to-r from-blue-500 to-blue-600",
      icon: <PhoneCall size={25} color="white" />, 
      hoverKey: "phone",
      message: phoneMessage,
      tooltipOffset: "-left-[50px]"
    },
    {
      show: showSupport,
      href: supportUrl,
      label: "Support us",
      bgClass: "bg-gradient-to-r from-yellow-200 to-yellow-400",
      icon: <img src={coffeeLogo || "/placeholder.svg"} alt="Buy Me A Coffee" className="w-8 h-8 object-contain" />, 
      hoverKey: "support",
      message: supportMessage,
      tooltipOffset: "-left-[60px]"
    },
    {
      show: showLinkedIn,
      href: socialLinks.linkedin,
      label: "Connect on LinkedIn",
      bgClass: "bg-gradient-to-r from-blue-700 to-blue-900",
      icon: <Linkedin size={25} color="white" />, 
      hoverKey: "linkedin",
      message: "LinkedIn Profile",
      tooltipOffset: "-left-[70px]"
    },
    {
      show: showGitHub,
      href: socialLinks.github,
      label: "View GitHub",
      bgClass: "bg-gray-800",
      icon: <Github size={25} color="white" />, 
      hoverKey: "github",
      message: "GitHub Profile",
      tooltipOffset: "-left-[60px]"
    },
    
    {
      show: showDiscord,
      href: socialLinks.discord,
      label: "Join Discord",
      bgClass: "bg-gradient-to-r from-purple-500 to-purple-700",
      icon: <Discord size={25} color="white" />, 
      hoverKey: "discord",
      message: "Discord Server",
      tooltipOffset: "-left-[70px]"
    }
  ];

  return (
    <div 
      className={twMerge(
        "fixed z-50 space-y-3 flex flex-col items-center", 
        positionClasses[position],
        className
      )}
      aria-label="Quick contact options"
    >
      {icons.map(({ show, href, label, bgClass, icon, hoverKey, message, tooltipOffset }, index) =>
        show ? (
          <div 
            key={index} 
            className="relative group" 
            onMouseEnter={() => handleMouseEnter(hoverKey)}
            onMouseLeave={handleMouseLeave}
          >
            <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="block">
              <div className={`${bgClass} p-4 flex items-center justify-center rounded-full w-14 h-14 hover:shadow-lg ring-4 ring-white dark:ring-gray-800 transition-all duration-300 hover:scale-105`}> 
                {icon}
              </div>
            </a>
            <span 
              className={twMerge(
                `absolute ${tooltipOffset} transform -translate-x-1/2 -bottom-2 -translate-y-full bg-black text-white text-xs rounded py-1 px-2 transition-opacity duration-300 whitespace-nowrap`,
                isHovering === hoverKey ? "opacity-100" : "opacity-0"
              )}
            >
              {message}
            </span>
          </div>
        ) : null
      )}
    </div>
  );
}
