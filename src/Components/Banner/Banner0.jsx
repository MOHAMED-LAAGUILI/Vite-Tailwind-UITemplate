import { Clock, Clipboard, Tags } from "lucide-react";

export default function SaleBanner() {
  const dummySale = {
    title: "Mega Spring Sale",
    description: "Enjoy massive discounts on all products!",
    discount: 50,
    endsIn: "3d 12h 45m",
    couponCode: "SPRING50",
    validFrom: "March 20, 2025",
    validTo: "March 31, 2025",
  };

  return (
    <div className="w-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white py-6 px-4 md:px-8 rounded-lg shadow-xl flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 m-1">
      {/* Sale Information */}
      <div className="flex flex-col md:flex-row items-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-6 w-full max-w-5xl">
        <div className="flex flex-col">
          <h2 className="text-3xl md:text-4xl font-extrabold">{dummySale.title}</h2>
          <p className="text-lg md:text-xl text-gray-100 max-w-md">{dummySale.description}</p>
          <p className="text-2xl font-semibold text-yellow-400">{dummySale.discount}% OFF</p>
        </div>

        {/* Countdown Timer */}
        <div className="flex items-center space-x-2 bg-yellow-400 text-black px-4 md:px-6 py-2 rounded text-lg font-semibold shadow-md">
          <Clock className="text-xl" />
          <span>Ends In: {dummySale.endsIn}</span>
        </div>
      </div>

      {/* Coupon Code & Validity */}
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-6 space-y-4 md:space-y-0 w-full max-w-5xl">
        {/* Coupon Code */}
        <div className="flex items-center space-x-2 bg-black bg-opacity-70 px-4 md:px-6 py-2 rounded text-white font-semibold text-lg shadow-md">
          <Clipboard className="text-xl" />
          <span>Use Coupon: <span className="font-bold">{dummySale.couponCode}</span></span>
        </div>

        {/* Validity Dates */}
        <div className="flex items-center space-x-2 bg-gray-800 bg-opacity-80 px-4 md:px-6 py-2 rounded-full text-white font-semibold text-lg shadow-md">
          <Tags className="text-xl" />
          <span>Valid: {dummySale.validFrom} - {dummySale.validTo}</span>
        </div>
      </div>
    </div>
  );
}
