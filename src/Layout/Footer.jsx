/* eslint-disable react/prop-types */

function Footer({ socialLinks, formattedTime, devSite, DevName }) {
  return (
    <footer className="px-10 bg-white dark:bg-gray-800 dark:text-gray-300 py-1 text-center shadow-md border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4= flex justify-between items-center gap-6">
        {/* Text Section */}
        <div>
          <p className="text-sm text-gray-400">
            Developed by{" "}
            <a
              href={devSite}
              className="text-blue-400 hover:text-blue-500 transition-colors"
              aria-label="Visit MOHA's website"
              target="_blank"
              rel="noopener noreferrer"
            >
              {DevName}
            </a>{" "}
            with ❤️‍🔥
          </p>
          <p className="text-sm text-gray-500 mt-1">
            02/2025 - {new Date().getDate()}/0{new Date().getUTCMonth() + 1}/
            {new Date().getFullYear()} {formattedTime}
          </p>
        </div>

        {/* Social Icons Section */}
        <div className="flex gap-4">
          {socialLinks.map(({ href, label, icon, hoverClass }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 ${hoverClass} transition-all`}
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
