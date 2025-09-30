import { Camera, Globe, Monitor, Smartphone, Tablet } from "lucide-react";

const AppearanceSettings = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">Appearance Settings</h3>
        <p className="text-indigo-100">Customize the look and feel of your matrimony platform</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h4 className="text-lg font-semibold text-gray-900 mb-6">Theme & Colors</h4>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Primary Color Theme</label>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl border-2 border-blue-600 cursor-pointer shadow-sm hover:scale-105 transition-transform"></div>
                <div className="w-10 h-10 bg-purple-600 rounded-xl border-2 border-gray-300 cursor-pointer hover:border-purple-600 shadow-sm hover:scale-105 transition-transform"></div>
                <div className="w-10 h-10 bg-pink-600 rounded-xl border-2 border-gray-300 cursor-pointer hover:border-pink-600 shadow-sm hover:scale-105 transition-transform"></div>
                <div className="w-10 h-10 bg-green-600 rounded-xl border-2 border-gray-300 cursor-pointer hover:border-green-600 shadow-sm hover:scale-105 transition-transform"></div>
                <div className="w-10 h-10 bg-orange-600 rounded-xl border-2 border-gray-300 cursor-pointer hover:border-orange-600 shadow-sm hover:scale-105 transition-transform"></div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Secondary Color</label>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-gray-600 rounded-xl border-2 border-gray-600 cursor-pointer shadow-sm hover:scale-105 transition-transform"></div>
                <div className="w-10 h-10 bg-slate-600 rounded-xl border-2 border-gray-300 cursor-pointer hover:border-slate-600 shadow-sm hover:scale-105 transition-transform"></div>
                <div className="w-10 h-10 bg-zinc-600 rounded-xl border-2 border-gray-300 cursor-pointer hover:border-zinc-600 shadow-sm hover:scale-105 transition-transform"></div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-700">Dark Mode</p>
                <p className="text-xs text-gray-500">Enable dark theme for the platform</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1 shadow-sm" />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-700">Compact Layout</p>
                <p className="text-xs text-gray-500">Use compact layout for better space utilization</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1 shadow-sm" />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h4 className="text-lg font-semibold text-gray-900 mb-6">Logo & Branding</h4>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Site Logo</label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-gray-400 transition-colors cursor-pointer bg-gray-50 hover:bg-gray-100">
                <Globe className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-sm text-gray-600 font-medium">Click to upload logo</p>
                <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 2MB</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Favicon</label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:border-gray-400 transition-colors cursor-pointer bg-gray-50 hover:bg-gray-100">
                <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-xs text-gray-600">Upload favicon (32x32)</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Footer Text</label>
              <textarea 
                rows={3}
                defaultValue="© 2024 WedlockBD. All rights reserved. Find your perfect life partner with Bangladesh's most trusted matrimony platform."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h4 className="text-lg font-semibold text-gray-900 mb-6">Layout Customization</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center border-2 border-blue-500">
              <Monitor className="w-8 h-8 text-blue-500" />
            </div>
            <p className="text-sm font-medium text-gray-700">Desktop Layout</p>
            <p className="text-xs text-gray-500">Current: Modern Grid</p>
          </div>
          <div className="text-center">
            <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center border-2 border-gray-300">
              <Tablet className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-sm font-medium text-gray-700">Tablet Layout</p>
            <p className="text-xs text-gray-500">Current: Responsive</p>
          </div>
          <div className="text-center">
            <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center border-2 border-gray-300">
              <Smartphone className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-sm font-medium text-gray-700">Mobile Layout</p>
            <p className="text-xs text-gray-500">Current: Stack View</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppearanceSettings;