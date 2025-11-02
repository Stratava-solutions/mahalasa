"use client"
import React, { useState } from 'react';
import { imageUrl } from "@/utls/imageURL";


export default function TempleDeities() {

  const deities = [
    { name: "Shri Vitthobha Rakumai", image: imageUrl("/harkandige/god1.jpg") },
    { name: "Lord Shri Gurudatta", image: imageUrl("/harkandige/god2.jpg") },
    { name: "Lord Ganesha", image: imageUrl("/harkandige/god3.jpg")},
    { name: "Lord Shiva", image: imageUrl("/harkandige/god4.jpg") },
    { name: "Lord Shiva with Pink Flowers", image: imageUrl("/harkandige/god5.jpg") },
    { name: "Lord Nagadevata", image: imageUrl("/harkandige/god6.jpg") },
    // { name: "Navagraha", image: "/api/placeholder/200/250" },
    // { name: "Temple Statues", image: "/api/placeholder/200/250" },
    // { name: "Lord Ganesha Stone", image: "/api/placeholder/200/250" },
  ];

  return (
    <div className=" min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
          Deities at Shri Mahalasa Narayani Devi Kshetra
        </h1>

        {/* Introduction Text */}
        <p className="text-lg md:text-xl text-green-700 font-semibold mb-8">
          Apart from Shri Mahalasa Narayani, the following deities honour the Devi Kshetra:
        </p>

        {/* Deities List */}
        <ul className="space-y-3 mb-8">
          <li className="flex items-start">
            <span className="text-green-700 text-2xl mr-3">•</span>
            <span className="text-xl text-green-700 font-semibold">Lord Gurudatta</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-700 text-2xl mr-3">•</span>
            <span className="text-xl text-green-700 font-semibold">Lord Ganesha</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-700 text-2xl mr-3">•</span>
            <span className="text-xl text-green-700 font-semibold">Lord Shiva</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-700 text-2xl mr-3">•</span>
            <span className="text-xl text-green-700 font-semibold">Lord Hanuman</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-700 text-2xl mr-3">•</span>
            <span className="text-xl text-green-700 font-semibold">The Navagrahas</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-700 text-2xl mr-3">•</span>
            <span className="text-xl text-green-700 font-semibold">Lord Nagadevata</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-700 text-2xl mr-3">•</span>
            <span className="text-xl text-green-700 font-semibold">Lord Vithoba Rakumai</span>
          </li>
        </ul>


          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {deities.map((deity, index) => (
              <div
                key={index}
                className="bg-white border-4 border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/5] relative">
                  <img
                    src={deity.image}
                    alt={deity.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                  <div className="p-2 text-center">
                    <p className="text-sm font-semibold text-blue-600">
                      {deity.name}
                    </p>
                  </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}