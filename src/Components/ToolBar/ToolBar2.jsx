import { Bot, ChartArea, Link, Lock, Mouse, PhoneCall, PlayCircle } from "lucide-react";

function ToolBar2() {
  return (
    <>

        <div className="mt-5 flex  justify-center w-full max-w-4xl px-6 mx-auto">
          <div className="w-full max-w-md flex-auto overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-gray-900/10">
            <div className="p-6">
              {/* List of Items */}
              {[
                { icon: <ChartArea />, title: 'Analytics', description: 'Get a better understanding of your traffic' },
                { icon: <Mouse />, title: 'Engagement', description: 'Speak directly to your customers' },
                { icon: <Lock />, title: 'Security', description: 'Your customers\' data will be safe and secure' },
                { icon: <Link />, title: 'Integrations', description: 'Connect with third-party tools' },
                { icon: <Bot />, title: 'Automations', description: 'Build strategic funnels that will convert' },
              ].map((item, index) => (
                <div key={index} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 transition-all ease-in-out duration-300">
                  <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    {item.icon}
                  </div>
                  <div>
                    <a href="#" className="font-semibold text-gray-900 group-hover:text-blue-500 transition-colors duration-300">
                      {item.title}
                    </a>
                    <p className="mt-1 text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="grid grid-cols-2 divide-x divide-gray-900/10 bg-gray-50 rounded-b-3xl">
              <a href="#" className="flex items-center justify-center gap-x-2.5 p-4 font-semibold text-gray-900 hover:bg-gray-100 transition-all duration-300 rounded-b-3xl">
                <PlayCircle />
                Watch demo
              </a>
              <a href="#" className="flex items-center justify-center gap-x-2.5 p-4 font-semibold text-gray-900 hover:bg-gray-100 transition-all duration-300 rounded-b-3xl">
                <PhoneCall />
                Contact sales
              </a>
            </div>
          </div>
        </div>
    </>
  );
}

export default ToolBar2;
