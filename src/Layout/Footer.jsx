function Footer() {
    return (
      <footer className="dark:bg-gray-800 dark:text-gray-300 py-4 text-center shadow">
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
          </a>
          {" with ❤️‍🔥"}
        </p>
      </footer>
    );
  }
  
  export default Footer;
  