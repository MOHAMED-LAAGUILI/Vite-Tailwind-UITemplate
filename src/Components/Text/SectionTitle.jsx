import clsx from 'clsx';
import { Star } from 'lucide-react';

// eslint-disable-next-line react/prop-types
const SectionTitle = ({ icon = <Star />, title = 'Default Title', subtitle = '', description = '', classes = '' }) => {
  return (
    <div className={clsx("text-center group", classes)}>
      <div className={clsx("flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 ease-in-out", classes)}>
        <div className={clsx("mr-2 text-xl text-gray-800 dark:text-gray-200 group-hover:text-yellow-500 transition-all", classes)}>
          {icon}
        </div>
        <h2 className={clsx("text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300 ease-in-out", classes)}>
          {title}
        </h2>
      </div>
      {subtitle && (
        <h3 className={clsx("text-xl text-gray-700 dark:text-gray-300 mb-2 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300 ease-in-out", classes)}>
          {subtitle}
        </h3>
      )}
      {description && (
        <p className={clsx("text-base text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 ease-in-out", classes)}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
