import React from 'react';

const About = () => {
  return (
    <div className="mt-10 bg-gray-900 text-gray-200 min-h-screen">
      
      {/* Header Section */}
      <section className="bg-yellow-500 text-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
          <p className="text-lg mb-8">
            Learn more about our mission, vision, and the team behind the Online Complaint System.
          </p>
          <div className="flex justify-center">
            <img src="about_us_image.jpg" alt="About Us" className="rounded-lg shadow-lg w-1/2"/>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-yellow-500 text-center mb-6">Our Mission</h2>
          <p className="text-lg text-gray-300 text-center mb-8">
            Our mission is to provide a simple and effective platform for users to voice their concerns, ensuring that every complaint is heard and addressed with the utmost care and professionalism. We believe in transparency, accountability, and the power of feedback to drive positive change.
          </p>
          <div className="flex justify-center">
            <img src="mission_image.jpg" alt="Mission" className="rounded-lg shadow-lg w-2/3"/>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-yellow-500 mb-20 text-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Our History</h2>
          <p className="text-lg text-gray-900 text-center mb-8">
            Established in 2024, the Online Complaint System was created out of a need for a reliable, user-friendly platform where individuals could report issues and concerns in a structured manner. Over the years, we have grown and evolved, continuously improving our services to meet the needs of our users.
          </p>
          <div className="flex justify-center">
            <img src="history_image.jpg" alt="History" className="rounded-lg shadow-lg w-2/3"/>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-gray-300 py-8 text-center">
        <p>&copy; 2024 Online Complaint System. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default About;
