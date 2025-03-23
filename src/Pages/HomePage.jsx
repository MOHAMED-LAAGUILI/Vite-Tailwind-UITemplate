import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Clipboard,
  ChevronRight,
  Star,
  Zap,
  Shield,
  ArrowRight,
  Menu,
  X,
  Github,
  Mail,
  Linkedin,
  Twitter,
  Phone,
  MapPin,
  Facebook,
  MessageCircle,
} from "lucide-react";
import ClipboardJS from "clipboard";
import Installation from "../Components/Home/Installation";
import About from "../Components/Home/About";
import Features from "../Components/Home/Features";
import Hero from "../Components/Home/Hero";
import Header from "../Components/Home/Header";
import Contact from "../Components/Home/Contact";
import toast from "react-hot-toast";
import { seoData } from "../data/SeoData";
import Spinner4 from "../Components/Spinner/Spinner4";

export default function HomePage() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    new ClipboardJS(".copy-btn");
  }, []);

  return (
    <div className="font-sans text-gray-900 dark:text-white bg-white dark:bg-gray-900 min-h-screen">
      {/* Navbar - Sticky and Modern */}
      <Header
        motion={motion}
        t={t}
        isMenuOpen={isMenuOpen}
        X={X}
        Menu={Menu}
        setIsMenuOpen={setIsMenuOpen}
      />
      {/* Hero Section - More Dynamic and Engaging */}
      <Hero
        motion={motion}
        t={t}
        fadeIn={fadeIn}
        Github={Github}
        ChevronRight={ChevronRight}
      />
      {/* Features Section - With Icons and Better Layout */}
      <Features
        motion={motion}
        t={t}
        ArrowRight={ArrowRight}
        Shield={Shield}
        Star={Star}
        Zap={Zap}
      />
      {/* About Section - More Visual Interest */}
      <About motion={motion} t={t} ArrowRight={ArrowRight} />
      {/* Installation Section - Improved */}
      <Installation
       motion={motion} 
       t={t}
        Clipboard={Clipboard}
        toast={toast} />
      {/* Contact Section - New */}
      <Contact
        motion={motion}
        t={t}
        toast={toast}
        Mail={Mail}
        MapPin={MapPin}
        Phone={Phone}
        Github={Github}
        Twitter={Twitter}
        Linkedin={Linkedin}
        Address={`${seoData.address.region} ${seoData.address.city}`}
        phoneNumber={seoData.contact.phone}
        githubLink={seoData.socialLinks.github}
        LinkedinLink={seoData.socialLinks.linkedin}
        FacebookLink={seoData.socialLinks.facebook}
        DiscordLink={seoData.socialLinks.discord}
        email={seoData.contact.email}
        Facebook={Facebook}
         MessageCircle={MessageCircle}
         Spinner4={Spinner4}
         useState={useState}
         useEffect={useEffect}
      />
    </div>
  );
}
