import React, { useState } from 'react';

function User() {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [complaints, setComplaints] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  const submitComplaint = () => {
    if (title.trim() && details.trim()) {
      const newComplaint = { id: complaints.length + 1, title, details };
      setComplaints([...complaints, newComplaint]);
      setTitle('');
      setDetails('');
      setSuccessMessage('Complaint submitted successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } else {
      setSuccessMessage('Please fill in all fields.');
      setTimeout(() => setSuccessMessage(''), 3000);
    }
  };

  const deleteComplaint = (id) => {
    setComplaints(complaints.filter((complaint) => complaint.id !== id));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 shadow-xl rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-black">User Complaint Form</h2>

        {successMessage && (
          <div
            className={`text-center p-3 mb-4 rounded-lg font-semibold ${
              successMessage === 'Complaint submitted successfully!'
                ? 'bg-green-500 text-white'
                : 'bg-red-500 text-white'
            }`}
          >
            {successMessage}
          </div>
        )}

        <div className="mb-6">
          <label className="block text-gray-300 font-medium mb-2">Complaint Title</label>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-400 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 font-medium mb-2">Complaint Details</label>
          <textarea
            placeholder="Enter details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="w-full p-3 border border-gray-400 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-40"
          />
        </div>

        <button
          onClick={submitComplaint}
          className="w-full bg-pink-300 text-gray-900 py-3 rounded-lg font-semibold hover:bg-blue-500 transition duration-300"
        >
          Submit Complaint
        </button>

      </div>
    </div>
  );
}

export default User;
