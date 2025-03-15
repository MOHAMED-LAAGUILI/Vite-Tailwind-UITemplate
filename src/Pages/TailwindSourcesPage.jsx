
function TailwindSourcesPage() {
  const uiResources = [
    { name: "Tailwind CSS", url: "https://tailwindcss.com/", imgUrl: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.bbb5bdb6.svg" },
    { name: "Flowbite", url: "https://flowbite.com/", imgUrl: "https://flowbite.com/docs/images/logo.svg" },
    { name: "DaisyUI", url: "https://daisyui.com/", imgUrl: "https://daisyui.com/images/daisyui-logo.svg" },
    { name: "Headless UI", url: "https://headlessui.com/", imgUrl: "https://headlessui.com/_next/static/media/logo.819b1c1c.svg" },
    { name: "Tailwind UI", url: "https://tailwindui.com/", imgUrl: "https://tailwindui.com/_next/static/media/logo.ef7a22b0.svg" },
    { name: "HyperUI", url: "https://www.hyperui.dev", imgUrl: "https://www.hyperui.dev/logo.svg" },
    { name: "Meraki UI", url: "https://merakiui.com/", imgUrl: "https://merakiui.com/images/logo.svg" },
    { name: "Tailwind Toolbox", url: "https://www.tailwindtoolbox.com/", imgUrl: "https://www.tailwindtoolbox.com/img/logo.svg" },
    { name: "Tailwind Components", url: "https://tailwindcomponents.com/", imgUrl: "https://tailwindcomponents.com/svg/tailwindcomponents-logo.svg" },
    { name: "TailGrids", url: "https://tailgrids.com/", imgUrl: "https://tailgrids.com/images/logo.svg" },
    { name: "Mamba UI", url: "https://mambaui.com/", imgUrl: "https://mambaui.com/assets/logo.svg" },
    { name: "Kutty", url: "https://kutty.netlify.app/", imgUrl: "https://kutty.netlify.app/logo.svg" },
    { name: "Treact", url: "https://treact.owaiskhan.me/", imgUrl: "https://treact.owaiskhan.me/static/media/logo.2c8b4b3f.svg" },
    { name: "Tailblocks", url: "https://tailblocks.cc/", imgUrl: "https://tailblocks.cc/img/logo.svg" },
    { name: "Tailwind Starter Kit", url: "https://www.creative-tim.com/learning-lab/tailwind-starter-kit", imgUrl: "https://s3.amazonaws.com/creativetim_bucket/products/96/original/opt_tk_tailwindcss_thumbnail.jpg" },
    { name: "Notus JS", url: "https://www.creative-tim.com/product/notus-js", imgUrl: "https://s3.amazonaws.com/creativetim_bucket/products/120/original/opt_njs_tailwind_thumbnail.jpg" },
    { name: "Windmill Dashboard", url: "https://windmill-dashboard.vercel.app/", imgUrl: "https://windmill-dashboard.vercel.app/logo.svg" },
    { name: "Material Tailwind", url: "https://www.material-tailwind.com/", imgUrl: "https://www.material-tailwind.com/img/material-tailwind-logo.svg" },
    { name: "Preline UI", url: "https://preline.co/", imgUrl: "https://preline.co/assets/images/logo.svg" },
    { name: "Flyon UI", url: "https://flyonui.com/", imgUrl: "https://flyonui.com/assets/images/logo.svg" },
    { name: "LottieFiles", url: "https://lottiefiles.com/", imgUrl: "https://lottiefiles.com/images/logo.svg" },
    { name: "SpinKit", url: "https://tobiasahlin.com/spinkit/", imgUrl: "https://tobiasahlin.com/spinkit/assets/spinkit-logo.svg" },
    { name: "Tailwind Cheat Sheet", url: "https://nerdcave.com/tailwind-cheat-sheet", imgUrl: "https://nerdcave.com/_next/static/media/logo.8b3c9d0e.svg" },
    { name: "Tailwind Flex", url: "https://tailwindflex.com/", imgUrl: "https://tailwindflex.com/images/logo.svg" },
  
];

  return (
    <section className="flex flex-col items-center px-6 py-10  min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        Tailwind CSS UI Component Libraries
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {uiResources.map((resource, index) => (
          <a
            key={index}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={resource.imgUrl}
              alt={resource.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="text-lg text-gray-700 dark:text-gray-200 font-medium">
              {resource.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default TailwindSourcesPage;
