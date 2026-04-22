"use client";

import { useState } from "react";
import { Home, Globe } from "lucide-react";

export default function Navbar() {
  const [menu, setMenu] = useState("");

  const item =
    "block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-red-600 transition cursor-pointer";

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold">
          <Home className="text-red-600" size={28} />
          SmartSpace
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-gray-700">
          <a href="#" className="hover:text-red-600">
            Home
          </a>

          <a href="#" className="hover:text-red-600">
            Ideas
          </a>

          {/* Home Design */}
          <div
            className="relative"
            onMouseEnter={() => setMenu("home")}
            onMouseLeave={() => setMenu("")}
          >
            <button className="hover:text-red-600">Home Design ▾</button>

            {menu === "home" && (
              <div className="absolute bg-white shadow-lg rounded-lg mt-2 p-4 w-56 border">
                <ul className="space-y-1 text-sm">
                  <li>
                    <a href="#" className={item}>
                      Interior Design
                    </a>
                  </li>

                  <li>
                    <a href="#" className={item}>
                      Exterior Design
                    </a>
                  </li>

                  <li>
                    <a href="#" className={item}>
                      Garden Design
                    </a>
                  </li>

                  <li>
                    <a href="#" className={item}>
                      Landscape Design
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Interior Design Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setMenu("interior")}
            onMouseLeave={() => setMenu("")}
          >
            <button className="hover:text-red-600">Interior Design ▾</button>

            {menu === "interior" && (
              <div className="absolute left-[-200px] mt-2 bg-white border shadow-lg rounded-xl p-6 grid grid-cols-4 gap-8 w-[900px]">
                {/* Furniture */}
                <div>
                  <h4 className="font-semibold mb-3 text-gray-500">
                    Furniture Design
                  </h4>

                  <ul className="space-y-1 text-sm">
                    <li>
                      <a href="#" className={item}>
                        AI Furniture Generator
                      </a>
                    </li>
                    <li>
                      <a href="#" className={item}>
                        AI Furniture Editor
                      </a>
                    </li>
                    <li>
                      <a href="#" className={item}>
                        AI Furniture Replacement
                      </a>
                    </li>
                    <li>
                      <a href="#" className={item}>
                        AI Furniture Removal
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Elements */}
                <div>
                  <h4 className="font-semibold mb-3 text-gray-500">
                    Elements Design
                  </h4>

                  <ul className="space-y-1 text-sm">
                    <li>
                      <a href="#" className={item}>
                        AI Wall Design
                      </a>
                    </li>
                    <li>
                      <a href="#" className={item}>
                        AI Ceiling Design
                      </a>
                    </li>
                    <li>
                      <a href="#" className={item}>
                        AI Flooring Design
                      </a>
                    </li>
                    <li>
                      <a href="#" className={item}>
                        AI Door Design
                      </a>
                    </li>
                    <li>
                      <a href="#" className={item}>
                        AI Windows Design
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Room Types */}
                <div>
                  <h4 className="font-semibold mb-3 text-gray-500">
                    Room Types
                  </h4>

                  <ul className="space-y-1 text-sm">
                    <li>
                      <a href="#" className={item}>
                        Office Design AI
                      </a>
                    </li>
                    <li>
                      <a href="#" className={item}>
                        Bedroom Design AI
                      </a>
                    </li>
                    <li>
                      <a href="#" className={item}>
                        Living Room Design AI
                      </a>
                    </li>
                    <li>
                      <a href="#" className={item}>
                        Kitchen Design AI
                      </a>
                    </li>
                    <li>
                      <a href="#" className={item}>
                        Bathroom Design AI
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Tools */}
                <div>
                  <h4 className="font-semibold mb-3 text-gray-500">
                    Room Tools
                  </h4>

                  <ul className="space-y-1 text-sm">
                    <li>
                      <a href="#" className={item}>
                        Room Design AI
                      </a>
                    </li>
                    <li>
                      <a href="#" className={item}>
                        Room Planner AI
                      </a>
                    </li>
                    <li>
                      <a href="#" className={item}>
                        Room Decorator AI
                      </a>
                    </li>
                    <li>
                      <a href="#" className={item}>
                        Room Cleaner AI
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* AI Tools */}
          <div
            className="relative"
            onMouseEnter={() => setMenu("tools")}
            onMouseLeave={() => setMenu("")}
          >
            <button className="hover:text-red-600">AI Tools ▾</button>

            {menu === "tools" && (
              <div className="absolute bg-white shadow-lg border rounded-lg mt-2 p-4 w-64">
                <ul className="space-y-1 text-sm">
                  <li>
                    <a href="#" className={item}>
                      3D Home Design
                    </a>
                  </li>
                  <li>
                    <a href="#" className={item}>
                      Sketch to Render
                    </a>
                  </li>
                  <li>
                    <a href="#" className={item}>
                      Virtual Staging AI
                    </a>
                  </li>
                  <li>
                    <a href="#" className={item}>
                      Paint Color Visualizer
                    </a>
                  </li>
                  <li>
                    <a href="#" className={item}>
                      Floor Plan Generator
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Language */}
          <div
            className="relative"
            onMouseEnter={() => setMenu("lang")}
            onMouseLeave={() => setMenu("")}
          >
            <button className="flex items-center gap-1 hover:text-red-600">
              <Globe size={16} /> English ▾
            </button>

            {menu === "lang" && (
              <div className="absolute bg-white shadow-lg border rounded-lg mt-2 p-4 w-56">
                <ul className="space-y-1 text-sm">
                  <li>
                    <a href="#" className={item}>
                      English
                    </a>
                  </li>
                  <li>
                    <a href="#" className={item}>
                      Deutsch
                    </a>
                  </li>
                  <li>
                    <a href="#" className={item}>
                      Español
                    </a>
                  </li>
                  <li>
                    <a href="#" className={item}>
                      Français
                    </a>
                  </li>
                  <li>
                    <a href="#" className={item}>
                      Italiano
                    </a>
                  </li>
                  <li>
                    <a href="#" className={item}>
                      日本語
                    </a>
                  </li>
                  <li>
                    <a href="#" className={item}>
                      한국어
                    </a>
                  </li>
                  <li>
                    <a href="#" className={item}>
                      Nederlands
                    </a>
                  </li>
                  <li>
                    <a href="#" className={item}>
                      Português
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
