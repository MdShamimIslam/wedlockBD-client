import  { useState } from 'react';

const MatrimonyDashboard = () => {
  const [userType, setUserType] = useState('user'); 
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock data
  const mockBiodata = {
    biodataId: 12345,
    type: 'Male',
    name: 'John Smith',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    dob: '1990-05-15',
    height: "5'9",
    weight: '75kg',
    age: 33,
    occupation: 'Software Engineer',
    race: 'Asian',
    fathersName: 'Robert Smith',
    mothersName: 'Mary Smith',
    permanentDivision: 'Dhaka',
    presentDivision: 'Dhaka',
    expectedPartnerAge: '25-30',
    expectedPartnerHeight: "5'2 - 5'6",
    expectedPartnerWeight: '50-65kg',
    contactEmail: 'john.smith@example.com',
    mobileNumber: '+8801712345678'
  };

  const mockContactRequests = [
    { id: 1, name: 'Emma Johnson', biodataId: 23456, status: 'Approved', mobile: '+8801812345678', email: 'emma@example.com' },
    { id: 2, name: 'Sophia Williams', biodataId: 34567, status: 'Pending', mobile: '', email: '' },
    { id: 3, name: 'Olivia Brown', biodataId: 45678, status: 'Approved', mobile: '+8801912345678', email: 'olivia@example.com' }
  ];

  const mockFavorites = [
    { id: 1, name: 'Emma Johnson', biodataId: 23456, permanentAddress: 'Chattagram', occupation: 'Doctor' },
    { id: 2, name: 'Sophia Williams', biodataId: 34567, permanentAddress: 'Sylhet', occupation: 'Teacher' },
    { id: 3, name: 'Olivia Brown', biodataId: 45678, permanentAddress: 'Khulna', occupation: 'Architect' }
  ];

  const mockUsers = [
    { id: 1, name: 'John Smith', email: 'john@example.com', isAdmin: false, isPremium: true },
    { id: 2, name: 'Emma Johnson', email: 'emma@example.com', isAdmin: false, isPremium: false },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', isAdmin: true, isPremium: true },
    { id: 4, name: 'Sophia Williams', email: 'sophia@example.com', isAdmin: false, isPremium: false }
  ];

  const mockPremiumRequests = [
    { id: 1, name: 'Emma Johnson', email: 'emma@example.com', biodataId: 23456 },
    { id: 2, name: 'Sophia Williams', email: 'sophia@example.com', biodataId: 34567 }
  ];

  const mockContactRequestsAdmin = [
    { id: 1, name: 'John Smith', email: 'john@example.com', biodataId: 12345 },
    { id: 2, name: 'Michael Brown', email: 'michael@example.com', biodataId: 45678 }
  ];

  // Dashboard statistics
  const stats = {
    totalBiodata: 1250,
    maleBiodata: 720,
    femaleBiodata: 530,
    premiumBiodata: 150,
    totalRevenue: 125000
  };

  return (
    <div className='my-16 bg-slate-50 rounded-md'>
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="md:w-64 bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Dashboard Menu</h2>
            <nav>
              <ul className="space-y-2">
                {userType === 'user' ? (
                  <>
                    <li>
                      <button 
                        onClick={() => setActiveTab('dashboard')}
                        className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'dashboard' ? 'bg-pink-100 text-pink-700' : 'hover:bg-gray-100'}`}
                      >
                        User Dashboard
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('editBiodata')}
                        className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'editBiodata' ? 'bg-pink-100 text-pink-700' : 'hover:bg-gray-100'}`}
                      >
                        Edit Biodata
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('viewBiodata')}
                        className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'viewBiodata' ? 'bg-pink-100 text-pink-700' : 'hover:bg-gray-100'}`}
                      >
                        View Biodata
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('contactRequests')}
                        className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'contactRequests' ? 'bg-pink-100 text-pink-700' : 'hover:bg-gray-100'}`}
                      >
                        My Contact Requests
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('favorites')}
                        className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'favorites' ? 'bg-pink-100 text-pink-700' : 'hover:bg-gray-100'}`}
                      >
                        Favorites Biodata
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('gotMarried')}
                        className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'gotMarried' ? 'bg-pink-100 text-pink-700' : 'hover:bg-gray-100'}`}
                      >
                        Got Married
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <button 
                        onClick={() => setActiveTab('adminDashboard')}
                        className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'adminDashboard' ? 'bg-pink-100 text-pink-700' : 'hover:bg-gray-100'}`}
                      >
                        Admin Dashboard
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('manageUsers')}
                        className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'manageUsers' ? 'bg-pink-100 text-pink-700' : 'hover:bg-gray-100'}`}
                      >
                        Manage Users
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('approvedPremium')}
                        className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'approvedPremium' ? 'bg-pink-100 text-pink-700' : 'hover:bg-gray-100'}`}
                      >
                        Approved Premium
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('approvedContact')}
                        className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'approvedContact' ? 'bg-pink-100 text-pink-700' : 'hover:bg-gray-100'}`}
                      >
                        Approved Contact Request
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('successStories')}
                        className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'successStories' ? 'bg-pink-100 text-pink-700' : 'hover:bg-gray-100'}`}
                      >
                        Success Stories
                      </button>
                    </li>
                  </>
                )}
                <li>
                  <button className="w-full text-left px-4 py-2 rounded-md text-red-600 hover:bg-red-100 mt-4">
                    Logout
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {userType === 'user' ? (
              <>
                {activeTab === 'dashboard' && <UserDashboard stats={stats} />}
                {activeTab === 'editBiodata' && <EditBiodata biodata={mockBiodata} />}
                {activeTab === 'viewBiodata' && <ViewBiodata biodata={mockBiodata} />}
                {activeTab === 'contactRequests' && <ContactRequests requests={mockContactRequests} />}
                {activeTab === 'favorites' && <Favorites favorites={mockFavorites} />}
                {activeTab === 'gotMarried' && <GotMarriedForm />}
              </>
            ) : (
              <>
                {activeTab === 'adminDashboard' && <AdminDashboard stats={stats} />}
                {activeTab === 'manageUsers' && <ManageUsers users={mockUsers} />}
                {activeTab === 'approvedPremium' && <ApprovedPremium requests={mockPremiumRequests} />}
                {activeTab === 'approvedContact' && <ApprovedContact requests={mockContactRequestsAdmin} />}
                {activeTab === 'successStories' && <SuccessStories />}
              </>
            )}
          </div>
        </div>
      </div>
      </div>
  );
};

// User Dashboard Component
const UserDashboard = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">User Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-pink-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-pink-700">Biodata Views</h3>
          <p className="text-3xl font-bold mt-2">128</p>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-blue-700">Contact Requests</h3>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-green-700">Favorites</h3>
          <p className="text-3xl font-bold mt-2">8</p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-purple-700">Profile Strength</h3>
          <p className="text-3xl font-bold mt-2">85%</p>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4">Recent Activities</h3>
        <ul className="space-y-3">
          <li className="flex items-center">
            <div className="bg-pink-100 rounded-full p-2 mr-3">
              <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </div>
            <span>You updated your biodata - 2 hours ago</span>
          </li>
          <li className="flex items-center">
            <div className="bg-blue-100 rounded-full p-2 mr-3">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <span>You sent a contact request - 1 day ago</span>
          </li>
          <li className="flex items-center">
            <div className="bg-green-100 rounded-full p-2 mr-3">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <span>You added a biodata to favorites - 2 days ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Edit Biodata Component
const EditBiodata = ({ biodata }) => {
  const divisions = ['Dhaka', 'Chattagram', 'Rangpur', 'Barisal', 'Khulna', 'Maymansign', 'Sylhet'];
  
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Edit Biodata</h2>
      
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Biodata Type</label>
          <select className="w-full px-4 py-2 border rounded-md focus:ring-pink-500 focus:border-pink-500">
            <option value="Male" selected={biodata.type === 'Male'}>Male</option>
            <option value="Female" selected={biodata.type === 'Female'}>Female</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input 
            type="text" 
            defaultValue={biodata.name}
            className="w-full px-4 py-2 border rounded-md focus:ring-pink-500 focus:border-pink-500" 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Profile Image</label>
          <input 
            type="file" 
            className="w-full px-4 py-2 border rounded-md focus:ring-pink-500 focus:border-pink-500" 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
          <input 
            type="date" 
            defaultValue={biodata.dob}
            className="w-full px-4 py-2 border rounded-md focus:ring-pink-500 focus:border-pink-500" 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Height</label>
          <select className="w-full px-4 py-2 border rounded-md focus:ring-pink-500 focus:border-pink-500">
            <option value="5'0">5'0</option>
            <option value="5'1">5'1</option>
            <option value="5'2">5'2</option>
            <option value="5'3">5'3</option>
            <option value="5'4">5'4</option>
            <option value="5'5">5'5</option>
            <option value="5'6">5'6</option>
            <option value="5'7">5'7</option>
            <option value="5'8">5'8</option>
            <option value="5'9" selected={biodata.height === "5'9"}>5'9</option>
            <option value="5'10">5'10</option>
            <option value="5'11">5'11</option>
            <option value="6'0">6'0</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Weight</label>
          <select className="w-full px-4 py-2 border rounded-md focus:ring-pink-500 focus:border-pink-500">
            <option value="50kg">50kg</option>
            <option value="55kg">55kg</option>
            <option value="60kg">60kg</option>
            <option value="65kg">65kg</option>
            <option value="70kg">70kg</option>
            <option value="75kg" selected={biodata.weight === '75kg'}>75kg</option>
            <option value="80kg">80kg</option>
            <option value="85kg">85kg</option>
            <option value="90kg">90kg</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
          <input 
            type="number" 
            defaultValue={biodata.age}
            className="w-full px-4 py-2 border rounded-md focus:ring-pink-500 focus:border-pink-500" 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Occupation</label>
          <select className="w-full px-4 py-2 border rounded-md focus:ring-pink-500 focus:border-pink-500">
            <option value="Software Engineer" selected={biodata.occupation === 'Software Engineer'}>Software Engineer</option>
            <option value="Doctor">Doctor</option>
            <option value="Teacher">Teacher</option>
            <option value="Business">Business</option>
            <option value="Engineer">Engineer</option>
            <option value="Accountant">Accountant</option>
            <option value="Government Job">Government Job</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Race</label>
          <select className="w-full px-4 py-2 border rounded-md focus:ring-pink-500 focus:border-pink-500">
            <option value="Asian" selected={biodata.race === 'Asian'}>Asian</option>
            <option value="African">African</option>
            <option value="European">European</option>
            <option value="Middle Eastern">Middle Eastern</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Father's Name</label>
          <input 
            type="text" 
            defaultValue={biodata.fathersName}
            className="w-full px-4 py-2 border rounded-md focus:ring-pink-500 focus:border-pink-500" 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mother's Name</label>
          <input 
            type="text" 
            defaultValue={biodata.mothersName}
            className="w-full px-4 py-2 border rounded-md focus:ring-pink-500 focus:border-pink-500" 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Permanent Division</label>
          <select className="w-full px-4 py-2 border rounded-md focus:ring-pink-500 focus:border-pink-500">
            {divisions.map(division => (
              <option 
                key={division} 
                value={division}
                selected={biodata.permanentDivision === division}
              >
                {division}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Present Division</label>
          <select className="w-full px-4 py-2 border rounded-md focus:ring-pink-500 focus:border-pink-500">
            {divisions.map(division => (
              <option 
                key={division} 
                value={division}
                selected={biodata.presentDivision === division}
              >
                {division}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Expected Partner Age</label>
          <input 
            type="text" 
            defaultValue={biodata.expectedPartnerAge}
            className="w-full px-4 py-2 border rounded-md focus:ring-pink-500 focus:border-pink-500" 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Expected Partner Height</label>
          <select className="w-full px-4 py-2 border rounded-md focus:ring-pink-500 focus:border-pink-500">
            <option value="5'0 - 5'4">5'0 - 5'4</option>
            <option value="5'2 - 5'6" selected={biodata.expectedPartnerHeight === "5'2 - 5'6"}>5'2 - 5'6</option>
            <option value="5'4 - 5'8">5'4 - 5'8</option>
            <option value="5'6 - 5'10">5'6 - 5'10</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Expected Partner Weight</label>
          <select className="w-full px-4 py-2 border rounded-md focus:ring-pink-500 focus:border-pink-500">
            <option value="45-55kg">45-55kg</option>
            <option value="50-65kg" selected={biodata.expectedPartnerWeight === '50-65kg'}>50-65kg</option>
            <option value="60-75kg">60-75kg</option>
            <option value="70-85kg">70-85kg</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
          <input 
            type="email" 
            defaultValue={biodata.contactEmail}
            readOnly
            className="w-full px-4 py-2 border rounded-md bg-gray-100" 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
          <input 
            type="tel" 
            defaultValue={biodata.mobileNumber}
            className="w-full px-4 py-2 border rounded-md focus:ring-pink-500 focus:border-pink-500" 
          />
        </div>
        
        <div className="md:col-span-2">
          <button className="px-6 py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 font-medium">
            Save And Publish Now
          </button>
        </div>
      </form>
    </div>
  );
};

// View Biodata Component
const ViewBiodata = ({ biodata }) => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">View Biodata</h2>
      
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="md:w-1/3">
          <img 
            src={biodata.profileImage} 
            alt="Profile" 
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        
        <div className="md:w-2/3">
          <div className="bg-pink-50 p-4 rounded-lg mb-4">
            <h3 className="text-lg font-medium text-pink-700">Biodata ID: {biodata.biodataId}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium">{biodata.name}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Biodata Type</p>
              <p className="font-medium">{biodata.type}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Date of Birth</p>
              <p className="font-medium">{biodata.dob}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Age</p>
              <p className="font-medium">{biodata.age}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Height</p>
              <p className="font-medium">{biodata.height}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Weight</p>
              <p className="font-medium">{biodata.weight}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Occupation</p>
              <p className="font-medium">{biodata.occupation}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Race</p>
              <p className="font-medium">{biodata.race}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Father&apos;s Name</p>
              <p className="font-medium">{biodata.fathersName}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Mother&apos;s Name</p>
              <p className="font-medium">{biodata.mothersName}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Permanent Division</p>
              <p className="font-medium">{biodata.permanentDivision}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Present Division</p>
              <p className="font-medium">{biodata.presentDivision}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Expected Partner Age</p>
              <p className="font-medium">{biodata.expectedPartnerAge}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Expected Partner Height</p>
              <p className="font-medium">{biodata.expectedPartnerHeight}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Expected Partner Weight</p>
              <p className="font-medium">{biodata.expectedPartnerWeight}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Contact Email</p>
              <p className="font-medium">{biodata.contactEmail}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Mobile Number</p>
              <p className="font-medium">{biodata.mobileNumber}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-8">
        <button 
          onClick={() => setShowModal(true)}
          className="px-6 py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 font-medium"
        >
          Make Biodata Premium
        </button>
      </div>
      
      {/* Premium Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Confirm Premium Request</h3>
            <p className="mb-6">Are you sure you want to make your biodata premium? This will send a request to the admin for approval.</p>
            
            <div className="flex justify-end space-x-4">
              <button 
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  setShowModal(false);
                  // Here you would typically make an API call
                }}
                className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700"
              >
                Yes, Make Premium
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Contact Requests Component
const ContactRequests = ({ requests }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">My Contact Requests</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Biodata ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile No</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {requests.map(request => (
              <tr key={request.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{request.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{request.biodataId}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${request.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {request.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {request.mobile || '-'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {request.email || '-'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Favorites Component
const Favorites = ({ favorites }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">My Favorites Biodata</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Biodata ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Permanent Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Occupation</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {favorites.map(favorite => (
              <tr key={favorite.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{favorite.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{favorite.biodataId}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {favorite.permanentAddress}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {favorite.occupation}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Got Married Form Component
const GotMarriedForm = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Got Married</h2>
      
      <form className="max-w-2xl mx-auto space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Self Biodata Number</label>
          <input 
            type="text" 
            className="w-full px-4 py-2 border rounded-md focus:ring-pink-500 focus:border-pink-500" 
            placeholder="Enter your biodata ID"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Partner Biodata Number</label>
          <input 
            type="text" 
            className="w-full px-4 py-2 border rounded-md focus:ring-pink-500 focus:border-pink-500" 
            placeholder="Enter partner's biodata ID"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Couple Image Link</label>
          <input 
            type="text" 
            className="w-full px-4 py-2 border rounded-md focus:ring-pink-500 focus:border-pink-500" 
            placeholder="Paste image URL or upload image"
          />
          <p className="mt-1 text-sm text-gray-500">Or</p>
          <input 
            type="file" 
            className="w-full px-4 py-2 border rounded-md focus:ring-pink-500 focus:border-pink-500 mt-1" 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Success Story Review</label>
          <textarea 
            rows="5"
            className="w-full px-4 py-2 border rounded-md focus:ring-pink-500 focus:border-pink-500" 
            placeholder="Share your feelings and experience using this website"
          ></textarea>
        </div>
        
        <div>
          <button className="px-6 py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 font-medium">
            Submit Success Story
          </button>
        </div>
      </form>
    </div>
  );
};

// Admin Dashboard Component
const AdminDashboard = ({ stats }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Admin Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-blue-700">Total Biodata</h3>
          <p className="text-3xl font-bold mt-2">{stats.totalBiodata}</p>
        </div>
        
        <div className="bg-indigo-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-indigo-700">Male Biodata</h3>
          <p className="text-3xl font-bold mt-2">{stats.maleBiodata}</p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-purple-700">Female Biodata</h3>
          <p className="text-3xl font-bold mt-2">{stats.femaleBiodata}</p>
        </div>
        
        <div className="bg-pink-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-pink-700">Premium Biodata</h3>
          <p className="text-3xl font-bold mt-2">{stats.premiumBiodata}</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-green-700">Total Revenue</h3>
          <p className="text-3xl font-bold mt-2">${stats.totalRevenue}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-4">Recent Activities</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <span>Approved premium request for biodata #23456 - 2 hours ago</span>
            </li>
            <li className="flex items-center">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <span>Approved contact request for biodata #12345 - 1 day ago</span>
            </li>
            <li className="flex items-center">
              <div className="bg-purple-100 rounded-full p-2 mr-3">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
              <span>New user registered - 2 days ago</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-4">Pending Approvals</h3>
          <ul className="space-y-3">
            <li className="flex justify-between items-center">
              <span>Premium requests</span>
              <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded">5 pending</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Contact requests</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">8 pending</span>
            </li>
            <li className="flex justify-between items-center">
              <span>New registrations</span>
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">3 pending</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Manage Users Component
const ManageUsers = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Manage Users</h2>
      
      <div className="mb-6">
        <input 
          type="text" 
          placeholder="Search users by name..." 
          className="w-full md:w-1/2 px-4 py-2 border rounded-md focus:ring-pink-500 focus:border-pink-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Make Admin</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Make Premium</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredUsers.map(user => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className={`px-3 py-1 rounded-md text-sm font-medium ${user.isAdmin ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                    {user.isAdmin ? 'Admin' : 'Make Admin'}
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className={`px-3 py-1 rounded-md text-sm font-medium ${user.isPremium ? 'bg-pink-100 text-pink-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                    {user.isPremium ? 'Premium' : 'Make Premium'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Approved Premium Component
const ApprovedPremium = ({ requests }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Premium Approval Requests</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Biodata ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {requests.map(request => (
              <tr key={request.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{request.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{request.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{request.biodataId}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="px-3 py-1 bg-pink-600 text-white rounded-md hover:bg-pink-700 text-sm font-medium">
                    Make Premium
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Approved Contact Component
const ApprovedContact = ({ requests }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Contact Approval Requests</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Biodata ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {requests.map(request => (
              <tr key={request.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{request.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{request.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{request.biodataId}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="px-3 py-1 bg-pink-600 text-white rounded-md hover:bg-pink-700 text-sm font-medium">
                    Approve Contact
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Success Stories Component
const SuccessStories = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Success Stories</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Male Biodata ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Female Biodata ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">12345</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">23456</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="px-3 py-1 bg-pink-600 text-white rounded-md hover:bg-pink-700 text-sm font-medium">
                  View Story
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">34567</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">45678</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="px-3 py-1 bg-pink-600 text-white rounded-md hover:bg-pink-700 text-sm font-medium">
                  View Story
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MatrimonyDashboard;