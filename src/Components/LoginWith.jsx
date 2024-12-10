import React from "react";
import google from '../assets/google.png'
const LoginWith = () => {
  return (
    <div className="w-full p-6 mx-auto rounded-lg shadow-md bg-gray-50">
      <h2 className="mb-4 text-xl font-semibold text-center">Login With</h2>
      <div className="space-y-4">
        <button
          className="flex items-center justify-center w-full px-4 py-2 space-x-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100"
        >
          < img src={google}
            className="w-5 h-5 text-orange-400 rounded-full"
          />
          <span>Login with Google</span>
        </button>
        <button
          className="flex items-center justify-center w-full px-4 py-2 space-x-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100"
        >
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub Logo"
            className="w-5 h-5"
          />
          <span>Login with Github</span>
        </button>
      </div>
    </div>
  );
};

export default LoginWith;
