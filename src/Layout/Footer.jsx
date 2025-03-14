import { Github, Linkedin, Facebook, MessageCircle } from "lucide-react";

function Footer() {
  return (
    <footer className="dark:bg-gray-800 dark:text-gray-300 py-6 text-center shadow-lg dark:border-none border-t ">
      <div className="mx-10  flex justify-between items-center gap-3">
      <div className="">
      <p className="text-sm">
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
      

      <div className="flex gap-4">
      <a
            href="https://www.linkedin.com/in/mohamedlaaguili2001/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.github.com/MOHAMED-LAAGUILI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 transition-all"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://discordapp.com/users/1316675038598139936"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-all"
            aria-label="Discord"
          >
            <MessageCircle size={24} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100014521591779"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 transition-all"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
      </div>
        </div>
    </footer>
  );
}

export default Footer;
