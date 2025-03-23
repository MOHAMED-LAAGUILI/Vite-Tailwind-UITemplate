import { Facebook, Github, Linkedin, MessageCircleMore } from "lucide-react";

export   const socialLinks = [
    {
      href: "https://www.linkedin.com/in/mohamedlaaguili2001/",
      label: "LinkedIn",
      icon: <Linkedin size={20} />,
      hoverClass: "hover:text-blue-500",
    },
    {
      href: "https://www.github.com/MOHAMED-LAAGUILI",
      label: "GitHub",
      icon: <Github size={20} />,
      hoverClass: "hover:text-gray-300",
    },
    {
      href: "https://discordapp.com/users/1316675038598139936",
      label: "Discord",
      icon: <MessageCircleMore size={20} />,
      hoverClass: "hover:text-blue-400",
    },
    {
      href: "https://www.facebook.com/profile.php?id=100014521591779",
      label: "Facebook",
      icon: <Facebook size={20} />,
      hoverClass: "hover:text-blue-600",
    },
  ];