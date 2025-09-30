const PaymentSettings = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">Payment Settings</h3>
        <p className="text-yellow-100">Configure pricing and payment options for your platform</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h4 className="text-lg font-semibold text-gray-900 mb-6">Subscription Pricing</h4>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Premium Monthly Price</label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500 text-lg">৳</span>
                <input 
                  type="number" 
                  defaultValue="999" 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Premium Yearly Price</label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500 text-lg">৳</span>
                <input 
                  type="number" 
                  defaultValue="9999" 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Save 17% compared to monthly</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact View Price (Per Contact)</label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500 text-lg">৳</span>
                <input 
                  type="number" 
                  defaultValue="50" 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Profile Boost Price (Per Week)</label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500 text-lg">৳</span>
                <input 
                  type="number" 
                  defaultValue="199" 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-700">Auto-renewal</p>
                <p className="text-xs text-gray-500">Enable automatic subscription renewal</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6 shadow-sm" />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h4 className="text-lg font-semibold text-gray-900 mb-6">Payment Methods & Settings</h4>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-700">bKash Payment</p>
                <p className="text-xs text-gray-500">Accept payments via bKash</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6 shadow-sm" />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-700">Nagad Payment</p>
                <p className="text-xs text-gray-500">Accept payments via Nagad</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6 shadow-sm" />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-700">Credit/Debit Cards</p>
                <p className="text-xs text-gray-500">Accept international cards</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6 shadow-sm" />
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Payment Gateway Fee (%)</label>
              <input 
                type="number" 
                step="0.1"
                defaultValue="2.5" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Refund Policy (Days)</label>
              <input 
                type="number" 
                defaultValue="7" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-700">Trial Period</p>
                <p className="text-xs text-gray-500">Offer free trial for premium features</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1 shadow-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentSettings;