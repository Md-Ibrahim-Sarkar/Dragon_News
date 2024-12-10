import React from "react";
import twitter from '../assets/twitter.png'
const FindUsOn = () => {
  return (
    <div className="w-full p-4 mx-auto mt-2 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-lg font-semibold">Find Us On</h2>
      <div className="space-y-4">
        {/* Facebook */}
        <div className="flex items-center p-3 space-x-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook"
            className="w-6 h-6"
          />
          <span className="font-medium text-gray-700">Facebook</span>
        </div>

        {/* Twitter */}
        <div className="flex items-center p-3 space-x-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
          <img
            src={twitter}
            alt="Twitter"
            className="w-6 h-6 rounded-full"
          />
          <span className="font-medium text-gray-700">Twitter</span>
        </div>

        {/* Instagram */}
        <div className="flex items-center p-3 space-x-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            className="w-6 h-6"
          />
          <span className="font-medium text-gray-700">Instagram</span>
        </div>
      </div>
    </div>
  );
};

export default FindUsOn;
