import { RefreshCw, Save } from "lucide-react";

const ActionButton = () => {
  return (
    <div className="flex justify-end gap-4 mt-8 pt-8 border-t border-gray-200">
          <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
            <RefreshCw className="w-4 h-4" />
            Reset to Default
          </button>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl">
            <Save className="w-4 h-4" />
            Save All Settings
          </button>
        </div>
  )
}

export default ActionButton;