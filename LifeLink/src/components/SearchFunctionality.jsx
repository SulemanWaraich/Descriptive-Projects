import React, { useState } from "react";

function SearchFunctionality() {
  const [ambulance, setAmbulance] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const ambulancesData = [
    {
      id: 1,
      name:'Basic Ambulance',
      city: 'Karachi',
      location: 'Gulshan-e-Iqbal',
      service: 'Edhi',
      contactNumber: '021-111-123456',
      availability: true,
      ambulanceType: 'Basic Life Support',
      responseTime: '10 minutes',
      price: 600,
    },
    {
      id: 2,
      name:'Cardiac Ambulance',
      city: 'Karachi',
      location: 'Clifton',
      service: 'Chhipa',
      contactNumber: '021-111-246742',
      availability: false,
      ambulanceType: 'Advanced Life Support',
      responseTime: '12 minutes',
      price: 700,
    },
    {
      id: 3,
      name:'Basic Life Support Ambulance',
      city: 'Hyderabad',
      location: 'Latifabad',
      service: 'Edhi',
      contactNumber: '022-2789674',
      availability: true,
      ambulanceType: 'Basic Life Support',
      responseTime: '15 minutes',
      price: 800,
    },
    {
      id: 4,
      name:'Advance Life Support Ambulance',
      city: 'Hyderabad',
      location: 'Qasimabad',
      service: 'Rescue 1122',
      contactNumber: '022-2789123',
      availability: false,
      ambulanceType: 'Advanced Life Support',
      responseTime: '20 minutes',
      price: 900,
    },
    {
      id: 5,
      name:'Mortuary Ambulance',
      city: 'Lahore',
      location: 'DHA Phase 5',
      service: 'Rescue 1122',
      contactNumber: '042-1122',
      availability: true,
      ambulanceType: 'Advanced Life Support',
      responseTime: '8 minutes',
      price: 1000,

    },
    {
      id: 6,
      name:'Rescue Ambulance',
      city: 'Islamabad',
      location: 'F-10',
      service: 'Al-Khidmat',
      contactNumber: '051-2227765',
      availability: true,
      ambulanceType: 'Basic Life Support',
      responseTime: '6 minutes',
      price: 1200,
    },
    {
      id: 7,
      name:'Basic Ambulance',
      city: 'Peshawar',
      location: 'Hayatabad',
      service: 'Rescue 1122',
      contactNumber: '091-1122',
      availability: false,
      ambulanceType: 'Basic Life Support',
      responseTime: '18 minutes',
      price: 1500,

    },
    {
      id: 8,
      city: 'Peshawar',
      location: 'Hayatabad',
      service: 'Rescue 1122',
      contactNumber: '091-1122',
      availability: false,
      ambulanceType: 'Basic Life Support',
      responseTime: '18 minutes',
      name: "ICU Ambulance",
      price: 100,
      equipment: "ICU Setup",
    },
    {
      id: 9,
      city: 'Islamabad',
      location: 'F-10',
      service: 'Al-Khidmat',
      contactNumber: '051-2227765',
      availability: true,
      ambulanceType: 'Basic Life Support',
      responseTime: '6 minutes',
      name: "General Ambulance",
      price: 50,
      equipment: "Basic",
    },
    {
      id: 10,
      city: 'Islamabad',
      location: 'F-10',
      service: 'Al-Khidmat',
      contactNumber: '051-2227765',
      availability: true,
      ambulanceType: 'Basic Life Support',
      responseTime: '6 minutes',
      name: "Air Ambulance",
      price: 500,
      size: "Extra Large",
      equipment: "Advanced",
    },
  ];
  
  const handleSearch = (e) => {
    if (ambulance === '') {
      alert('Please enter some value');
    } else {
      const result = ambulancesData.filter((item) =>
        (item.name && item.name.toLowerCase().includes(ambulance.toLowerCase())) ||
        (item.city && item.city.toLowerCase().includes(ambulance.toLowerCase())) ||
        (item.service && item.service.toLowerCase().includes(ambulance.toLowerCase()))
      );
      setFilteredResults(result);
      setAmbulance('');
    }
  };
  
  
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-10">Search Below</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-6 bg-gray-100 rounded flex flex-col justify-center items-center space-y-4">
            <p>Get an ambulance with your location or the type of service.</p>
            <input
              type="text"
              placeholder="Search For eAmbulance"
              className="border border-black mt-2 px-4 py-1 rounded-lg flex-shrink"
              value={ambulance}
              onChange={(e) => setAmbulance(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="text-xl font-semibold mb-4 bg-blue-700 px-6 py-2 rounded-lg text-white"
            >
              Search
            </button>
          </div>

          <div>
            {filteredResults.length > 0 ? (
              filteredResults.map((ambulance, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-bold">{ambulance.name}</h3>
                <p>Price: ${ambulance.price}</p>
                <p>Contact: {ambulance.contactNumber}</p>
                <p>Response Time: {ambulance.responseTime}</p>
                <p>Service: {ambulance.service}</p>
                <p>City: {ambulance.city}</p>
                <p>Availability: {ambulance.availability? "Available":"Not Available"}</p>
                <p>AmbulanceType: {ambulance.ambulanceType}</p>
              </div>
              ))
            ) : (
              <p className="text-3xl font-bold uppercase text-center">no results found</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchFunctionality;