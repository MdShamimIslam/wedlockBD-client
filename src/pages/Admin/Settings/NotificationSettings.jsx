import { DollarSign, Edit, Heart, Mail, MessageSquare, Smartphone } from "lucide-react";
import { useState } from "react";
import UnderDevelopmentAlert from "../../../component/common/UnderDevelopmentAlert";

const NotificationSettings = () => {
    const [notifications, setNotifications] = useState({ email: true, sms: false, push: true, matches: true, messages: true, payments: true });

    const toggleNotification = (key) => {
        setNotifications(prev => ({
          ...prev,
          [key]: !prev[key]
        }));
      };
  return (
    <div className="space-y-8">
      <UnderDevelopmentAlert section="Notification Settings"/>
      
    <div className="bg-gradient-to-r from-black to-slate-600 rounded-2xl p-6 text-white">
      <h3 className="text-2xl font-bold mb-2">Notification Settings</h3>
      <p className="text-purple-100">Configure how and when to notify your users</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h4 className="text-lg font-semibold text-gray-900 mb-6">Notification Channels</h4>
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm font-medium text-gray-700">Email Notifications</p>
                <p className="text-xs text-gray-500">Send notifications via email</p>
              </div>
            </div>
            <button 
              onClick={() => toggleNotification('email')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                notifications.email ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm ${
                notifications.email ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-sm font-medium text-gray-700">SMS Notifications</p>
                <p className="text-xs text-gray-500">Send notifications via SMS</p>
              </div>
            </div>
            <button 
              onClick={() => toggleNotification('sms')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                notifications.sms ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm ${
                notifications.sms ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-sm font-medium text-gray-700">Push Notifications</p>
                <p className="text-xs text-gray-500">Send push notifications to mobile app</p>
              </div>
            </div>
            <button 
              onClick={() => toggleNotification('push')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                notifications.push ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm ${
                notifications.push ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h4 className="text-lg font-semibold text-gray-900 mb-6">Notification Types</h4>
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-pink-500" />
              <div>
                <p className="text-sm font-medium text-gray-700">Match Notifications</p>
                <p className="text-xs text-gray-500">Notify users about new matches</p>
              </div>
            </div>
            <button 
              onClick={() => toggleNotification('matches')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                notifications.matches ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm ${
                notifications.matches ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm font-medium text-gray-700">Message Notifications</p>
                <p className="text-xs text-gray-500">Notify about new messages</p>
              </div>
            </div>
            <button 
              onClick={() => toggleNotification('messages')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                notifications.messages ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm ${
                notifications.messages ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <DollarSign className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-sm font-medium text-gray-700">Payment Notifications</p>
                <p className="text-xs text-gray-500">Notify about payments and subscriptions</p>
              </div>
            </div>
            <button 
              onClick={() => toggleNotification('payments')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                notifications.payments ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm ${
                notifications.payments ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h4 className="text-lg font-semibold text-gray-900 mb-6">Email Templates</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          'Welcome Email',
          'Profile Approval',
          'New Match Found',
          'Message Received',
          'Payment Confirmation',
          'Subscription Expiry'
        ].map((template, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">{template}</span>
              <button className="text-blue-600 hover:text-blue-700">
                <Edit className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default NotificationSettings;