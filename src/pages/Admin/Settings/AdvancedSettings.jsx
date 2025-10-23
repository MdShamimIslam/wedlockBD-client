import { Activity, Database, Download, Eye, EyeOff, RefreshCw, Zap } from "lucide-react";
import { useState } from "react";
import SectionUnderDevelopment from "../../../components/common/SectionUnderDevelopment";

const AdvancedSettings = () => {
    const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-8">

      <SectionUnderDevelopment
        emoji="🧩"
        title="Advanced Settings"
        subtitle="Configure advanced system options, automation, and third-party integrations."
        gradientFrom="from-lime-700"
        gradientTo="to-lime-400"
        glowFrom="from-yellow-300"
        glowVia="via-lime-400"
        glowTo="to-green-700"
        accentColor="text-lime-100"
      />


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h4 className="text-lg font-semibold text-gray-900 mb-6">System Configuration</h4>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cache Duration (hours)</label>
              <input 
                type="number" 
                defaultValue="24" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">API Rate Limit (per minute)</label>
              <input 
                type="number" 
                defaultValue="100" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Max File Upload Size (MB)</label>
              <input 
                type="number" 
                defaultValue="5" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Results Per Page</label>
              <input 
                type="number" 
                defaultValue="20" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h4 className="text-lg font-semibold text-gray-900 mb-6">Third-party Integrations</h4>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-700">Google Analytics</p>
                <p className="text-xs text-gray-500">Track website analytics</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6 shadow-sm" />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-700">Facebook Pixel</p>
                <p className="text-xs text-gray-500">Track conversions and ads</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1 shadow-sm" />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-700">WhatsApp Business API</p>
                <p className="text-xs text-gray-500">Send notifications via WhatsApp</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1 shadow-sm" />
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Google Maps API Key</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"}
                  defaultValue="AIzaSyC4R6AN7SmxjPUIGKdyBvXb7vdmFkFxPYs" 
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h4 className="text-lg font-semibold text-gray-900 mb-6">System Maintenance</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center">
            <Database className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">Backup Database</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center">
            <RefreshCw className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">Clear Cache</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center">
            <Download className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">Export Data</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center">
            <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">Optimize DB</p>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg border">
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-t-xl p-6">
          <h2 className="text-xl font-bold flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <Activity className="h-5 w-5" />
            </div>
            System Information
          </h2>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-indigo-50 rounded-lg">
              <h4 className="font-semibold text-indigo-800">Server Status</h4>
              <p className="text-2xl font-bold text-indigo-600 mt-2">Online</p>
              <p className="text-sm text-indigo-600">99.9% Uptime</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800">Database</h4>
              <p className="text-2xl font-bold text-green-600 mt-2">Healthy</p>
              <p className="text-sm text-green-600">Last backup: 2 hours ago</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800">Version</h4>
              <p className="text-2xl font-bold text-blue-600 mt-2">v2.1.0</p>
              <p className="text-sm text-blue-600">Latest stable</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">Storage Usage</h4>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "68%" }}></div>
                </div>
                <span className="text-sm font-semibold text-gray-800">68%</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">6.8 GB of 10 GB used</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">Bandwidth Usage</h4>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                </div>
                <span className="text-sm font-semibold text-gray-800">45%</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">450 GB of 1 TB used</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvancedSettings;