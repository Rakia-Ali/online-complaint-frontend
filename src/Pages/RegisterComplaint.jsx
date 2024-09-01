import React, { useState } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

const RegisterComplaint = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleRegisterComplaint = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/complaint", {
      "Title": title,
      "Description": description,
    }).then(() => {
      toast.success("Data has been saved");
    }).catch((error) => console.log(error));
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-black">Register Complaint</h2>

        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(event) => setTitle(event.target.value)}
          className="border border-gray-400 bg-gray-700 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 transition duration-300"
        />

        <textarea 
          placeholder="Description" 
          value={description} 
          onChange={(event) => setDescription(event.target.value)}
          className="border border-gray-400 bg-gray-700 p-3 mb-6 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 transition duration-300 h-32"
        ></textarea>

        <button 
          onClick={handleRegisterComplaint} 
          className="bg-pink-300 hover:bg-blue-500 text-gray-900 font-bold py-3 px-6 rounded-lg w-full transition duration-300"
        >
          Submit
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default RegisterComplaint;
