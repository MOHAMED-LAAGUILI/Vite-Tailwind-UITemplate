/* eslint-disable react/prop-types */
export default function SupportMe({coffeeLogo, supportUrl}) {
  return (
    <a
    href={supportUrl}
    target="_blank"
    className="md:absolute bottom-20 right-0 p-4 float-right group relative z-50"
  >
    <img
      src={coffeeLogo}
      alt="Buy Me A Coffee"
      className="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-brand-yellow"
    />
    <span className="absolute left-0 bottom-4 transform -translate-x-full bg-black text-white dark:bg-white dark:text-black text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2">
      Support me on Buy Me A Coffee
    </span>
  </a>
    )
}
