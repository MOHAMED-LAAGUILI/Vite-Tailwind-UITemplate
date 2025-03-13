function TailwindSourcesPage() {
    const uiResources = [
      { name: "Tailwind Plus", url: "https://tailwindcss.com/plus" },
      { name: "Uiverse.io", url: "https://uiverse.io/" },
    ];
  
    return (
      <section className="flex flex-col items-center justify-center   px-6 py-10">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
          Other Tailwind/CSS UI Components
        </h1>
        <div className="flex flex-col space-y-4">
          {uiResources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              {resource.name}
            </a>
          ))}
        </div>
      </section>
    );
  }
  
  export default TailwindSourcesPage;
  