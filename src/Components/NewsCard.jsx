import React from "react";
import profile from '../assets/profile.png'
import news from '../assets//news-photo.png'
import { IoEyeSharp } from "react-icons/io5";
const NewsCard = () => {
  return (
    <>

      <div className="text-[20px] font-semibold mb-2 text-gray-600">Dragon News Home</div>
      <div className="p-4 mx-auto mb-4 bg-white rounded-lg shadow-md ">
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2 space-x-2">
            <img
              src={profile} // Replace with the correct image URL
              alt="Author"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <span className="-mt-2 font-medium text-gray-700">Awlad Hossain</span>
              <p className="text-xs text-gray-400 ">2022-08-21</p>
            </div>
          </div>
        </div>

        <h2 className="mt-4 text-2xl font-semibold">
          Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
        </h2>
        <img
          src={news} // Replace with the correct image URL
          alt="News"
          className="w-full mt-4 rounded-lg"
        />
        <p className="mt-4 text-gray-600">
          Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News,
          Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden
          has announced nearly $3 billion in new U.S. military...
        </p>
        <p className="text-yellow-500">Read More</p>
        <div className="flex items-center justify-between mt-4 text-gray-600">

          <div className="flex items-center space-x-2">
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span>4.9</span>
          </div>
          <div className="flex items-center mt-2 text-gray-600 "> <span className="inline-block me-2"><IoEyeSharp /></span> <span>499</span></div>
        </div>
      </div>
      <div className="p-4 mx-auto mb-4 bg-white rounded-lg shadow-md ">
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2 space-x-2">
            <img
              src={profile} // Replace with the correct image URL
              alt="Author"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <span className="-mt-2 font-medium text-gray-700">Awlad Hossain</span>
              <p className="text-xs text-gray-400 ">2022-08-21</p>
            </div>
          </div>
        </div>

        <h2 className="mt-4 text-2xl font-semibold">
          Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
        </h2>
        <img
          src={news} // Replace with the correct image URL
          alt="News"
          className="w-full mt-4 rounded-lg"
        />
        <p className="mt-4 text-gray-600">
          Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News,
          Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden
          has announced nearly $3 billion in new U.S. military...
        </p>
        <p className="text-yellow-500">Read More</p>
        <div className="flex items-center justify-between mt-4 text-gray-600">

          <div className="flex items-center space-x-2">
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span>4.9</span>
          </div>
          <div className="flex items-center mt-2 text-gray-600 "> <span className="inline-block me-2"><IoEyeSharp /></span> <span>499</span></div>
        </div>
      </div>
      
      
    </>
  );
};

export default NewsCard;
