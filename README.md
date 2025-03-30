Thought for 2 seconds### One UI - Modern UI Framework





One UI is a modern, fully responsive UI framework designed for simplicity and efficiency. Whether you are a developer or designer, One UI provides you with all the tools you need to build beautiful and functional websites.

## 🚀 Features

- **Lightning Fast Performance** - Optimized for speed and efficiency, ensuring your applications load quickly and run smoothly on all devices
- **Secure by Design** - Built with security in mind to help you create applications that protect your users' data and privacy
- **Premium Experience** - Deliver exceptional user experiences with beautiful, accessible, and responsive components
- **Responsive Design** - Fully responsive layouts that work perfectly on all screen sizes
- **Accessibility Built-in** - WCAG compliant components for creating inclusive web experiences
- **Dark Mode Support** - Seamless light and dark mode switching with persistent user preferences
- **Internationalization** - Built-in support for multiple languages with easy translation management


## 📋 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Customization](#customization)
- [Internationalization](#internationalization)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)


## 🔧 Installation

Get started with One UI in minutes:

```shellscript
# Clone the repository
git clone https://github.com/MOHAMED-LAAGUILI/Vite-Tailwind-UITemplate

# Navigate to the project directory
cd Vite-Tailwind-UITemplate

# Create .env file and set environment
VITE_ENVIRONMENT=development

# Install dependencies
npm install
# or
yarn

# Start the development server
npm run dev
# or
yarn dev
```

## 🖥️ Usage

After starting the development server, your site will be available at `http://localhost:5173`.

### Project Structure

```plaintext
Vite-Tailwind-UITemplate/
├── public/
│   └──  ...
├── src/
│   ├── components/
│   │   └──  ...
│   ├── locales/
│   │    └──  ...
│   ├── pages/
│   │    └──  ...
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── i18n.js
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── eslint.config.js
├── README.md
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```


## 🛠️ Technologies

One UI is built with the following technologies:

- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - A production-ready motion library for React
- [React i18next](https://react.i18next.com/) - Internationalization framework for React
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icon toolkit
- [React Hot Toast](https://react-hot-toast.com/) - Smoking hot notifications for React
..... etc

## 🎨 Customization

### Tailwind Configuration

You can customize the default theme by modifying the `tailwind.config.js` file:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Customize your color palette here
        // Add more custom colors as needed
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        // Add more custom fonts as needed
      },
    },
  },
  plugins: [],
}
```

### Dark Mode

One UI comes with built-in dark mode support. You can toggle dark mode using the `toggleDarkMode` function:

## 🌐 Internationalization

One UI supports multiple languages out of the box. The framework uses `react-i18next` for internationalization.

### Adding a New Language

1. Create a new translation file in the `src/locales` directory
2. Import and register the new language in your i18next configuration



## 🌍 Browser Support

One UI supports all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)


## 👥 Contributing

We welcome contributions to One UI! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request


Please make sure your code follows our coding standards and includes appropriate tests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

For questions or support, please reach out to us at [https://laaguili-dev.app.genez.io/](https://laaguili-dev.app.genez.io/) or open an issue on GitHub.

---

Built with ❤️ by Me