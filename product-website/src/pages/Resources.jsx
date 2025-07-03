import React from 'react';
import './Resources.css'; // Import your CSS file for styling
function ResourcesPage() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black to-gray-900">
        <div className="flex items-center">
          <img src="D:\Study\Projects\website_project\my-react-app\src\assets\logo.png" alt="Product Club Logo" className="h-8 mr-3" />
          <span className="text-sm text-gray-300">Product Club</span>
        </div>
        <div className="space-x-6 text-yellow-400 font-semibold text-sm">
          <a href="#">Home</a>
          <a href="#">Team</a>
          <a href="#">Events</a>
          <a href="#">Projects</a>
          <a href="#">Resources</a>
          <a href="#">Alumni</a>
        </div>
      </nav>

      {/* Main Content */}
      <section className="px-6 md:px-16 py-16 bg-black">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Explore</h1>
        <h2 className="text-yellow-400 text-4xl md:text-5xl font-bold mb-6">Product Management</h2>

        <p className="text-gray-300 text-base md:text-lg mb-10 max-w-3xl">
          Explore handpicked content to kickstart and grow your PM journey. From fundamentals to real-world practice, everything here is curated by the Product Club to help you learn, apply, and thrive—all at your own pace, for free.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="bg-red-700 text-white px-6 py-2 rounded-full text-lg font-semibold">Tech</button>
          <button className="bg-green-700 text-white px-6 py-2 rounded-full text-lg font-semibold">Product Management</button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold">UI/UX</button>
        </div>
      </section>
    </div>
  );
}

export default ResourcesPage;