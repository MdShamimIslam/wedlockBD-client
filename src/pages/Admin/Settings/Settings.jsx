import { useState } from 'react';
import {  Settings, UserCog, Shield, CreditCard, Bell, Palette, Database } from 'lucide-react';
import GeneralSettings from './GeneralSettings';
import UserManagement from './UserManagement';
import SecuritySettings from './SecuritySettings';
import PaymentSettings from './PaymentSettings';
import NotificationSettings from './NotificationSettings';
import AppearanceSettings from './AppearanceSettings';
import AdvancedSettings from './AdvancedSettings';
import ActionButton from './ActionButton';

const AdminSettings = () => {
  const [activeSection, setActiveSection] = useState('general');

  const settingSections = [
    { id: 'general', label: 'General Settings', icon: Settings, color: 'blue' },
    { id: 'users', label: 'User Management', icon: UserCog, color: 'green' },
    { id: 'security', label: 'Security', icon: Shield, color: 'red' },
    { id: 'payments', label: 'Payments', icon: CreditCard, color: 'yellow' },
    { id: 'notifications', label: 'Notifications', icon: Bell, color: 'purple' },
    { id: 'appearance', label: 'Appearance', icon: Palette, color: 'indigo' },
    { id: 'advanced', label: 'Advanced', icon: Database, color: 'gray' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'general': return <GeneralSettings />;
      case 'users': return <UserManagement />;
      case 'security': return <SecuritySettings />;
      case 'payments': return <PaymentSettings />;
      case 'notifications': return <NotificationSettings />;
      case 'appearance': return <AppearanceSettings />;
      case 'advanced': return <AdvancedSettings />;
      default: return <GeneralSettings />;
    }
  };

  return (
    <div className="flex gap-8">
      <div className="w-80 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-fit sticky top-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Settings Menu</h2>
        <div className="space-y-2">
          {settingSections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                activeSection === section.id
                  ? `bg-${section.color}-50 text-${section.color}-700 border border-${section.color}-200`
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <section.icon className="w-5 h-5" />
              <span className="font-medium">{section.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1">
        {renderContent()}
        <ActionButton/>
      </div>
    </div>
  );
};

export default AdminSettings;