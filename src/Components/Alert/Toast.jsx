import { toast } from "react-hot-toast";
import { PartyPopper } from "lucide-react";

export default function ToastExample() {
    return (
        <div className="flex flex-col items-center gap-3 p-6">




            {/* Success Toast */}
            <button
                onClick={() => toast.success("Success! 🎉")}
                className="px-4 py-2 rounded-lg bg-green-600 text-white shadow-md hover:bg-green-700"
            >
                Show Success Toast
            </button>

            {/* Error Toast */}
            <button
                onClick={() => toast.error("Something went wrong! ❌")}
                className="px-4 py-2 rounded-lg bg-red-600 text-white shadow-md hover:bg-red-700"
            >
                Show Error Toast
            </button>

            {/* Loading Toast */}
            <button
                onClick={() => toast.loading("Processing...", { duration: 3000 })}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white shadow-md hover:bg-blue-700"
            >
                Show Loading Toast
            </button>

            {/* Custom Toast */}
            <button
                onClick={() =>
                    toast.custom((t) => (
                        <div className="flex items-center gap-2 p-4 bg-gray-800 text-white rounded-lg">
                            <PartyPopper className="text-yellow-400" />
                            <span>Custom Toast Message! 🎊</span>
                            <button
                                onClick={() => toast.dismiss(t.id)}
                                className="ml-auto px-2 py-1 text-sm bg-gray-700 rounded hover:bg-gray-600"
                            >
                                Close
                            </button>
                        </div>
                    ))
                }
                className="px-4 py-2 rounded-lg bg-purple-600 text-white shadow-md hover:bg-purple-700"
            >
                Show Custom Toast
            </button>
        </div>
    );
}
