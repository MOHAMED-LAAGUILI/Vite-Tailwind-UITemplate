import { Github, Linkedin, Facebook, MessageCircle } from "lucide-react";

function Footer() {
  return (
    <footer className="dark:bg-gray-800 dark:text-gray-300 py-4 text-center shadow-md border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center gap-6">
        {/* Text Section */}
        <div>
          <p className="text-sm text-gray-400">
            Developed by{" "}
            <a
              href="https://laaguili-dev.app.genez.io/"
              className="text-blue-400 hover:text-blue-500 transition-colors"
              aria-label="Visit MOHA's website"
              target="_blank"
              rel="noopener noreferrer"
            >
              MOHA
            </a>{" "}
            with ❤️‍🔥
          </p>
        </div>

        {/* Social Icons Section */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/mohamedlaaguili2001/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.github.com/MOHAMED-LAAGUILI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 transition-all"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://discordapp.com/users/1316675038598139936"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-all"
            aria-label="Discord"
          >
            <MessageCircle size={20} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100014521591779"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 transition-all"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
