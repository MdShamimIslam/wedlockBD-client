import React, { useState, useEffect } from "react";

// Matrimony Dashboard (Single-file JSX, Tailwind)
// - Mock data only
// - Role toggle (User / Admin)
// - Responsive dashboard layout with sidebar + main
// - One component file (default export)

export default function MatrimonyDashboard() {
  // role: 'user' | 'admin'
  const [role, setRole] = useState("user");
  const [userTab, setUserTab] = useState("edit"); // edit | view | contacts | favourites | married
  const [adminTab, setAdminTab] = useState("overview"); // overview | manage | premiums | contacts | stories

  // Mock biodata store (would be server-side in real app)
  const [biodatas, setBiodatas] = useState(() => {
    return [
      {
        id: 1,
        type: "Male",
        name: "Rafi Ahmed",
        image: "https://i.pravatar.cc/120?img=3",
        dob: "1992-06-12",
        height: "5'9\"",
        weight: "72 kg",
        age: 33,
        occupation: "Software Engineer",
        race: "Bengali",
        father: "Mr. Karim",
        mother: "Mrs. Ayesha",
        permanent: "Dhaka",
        present: "Dhaka",
        expectedAge: "25-30",
        expectedHeight: "5'3\" - 5'7\"",
        expectedWeight: "50-65 kg",
        email: "rafi@example.com",
        mobile: "01710000001",
        premium: false,
      },
      {
        id: 2,
        type: "Female",
        name: "Maya Khan",
        image: "https://i.pravatar.cc/120?img=6",
        dob: "1996-03-21",
        height: "5'4\"",
        weight: "58 kg",
        age: 28,
        occupation: "Graphic Designer",
        race: "Bengali",
        father: "Mr. Hasan",
        mother: "Mrs. Laila",
        permanent: "Chattagram",
        present: "Dhaka",
        expectedAge: "30-35",
        expectedHeight: "5'7\" - 6'0\"",
        expectedWeight: "70-85 kg",
        email: "maya@example.com",
        mobile: "01710000002",
        premium: true,
      },
    ];
  });

  // Mock current user (logged-in)
  const [currentUser, setCurrentUser] = useState({
    id: "u1",
    name: "Logged User",
    email: "user@example.com",
    biodataId: 1,
  });

  // Mock contact requests
  const [contactRequests, setContactRequests] = useState([
    { id: 1, name: "Rafi Ahmed", biodataId: 1, status: "Approved", mobile: "01710000001", email: "rafi@example.com" },
    { id: 2, name: "Maya Khan", biodataId: 2, status: "Pending", mobile: "", email: "" },
  ]);

  // Mock favourites
  const [favourites, setFavourites] = useState([
    { id: 1, name: "Maya Khan", biodataId: 2, permanent: "Chattagram", occupation: "Graphic Designer" },
  ]);

  // Success stories
  const [stories, setStories] = useState([
    { id: 1, maleId: 1, femaleId: 2, image: "https://i.pravatar.cc/200?img=8", review: "We met and got married! Very thankful to this site." },
  ]);

  // Edit biodata form state (for current user)
  const blankForm = {
    type: "Male",
    name: "",
    image: "",
    dob: "",
    height: "5'5\"",
    weight: "60 kg",
    age: "",
    occupation: "Student",
    race: "",
    father: "",
    mother: "",
    permanent: "Dhaka",
    present: "Dhaka",
    expectedAge: "",
    expectedHeight: "",
    expectedWeight: "",
    email: currentUser.email,
    mobile: "",
  };

  const [form, setForm] = useState(blankForm);
  const [isPremiumModalOpen, setIsPremiumModalOpen] = useState(false);
  const [selectedBiodataForPremium, setSelectedBiodataForPremium] = useState(null);

  // Utility: generate next biodata id
  function nextBiodataId() {
    if (biodatas.length === 0) return 1;
    const lastId = Math.max(...biodatas.map((b) => b.id));
    return lastId + 1;
  }

  // Save & Publish biodata
  function handleSavePublish(e) {
    e?.preventDefault();
    // If current user already has biodata (find by email), update; else create new
    const existingIndex = biodatas.findIndex((b) => b.email === currentUser.email);
    if (existingIndex >= 0) {
      const updated = [...biodatas];
      updated[existingIndex] = { ...updated[existingIndex], ...form };
      setBiodatas(updated);
      alert("Biodata updated successfully!");
    } else {
      const newId = nextBiodataId();
      const newBiodata = { id: newId, ...form, premium: false };
      setBiodatas((s) => [...s, newBiodata]);
      setCurrentUser((u) => ({ ...u, biodataId: newId }));
      alert("Biodata created successfully! (id: " + newId + ")");
    }
  }

  // When clicking make premium (user view)
  function handleMakePremium(biodata) {
    setSelectedBiodataForPremium(biodata);
    setIsPremiumModalOpen(true);
  }

  function confirmMakePremium() {
    // send to admin for approval (mock: set status pending flag). We'll simulate by setting a pending flag property
    setBiodatas((s) => s.map((b) => (b.id === selectedBiodataForPremium.id ? { ...b, premiumRequested: true } : b)));
    setIsPremiumModalOpen(false);
    alert("Premium request sent to admin for approval.");
  }

  // Admin approves premium
  function adminApprovePremium(biodataId) {
    setBiodatas((s) => s.map((b) => (b.id === biodataId ? { ...b, premium: true, premiumRequested: false } : b)));
    alert("Biodata " + biodataId + " is now premium.");
  }

  // Admin make user admin / premium (mock actions using biodata id)
  function adminMakePremiumForUser(biodataId) {
    adminApprovePremium(biodataId);
  }

  // Approve contact request (admin)
  function adminApproveContactRequest(reqId) {
    setContactRequests((s) => s.map((r) => (r.id === reqId ? { ...r, status: "Approved", mobile: "01711-xxxxxx", email: "contacted@example.com" } : r)));
    alert("Contact request approved.");
  }

  // Delete contact request (user)
  function deleteContactRequest(id) {
    setContactRequests((s) => s.filter((r) => r.id !== id));
  }

  // Delete favourite
  function deleteFavourite(id) {
    setFavourites((s) => s.filter((f) => f.id !== id));
  }

  // Got Married submit
  function handleMarriedSubmit(e) {
    e.preventDefault();
    const maleId = parseInt(e.target.maleId.value || "0");
    const femaleId = parseInt(e.target.femaleId.value || "0");
    const img = e.target.coupleImage.value;
    const review = e.target.review.value;
    if (!maleId || !femaleId) {
      alert("Please provide both biodata numbers.");
      return;
    }
    setStories((s) => [...s, { id: s.length + 1, maleId, femaleId, image: img || "https://i.pravatar.cc/200?img=10", review }]);
    alert("Success story submitted! Thank you.");
    setUserTab("view");
  }

  // Quick stats for admin overview
  const stats = {
    total: biodatas.length,
    male: biodatas.filter((b) => b.type === "Male").length,
    female: biodatas.filter((b) => b.type === "Female").length,
    premium: biodatas.filter((b) => b.premium).length,
    revenue: contactRequests.filter((c) => c.status === "Approved").length * 50, // mock price 50
  };

  // simple pie chart svg (percentage based)
  function Pie({ values = [] }) {
    const total = values.reduce((a, b) => a + b.value, 0);
    let start = 0;
    return (
      <svg viewBox="0 0 32 32" className="w-40 h-40">
        {values.map((v, i) => {
          const portion = (v.value / total) * 100;
          const dash = (portion / 100) * 31.4; // circumference ~ 2*pi*r where r=5 => ~31.4
          const strokeDasharray = `${dash} ${31.4 - dash}`;
          const rotation = (start / total) * 360;
          start += v.value;
          return (
            <circle
              key={i}
              r="5"
              cx="16"
              cy="16"
              fill="transparent"
              strokeWidth="10"
              strokeLinecap="butt"
              stroke={`url(#grad${i})`}
              strokeDasharray={strokeDasharray}
              transform={`rotate(${rotation} 16 16)`}
            />
          );
        })}
        <defs>
          <linearGradient id="grad0" x1="0" x2="1">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="grad1" x1="0" x2="1">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
          <linearGradient id="grad2" x1="0" x2="1">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#84cc16" />
          </linearGradient>
          <linearGradient id="grad3" x1="0" x2="1">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // simple responsive sidebar + content layout
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-extrabold text-purple-600">Matrimony</div>
            <div className="text-sm text-gray-500">Dashboard Demo (mock)</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-sm text-gray-600">Role:</div>
            <select value={role} onChange={(e) => setRole(e.target.value)} className="border rounded px-2 py-1">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded hover:opacity-90"
              onClick={() => alert("Logout clicked (mock)")}
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <aside className="lg:col-span-3 bg-white p-4 rounded shadow">
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <img src={currentUser?.avatar || "https://i.pravatar.cc/40"} alt="user" className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-semibold">{currentUser.name}</div>
                  <div className="text-xs text-gray-500">{currentUser.email}</div>
                </div>
              </div>
            </div>

            {role === "user" ? (
              <nav className="flex flex-col gap-2">
                <button onClick={() => setUserTab("edit")} className={`text-left px-3 py-2 rounded ${userTab==='edit'?'bg-purple-50 ring-1 ring-purple-200':''}`}>
                  Edit Biodata
                </button>
                <button onClick={() => setUserTab("view")} className={`text-left px-3 py-2 rounded ${userTab==='view'?'bg-purple-50 ring-1 ring-purple-200':''}`}>
                  View Biodata
                </button>
                <button onClick={() => setUserTab("contacts")} className={`text-left px-3 py-2 rounded ${userTab==='contacts'?'bg-purple-50 ring-1 ring-purple-200':''}`}>
                  My Contact Requests
                </button>
                <button onClick={() => setUserTab("favourites")} className={`text-left px-3 py-2 rounded ${userTab==='favourites'?'bg-purple-50 ring-1 ring-purple-200':''}`}>
                  Favourites Biodata
                </button>
                <button onClick={() => setUserTab("married")} className={`text-left px-3 py-2 rounded ${userTab==='married'?'bg-purple-50 ring-1 ring-purple-200':''}`}>
                  Got Married (Success Story)
                </button>
                <button onClick={() => alert('Logout clicked (mock)')} className="text-left px-3 py-2 rounded text-red-500">
                  Logout
                </button>
              </nav>
            ) : (
              <nav className="flex flex-col gap-2">
                <button onClick={() => setAdminTab("overview")} className={`text-left px-3 py-2 rounded ${adminTab==='overview'?'bg-purple-50 ring-1 ring-purple-200':''}`}>
                  Admin Dashboard
                </button>
                <button onClick={() => setAdminTab("manage")} className={`text-left px-3 py-2 rounded ${adminTab==='manage'?'bg-purple-50 ring-1 ring-purple-200':''}`}>
                  Manage Users
                </button>
                <button onClick={() => setAdminTab("premiums")} className={`text-left px-3 py-2 rounded ${adminTab==='premiums'?'bg-purple-50 ring-1 ring-purple-200':''}`}>
                  Approved Premium
                </button>
                <button onClick={() => setAdminTab("contacts")} className={`text-left px-3 py-2 rounded ${adminTab==='contacts'?'bg-purple-50 ring-1 ring-purple-200':''}`}>
                  Approved Contact Request
                </button>
                <button onClick={() => setAdminTab("stories")} className={`text-left px-3 py-2 rounded ${adminTab==='stories'?'bg-purple-50 ring-1 ring-purple-200':''}`}>
                  Success Stories
                </button>
                <button onClick={() => alert('Logout clicked (mock)')} className="text-left px-3 py-2 rounded text-red-500">
                  Logout
                </button>
              </nav>
            )}
          </aside>

          <main className="lg:col-span-9">
            {role === "user" ? (
              <div className="space-y-6">
                {userTab === "edit" && (
                  <section className="bg-white p-6 shadow rounded">
                    <h2 className="text-xl font-semibold mb-4">Edit Biodata</h2>
                    <form onSubmit={handleSavePublish} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm">Biodata Type</label>
                        <select required value={form.type} onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))} className="w-full border rounded px-2 py-2">
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm">Name</label>
                        <input value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} className="w-full border rounded px-2 py-2" />
                      </div>

                      <div>
                        <label className="block text-sm">Profile Image URL</label>
                        <input value={form.image} onChange={(e) => setForm((f) => ({ ...f, image: e.target.value }))} className="w-full border rounded px-2 py-2" placeholder="https://..." />
                      </div>

                      <div>
                        <label className="block text-sm">Date of birth</label>
                        <input type="date" value={form.dob} onChange={(e) => setForm((f) => ({ ...f, dob: e.target.value }))} className="w-full border rounded px-2 py-2" />
                      </div>

                      <div>
                        <label className="block text-sm">Height</label>
                        <select value={form.height} onChange={(e) => setForm((f) => ({ ...f, height: e.target.value }))} className="w-full border rounded px-2 py-2">
                          <option>5'0"</option>
                          <option>5'3"</option>
                          <option>5'5"</option>
                          <option>5'7"</option>
                          <option>5'9"</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm">Weight</label>
                        <select value={form.weight} onChange={(e) => setForm((f) => ({ ...f, weight: e.target.value }))} className="w-full border rounded px-2 py-2">
                          <option>50 kg</option>
                          <option>55 kg</option>
                          <option>60 kg</option>
                          <option>65 kg</option>
                          <option>70 kg</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm">Age</label>
                        <input value={form.age} onChange={(e) => setForm((f) => ({ ...f, age: e.target.value }))} className="w-full border rounded px-2 py-2" />
                      </div>

                      <div>
                        <label className="block text-sm">Occupation</label>
                        <select value={form.occupation} onChange={(e) => setForm((f) => ({ ...f, occupation: e.target.value }))} className="w-full border rounded px-2 py-2">
                          <option>Student</option>
                          <option>Software Engineer</option>
                          <option>Teacher</option>
                          <option>Business</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm">Race</label>
                        <select value={form.race} onChange={(e) => setForm((f) => ({ ...f, race: e.target.value }))} className="w-full border rounded px-2 py-2">
                          <option>Bengali</option>
                          <option>Pakistani</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm">Father's name</label>
                        <input value={form.father} onChange={(e) => setForm((f) => ({ ...f, father: e.target.value }))} className="w-full border rounded px-2 py-2" />
                      </div>

                      <div>
                        <label className="block text-sm">Mother's name</label>
                        <input value={form.mother} onChange={(e) => setForm((f) => ({ ...f, mother: e.target.value }))} className="w-full border rounded px-2 py-2" />
                      </div>

                      <div>
                        <label className="block text-sm">Permanent Division</label>
                        <select value={form.permanent} onChange={(e) => setForm((f) => ({ ...f, permanent: e.target.value }))} className="w-full border rounded px-2 py-2">
                          <option>Dhaka</option>
                          <option>Chattagram</option>
                          <option>Rangpur</option>
                          <option>Barisal</option>
                          <option>Khulna</option>
                          <option>Maymansign</option>
                          <option>Sylhet</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm">Present Division</label>
                        <select value={form.present} onChange={(e) => setForm((f) => ({ ...f, present: e.target.value }))} className="w-full border rounded px-2 py-2">
                          <option>Dhaka</option>
                          <option>Chattagram</option>
                          <option>Rangpur</option>
                          <option>Barisal</option>
                          <option>Khulna</option>
                          <option>Maymansign</option>
                          <option>Sylhet</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm">Expected Partner Age</label>
                        <input value={form.expectedAge} onChange={(e) => setForm((f) => ({ ...f, expectedAge: e.target.value }))} className="w-full border rounded px-2 py-2" />
                      </div>

                      <div>
                        <label className="block text-sm">Expected Partner Height</label>
                        <select value={form.expectedHeight} onChange={(e) => setForm((f) => ({ ...f, expectedHeight: e.target.value }))} className="w-full border rounded px-2 py-2">
                          <option>5'0" - 5'4"</option>
                          <option>5'4" - 5'8"</option>
                          <option>5'8" - 6'0"</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm">Expected Partner Weight</label>
                        <select value={form.expectedWeight} onChange={(e) => setForm((f) => ({ ...f, expectedWeight: e.target.value }))} className="w-full border rounded px-2 py-2">
                          <option>45-55 kg</option>
                          <option>55-65 kg</option>
                          <option>65-75 kg</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm">Contact Email (readonly)</label>
                        <input readOnly value={form.email} className="w-full border rounded px-2 py-2 bg-gray-50" />
                      </div>

                      <div>
                        <label className="block text-sm">Mobile Number (required)</label>
                        <input value={form.mobile} required onChange={(e) => setForm((f) => ({ ...f, mobile: e.target.value }))} className="w-full border rounded px-2 py-2" />
                      </div>

                      <div className="md:col-span-2 flex justify-end gap-3 mt-2">
                        <button type="button" onClick={() => { setForm(blankForm); alert('Form reset (mock)'); }} className="px-4 py-2 border rounded">Reset</button>
                        <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded">Save And Publish Now</button>
                      </div>
                    </form>
                  </section>
                )}

                {userTab === "view" && (
                  <section className="bg-white p-6 shadow rounded">
                    <h2 className="text-xl font-semibold mb-4">View Biodata</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {biodatas.filter((b) => b.email === currentUser.email || true).map((b) => (
                        <div key={b.id} className="border rounded p-4">
                          <div className="flex items-center gap-4">
                            <img src={b.image || "https://i.pravatar.cc/80"} alt={b.name} className="w-20 h-20 rounded" />
                            <div>
                              <div className="font-semibold text-lg">{b.name}</div>
                              <div className="text-sm text-gray-500">ID: {b.id} • {b.type} • Age: {b.age}</div>
                              <div className="mt-2">
                                <button onClick={() => handleMakePremium(b)} className="px-3 py-1 bg-yellow-400 rounded mr-2">Make biodata to premium</button>
                                {b.premium ? <span className="px-2 py-1 bg-green-100 text-green-700 rounded">Premium</span> : b.premiumRequested ? <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded">Pending approval</span> : null}
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 text-sm space-y-1">
                            <div><strong>Height:</strong> {b.height}</div>
                            <div><strong>Weight:</strong> {b.weight}</div>
                            <div><strong>Occupation:</strong> {b.occupation}</div>
                            <div><strong>Race:</strong> {b.race}</div>
                            <div><strong>Father:</strong> {b.father}</div>
                            <div><strong>Mother:</strong> {b.mother}</div>
                            <div><strong>Permanent:</strong> {b.permanent}</div>
                            <div><strong>Present:</strong> {b.present}</div>
                            <div><strong>Expected Age:</strong> {b.expectedAge}</div>
                            <div><strong>Mobile:</strong> {b.mobile}</div>
                            <div><strong>Email:</strong> {b.email}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {userTab === "contacts" && (
                  <section className="bg-white p-6 shadow rounded">
                    <h2 className="text-xl font-semibold mb-4">My Contact Requests</h2>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-left divide-y">
                        <thead>
                          <tr>
                            <th className="px-3 py-2">Name</th>
                            <th className="px-3 py-2">Biodata ID</th>
                            <th className="px-3 py-2">Status</th>
                            <th className="px-3 py-2">Mobile</th>
                            <th className="px-3 py-2">Email</th>
                            <th className="px-3 py-2">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {contactRequests.map((r) => (
                            <tr key={r.id}>
                              <td className="px-3 py-2">{r.name}</td>
                              <td className="px-3 py-2">{r.biodataId}</td>
                              <td className="px-3 py-2">{r.status}</td>
                              <td className="px-3 py-2">{r.status === "Approved" ? r.mobile : "—"}</td>
                              <td className="px-3 py-2">{r.status === "Approved" ? r.email : "—"}</td>
                              <td className="px-3 py-2"><button onClick={() => deleteContactRequest(r.id)} className="text-sm text-red-500">Delete</button></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                )}

                {userTab === "favourites" && (
                  <section className="bg-white p-6 shadow rounded">
                    <h2 className="text-xl font-semibold mb-4">My Favourites</h2>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-left divide-y">
                        <thead>
                          <tr>
                            <th className="px-3 py-2">Name</th>
                            <th className="px-3 py-2">Biodata ID</th>
                            <th className="px-3 py-2">Permanent Address</th>
                            <th className="px-3 py-2">Occupation</th>
                            <th className="px-3 py-2">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {favourites.map((f) => (
                            <tr key={f.id}>
                              <td className="px-3 py-2">{f.name}</td>
                              <td className="px-3 py-2">{f.biodataId}</td>
                              <td className="px-3 py-2">{f.permanent}</td>
                              <td className="px-3 py-2">{f.occupation}</td>
                              <td className="px-3 py-2"><button onClick={() => deleteFavourite(f.id)} className="text-sm text-red-500">Delete</button></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                )}

                {userTab === "married" && (
                  <section className="bg-white p-6 shadow rounded">
                    <h2 className="text-xl font-semibold mb-4">Got Married — Share Your Success Story</h2>
                    <form onSubmit={handleMarriedSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm">Self Biodata Number</label>
                        <input name="maleId" className="w-full border rounded px-2 py-2" placeholder="e.g. 1" />
                      </div>
                      <div>
                        <label className="block text-sm">Partner Biodata Number</label>
                        <input name="femaleId" className="w-full border rounded px-2 py-2" placeholder="e.g. 2" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm">Couple Image URL</label>
                        <input name="coupleImage" className="w-full border rounded px-2 py-2" placeholder="https://..." />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm">Success Story Review</label>
                        <textarea name="review" className="w-full border rounded px-2 py-2" rows="4" />
                      </div>
                      <div className="md:col-span-2 flex justify-end">
                        <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded">Submit</button>
                      </div>
                    </form>
                  </section>
                )}
              </div>
            ) : (
              // Admin views
              <div className="space-y-6">
                {adminTab === "overview" && (
                  <section className="bg-white p-6 shadow rounded">
                    <h2 className="text-xl font-semibold mb-4">Admin Dashboard</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                      <div className="p-4 rounded border">
                        <div className="text-sm text-gray-500">Total Biodata</div>
                        <div className="text-2xl font-bold">{stats.total}</div>
                      </div>
                      <div className="p-4 rounded border">
                        <div className="text-sm text-gray-500">Male Biodata</div>
                        <div className="text-2xl font-bold">{stats.male}</div>
                      </div>
                      <div className="p-4 rounded border">
                        <div className="text-sm text-gray-500">Female Biodata</div>
                        <div className="text-2xl font-bold">{stats.female}</div>
                      </div>
                      <div className="p-4 rounded border">
                        <div className="text-sm text-gray-500">Premium Biodata</div>
                        <div className="text-2xl font-bold">{stats.premium}</div>
                        <div className="text-sm text-gray-500 mt-1">Revenue: ${stats.revenue}</div>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <Pie values={[{ value: stats.male }, { value: stats.female }, { value: stats.premium }, { value: Math.max(0, stats.total - stats.male - stats.female) }]} />

                      <div className="flex-1">
                        <h3 className="font-semibold">Recent Biodatas</h3>
                        <ul className="mt-3 space-y-2">
                          {biodatas.slice(-5).reverse().map((b) => (
                            <li key={b.id} className="border rounded p-3 flex items-center justify-between">
                              <div>
                                <div className="font-medium">{b.name} ({b.type})</div>
                                <div className="text-sm text-gray-500">ID: {b.id} • {b.occupation}</div>
                              </div>
                              <div className="text-sm">{b.premium ? <span className="px-2 py-1 bg-green-100 text-green-700 rounded">Premium</span> : b.premiumRequested ? <span className="px-2 py-1 bg-orange-100 rounded">Requested</span> : <span className="px-2 py-1 bg-gray-100 rounded">Normal</span>}</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                )}

                {adminTab === "manage" && (
                  <section className="bg-white p-6 shadow rounded">
                    <h2 className="text-xl font-semibold mb-4">Manage Users</h2>
                    <div className="mb-4">
                      <input placeholder="Search by name (server-side mock)" className="border rounded px-2 py-2 w-full md:w-1/2" onChange={(e) => alert('In real app: perform server-side search for "'+e.target.value+'" (mock)')} />
                    </div>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-left divide-y">
                        <thead>
                          <tr>
                            <th className="px-3 py-2">User name</th>
                            <th className="px-3 py-2">User email</th>
                            <th className="px-3 py-2">Make admin</th>
                            <th className="px-3 py-2">Make premium</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {[{name: 'Logged User', email: 'user@example.com'},{name: 'Rafi Ahmed', email: 'rafi@example.com'}].map((u,i)=> (
                            <tr key={i}>
                              <td className="px-3 py-2">{u.name}</td>
                              <td className="px-3 py-2">{u.email}</td>
                              <td className="px-3 py-2"><button className="text-sm text-blue-600" onClick={()=>alert('Make admin: '+u.email)}>Make Admin</button></td>
                              <td className="px-3 py-2"><button className="text-sm text-green-600" onClick={()=>alert('Make premium request for user: '+u.email)}>Make premium</button></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                )}

                {adminTab === "premiums" && (
                  <section className="bg-white p-6 shadow rounded">
                    <h2 className="text-xl font-semibold mb-4">Approved Premium Requests</h2>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-left divide-y">
                        <thead>
                          <tr>
                            <th className="px-3 py-2">Name</th>
                            <th className="px-3 py-2">Email</th>
                            <th className="px-3 py-2">Biodata Id</th>
                            <th className="px-3 py-2">Make Premium</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {biodatas.filter(b=>b.premiumRequested).map(b=> (
                            <tr key={b.id}>
                              <td className="px-3 py-2">{b.name}</td>
                              <td className="px-3 py-2">{b.email}</td>
                              <td className="px-3 py-2">{b.id}</td>
                              <td className="px-3 py-2"><button className="text-sm text-green-700" onClick={()=>adminApprovePremium(b.id)}>Make Premium</button></td>
                            </tr>
                          ))}
                          {biodatas.filter(b=>b.premiumRequested).length===0 && <tr><td className="px-3 py-2" colSpan={4}>No pending requests</td></tr>}
                        </tbody>
                      </table>
                    </div>
                  </section>
                )}

                {adminTab === "contacts" && (
                  <section className="bg-white p-6 shadow rounded">
                    <h2 className="text-xl font-semibold mb-4">Approved Contact Requests</h2>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-left divide-y">
                        <thead>
                          <tr>
                            <th className="px-3 py-2">Name</th>
                            <th className="px-3 py-2">Email</th>
                            <th className="px-3 py-2">Biodata Id</th>
                            <th className="px-3 py-2">Approve contact request</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {contactRequests?.map(r => (
                            <tr key={r.id}>
                              <td className="px-3 py-2">{r.name}</td>
                              <td className="px-3 py-2">{r.email || '—'}</td>
                              <td className="px-3 py-2">{r.biodataId}</td>
                              <td className="px-3 py-2">{r.status==='Approved' ? <span className="text-green-600">Approved</span> : <button className="text-sm text-blue-600" onClick={()=>adminApproveContactRequest(r.id)}>Approve</button>}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                )}

                {adminTab === "stories" && (
                  <section className="bg-white p-6 shadow rounded">
                    <h2 className="text-xl font-semibold mb-4">Success Stories</h2>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-left divide-y">
                        <thead>
                          <tr>
                            <th className="px-3 py-2">Male Biodata Id</th>
                            <th className="px-3 py-2">Female Biodata Id</th>
                            <th className="px-3 py-2">View Story</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {stories.map(s => (
                            <tr key={s.id}>
                              <td className="px-3 py-2">{s.maleId}</td>
                              <td className="px-3 py-2">{s.femaleId}</td>
                              <td className="px-3 py-2"><button onClick={()=> alert('Story: '+s.review)} className="text-sm text-blue-600">View Story</button></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                )}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Premium confirmation modal */}
      {isPremiumModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow max-w-md w-full">
            <h3 className="font-semibold">Make biodata premium</h3>
            <p className="text-sm text-gray-600 mt-2">Are you sure you want to request premium for <strong>{selectedBiodataForPremium?.name}</strong> (ID: {selectedBiodataForPremium?.id})?</p>
            <div className="mt-4 flex justify-end gap-3">
              <button className="px-3 py-1 border rounded" onClick={()=>setIsPremiumModalOpen(false)}>Cancel</button>
              <button className="px-3 py-1 bg-purple-600 text-white rounded" onClick={confirmMakePremium}>Yes, send to admin</button>
            </div>
          </div>
        </div>
      )}

      <footer className="text-center text-xs text-gray-500 py-4">Demo dashboard — mock data only • Save this file as <code>Dashboard.jsx</code> and import into your React app. Tailwind CSS required.</footer>
    </div>
  );
}
