import { useState } from 'react';
import { 
  User, 
  Edit, 
  Eye, 
  Heart, 
  MessageCircle, 
  LogOut,
  BarChart3,
  Users,
  Crown,
  CheckCircle,
  DollarSign,
  PieChart,
  TrendingUp,
  Calendar,
  Star,
  Settings,
  Download,
  RefreshCw,
  UserCheck,
  UserX,
  Mail,
  Phone
} from 'lucide-react';
import useAuth from '../../hooks/useAuth';

const TDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { user } = useAuth();

  const stats = {
    totalBiodatas: 15420,
    maleBiodatas: 8230,
    femaleBiodatas: 7190,
    premiumBiodatas: 3450,
    totalRevenue: 1725000,
    contactRequests: 2340,
    successStories: 1250
  }

//   const isAdmin = user?.role === 'admin' || false; 
const isAdmin = false;

  // Mock data for different sections
  const mockContactRequests = [
    {
      id: 1,
      requestedBiodataId: 15,
      requesterBiodataId: 8,
      requesterEmail: 'user@example.com',
      status: 'pending',
      amount: 500,
      requestDate: '2024-01-15',
      requestedProfile: {
        name: 'Fatima Khan',
        age: 25,
        division: 'Dhaka',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    },
    {
      id: 2,
      requestedBiodataId: 12,
      requesterBiodataId: 8,
      requesterEmail: 'user@example.com',
      status: 'approved',
      amount: 500,
      requestDate: '2024-01-10',
      approvedDate: '2024-01-12',
      requestedProfile: {
        name: 'Ahmed Rahman',
        age: 28,
        division: 'Chattagram',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
        phone: '+880 1712-345678',
        email: 'ahmed.rahman@email.com'
      }
    }
  ];

  const mockFavorites = [
    {
      id: 3,
      name: 'Nadia Ahmed',
      age: 26,
      division: 'Sylhet',
      occupation: 'Teacher',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      addedDate: '2024-01-20'
    },
    {
      id: 7,
      name: 'Karim Hassan',
      age: 32,
      division: 'Khulna',
      occupation: 'Engineer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      addedDate: '2024-01-18'
    }
  ];

  const mockSuccessStories = [
    {
      id: 1,
      maleBiodataId: 15,
      femaleBiodataId: 23,
      maleProfile: {
        name: 'Rahul Ahmed',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      femaleProfile: {
        name: 'Fatima Khan',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      marriageDate: '2024-01-15',
      story: 'We found each other through SoulMate and it was love at first sight...'
    },
    {
      id: 2,
      maleBiodataId: 8,
      femaleBiodataId: 12,
      maleProfile: {
        name: 'Arif Hassan',
        image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      femaleProfile: {
        name: 'Nadia Rahman',
        image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      marriageDate: '2023-12-20',
      story: 'Our families are very happy with our choice. Thank you SoulMate!'
    }
  ];

  const handleLogout = () => {
    console.log('Logging out...');
  };

  // User Dashboard Sidebar Items
  const userSidebarItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'add-biodata', label: 'Add Biodata', icon: Edit },
    { id: 'edit-biodata', label: 'Edit Biodata', icon: Edit },
    { id: 'view-biodata', label: 'View Biodata', icon: Eye },
    { id: 'contact-request', label: 'Contact Request', icon: MessageCircle },
    { id: 'favorites', label: 'Favourites', icon: Heart },
  ];

  // Admin Dashboard Sidebar Items
  const adminSidebarItems = [
    { id: 'admin-overview', label: 'Overview', icon: BarChart3 },
    { id: 'manage-users', label: 'Manage Users', icon: Users },
    { id: 'approved-premium', label: 'Approved Pro', icon: Crown },
    { id: 'approved-contact', label: 'Contact Request', icon: CheckCircle },
    { id: 'success-stories', label: 'Success Stories', icon: Star },
  ];

  const sidebarItems = isAdmin ? adminSidebarItems : userSidebarItems;

  const renderUserOverview = () => (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-3xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Welcome back, {user?.name || 'User'}!</h2>
            <p className="text-pink-100 text-lg">Manage your profile and find your perfect match</p>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded-full">
            <User className="h-12 w-12" />
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Profile Views</p>
              <p className="text-2xl font-bold text-gray-800">1,234</p>
            </div>
            <Eye className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Favorites</p>
              <p className="text-2xl font-bold text-gray-800">{mockFavorites.length}</p>
            </div>
            <Heart className="h-8 w-8 text-red-500" />
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Contact Requests</p>
              <p className="text-2xl font-bold text-gray-800">{mockContactRequests.length}</p>
            </div>
            <MessageCircle className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Matches</p>
              <p className="text-2xl font-bold text-gray-800">45</p>
            </div>
            <Star className="h-8 w-8 text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
            <div className="bg-blue-100 p-2 rounded-full">
              <Eye className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Profile viewed by Fatima Khan</p>
              <p className="text-gray-500 text-sm">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
            <div className="bg-green-100 p-2 rounded-full">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Contact request approved</p>
              <p className="text-gray-500 text-sm">1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAdminOverview = () => (
    <div className="space-y-8">
      {/* Admin Welcome */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Admin Dashboard</h2>
            <p className="text-purple-100 text-lg">Manage your matrimony platform</p>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded-full">
            <Settings className="h-12 w-12" />
          </div>
        </div>
      </div>

      {/* Admin Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Biodatas</p>
              <p className="text-2xl font-bold text-gray-800">{stats.totalBiodatas.toLocaleString()}</p>
            </div>
            <Users className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Male Biodatas</p>
              <p className="text-2xl font-bold text-gray-800">{stats.maleBiodatas.toLocaleString()}</p>
            </div>
            <UserCheck className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Female Biodatas</p>
              <p className="text-2xl font-bold text-gray-800">{stats.femaleBiodatas.toLocaleString()}</p>
            </div>
            <UserX className="h-8 w-8 text-pink-500" />
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Premium Biodatas</p>
              <p className="text-2xl font-bold text-gray-800">{stats.premiumBiodatas.toLocaleString()}</p>
            </div>
            <Crown className="h-8 w-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-800">৳{stats.totalRevenue.toLocaleString()}</p>
            </div>
            <DollarSign className="h-8 w-8 text-green-600" />
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Biodata Distribution</h3>
          <div className="flex items-center justify-center h-64">
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                <PieChart className="h-16 w-16 text-white" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">{stats.totalBiodatas.toLocaleString()}</div>
                  <div className="text-sm">Total</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">{stats.maleBiodatas.toLocaleString()}</div>
              <div className="text-sm text-gray-500">Male</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-pink-600">{stats.femaleBiodatas.toLocaleString()}</div>
              <div className="text-sm text-gray-500">Female</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Revenue Overview</h3>
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <TrendingUp className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-green-600 mb-2">৳{stats.totalRevenue.toLocaleString()}</div>
              <div className="text-gray-500">Total Revenue</div>
              <div className="text-sm text-gray-400 mt-2">From {stats.contactRequests} contact requests</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContactRequests = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800">My Contact Requests</h2>
        <div className="flex items-center space-x-2">
          <RefreshCw className="h-5 w-5 text-gray-400" />
          <span className="text-gray-500">Last updated: Just now</span>
        </div>
      </div>

      <div className="grid gap-6">
        {mockContactRequests.map((request) => (
          <div key={request.id} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={request.requestedProfile.image}
                  alt={request.requestedProfile.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{request.requestedProfile.name}</h3>
                  <p className="text-gray-600">{request.requestedProfile.age} years, {request.requestedProfile.division}</p>
                  <p className="text-sm text-gray-500">Biodata ID: {request.requestedBiodataId}</p>
                </div>
              </div>
              <div className="text-right">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  request.status === 'approved' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {request.status === 'approved' ? 'Approved' : 'Pending'}
                </span>
                <p className="text-sm text-gray-500 mt-2">৳{request.amount}</p>
              </div>
            </div>

            {request.status === 'approved' && request.requestedProfile.phone && (
              <div className="mt-6 p-4 bg-green-50 rounded-xl">
                <h4 className="font-semibold text-green-800 mb-3">Contact Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-green-600" />
                    <span className="text-green-700">{request.requestedProfile.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-green-600" />
                    <span className="text-green-700">{request.requestedProfile.email}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <span>Requested: {new Date(request.requestDate).toLocaleDateString()}</span>
              {request.approvedDate && (
                <span>Approved: {new Date(request.approvedDate).toLocaleDateString()}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFavorites = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800">Favourite Biodatas</h2>
        <div className="flex items-center space-x-2">
          <Heart className="h-5 w-5 text-red-500" />
          <span className="text-gray-500">{mockFavorites.length} favorites</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockFavorites.map((favorite) => (
          <div key={favorite.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src={favorite.image}
              alt={favorite.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{favorite.name}</h3>
              <p className="text-gray-600 mb-4">{favorite.age} years, {favorite.division}</p>
              <p className="text-gray-500 mb-4">{favorite.occupation}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Added: {new Date(favorite.addedDate).toLocaleDateString()}</span>
                <button className="text-red-500 hover:text-red-600">
                  <Heart className="h-5 w-5 fill-current" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSuccessStories = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800">Success Stories</h2>
        <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors">
          <Download className="h-4 w-4 inline mr-2" />
          Export Data
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Male Biodata</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Female Biodata</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Marriage Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockSuccessStories.map((story) => (
                <tr key={story.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={story.maleProfile.image}
                        alt={story.maleProfile.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-800">{story.maleProfile.name}</p>
                        <p className="text-sm text-gray-500">ID: {story.maleBiodataId}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={story.femaleProfile.image}
                        alt={story.femaleProfile.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-800">{story.femaleProfile.name}</p>
                        <p className="text-sm text-gray-500">ID: {story.femaleBiodataId}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">{new Date(story.marriageDate).toLocaleDateString()}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm">
                      View Story
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    if (isAdmin) {
      switch (activeTab) {
        case 'admin-overview':
          return renderAdminOverview();
        case 'success-stories':
          return renderSuccessStories();
        case 'manage-users':
          return <div className="text-center py-16"><Users className="h-24 w-24 text-gray-300 mx-auto mb-4" /><h3 className="text-2xl font-semibold text-gray-600">Manage Users</h3><p className="text-gray-500">User management functionality coming soon</p></div>;
        case 'approved-premium':
          return <div className="text-center py-16"><Crown className="h-24 w-24 text-gray-300 mx-auto mb-4" /><h3 className="text-2xl font-semibold text-gray-600">Approved Premium</h3><p className="text-gray-500">Premium approval functionality coming soon</p></div>;
        case 'approved-contact':
          return <div className="text-center py-16"><CheckCircle className="h-24 w-24 text-gray-300 mx-auto mb-4" /><h3 className="text-2xl font-semibold text-gray-600">Approved Contact Requests</h3><p className="text-gray-500">Contact request approval functionality coming soon</p></div>;
        default:
          return renderAdminOverview();
      }
    } else {
      switch (activeTab) {
        case 'overview':
          return renderUserOverview();
        case 'contact-requests':
          return renderContactRequests();
        case 'favorites':
          return renderFavorites();
        case 'add-biodata':
          return <div className="text-center py-16"><Edit className="h-24 w-24 text-gray-300 mx-auto mb-4" /><h3 className="text-2xl font-semibold text-gray-600">Add Biodata</h3><p className="text-gray-500">Biodata editing functionality coming soon</p></div>;
        case 'edit-biodata':
          return <div className="text-center py-16"><Edit className="h-24 w-24 text-gray-300 mx-auto mb-4" /><h3 className="text-2xl font-semibold text-gray-600">Edit Biodata</h3><p className="text-gray-500">Biodata editing functionality coming soon</p></div>;
        case 'view-biodata':
          return <div className="text-center py-16"><Eye className="h-24 w-24 text-gray-300 mx-auto mb-4" /><h3 className="text-2xl font-semibold text-gray-600">View Biodata</h3><p className="text-gray-500">Biodata viewing functionality coming soon</p></div>;
        default:
          return renderUserOverview();
      }
    }
  };

  return (
      <div className="flex my-16 md:my-20">
        {/* sidebar */}
        <div className="w-64 bg-gray-100 rounded-lg sticky top-0">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-3 rounded-full">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{user?.name || 'User'}</h3>
                <p className="text-sm text-gray-500">{isAdmin ? 'Administrator' : 'Member'}</p>
              </div>
            </div>

            <nav className="space-y-2">
              {sidebarItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                      activeTab === item.id
                        ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors duration-200"
              >
                <LogOut className="h-5 w-5" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {renderContent()}
        </div>
      </div>
  );
};

export default TDashboard;