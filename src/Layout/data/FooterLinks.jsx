import { Facebook, Github, Linkedin, MessageCircleMore } from "lucide-react";
import { seoData } from "./SeoData";

export   const socialLinks = [
    {
      href: seoData.socialLinks.linkedin,
      label: "LinkedIn",
      icon: <Linkedin size={20} />,
      hoverClass: "hover:text-blue-500",
    },
    {
      href: seoData.socialLinks.github,
      label: "GitHub",
      icon: <Github size={20} />,
      hoverClass: "hover:text-gray-300",
    },
    {
      href: seoData.socialLinks.discord,
      label: "Discord",
      icon: <MessageCircleMore size={20} />,
      hoverClass: "hover:text-blue-400",
    },
    {
      href: seoData.socialLinks.facebook,
      label: "Facebook",
      icon: <Facebook size={20} />,
      hoverClass: "hover:text-blue-600",
    },
  ];