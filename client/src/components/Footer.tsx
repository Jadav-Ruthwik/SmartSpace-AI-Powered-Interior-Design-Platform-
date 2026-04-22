export default function Footer() {
  const linkStyle =
    "text-gray-400 hover:text-white transition duration-200 block";

  return (
    <footer className="bg-[#1f1f1f] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-6 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4 flex items-center gap-2">
            🏠 SmartSpace
          </h2>

          <p className="text-sm text-gray-400 leading-relaxed">
            Professional AI interior design tool that makes it easy for everyone
            to create their ideal home space.
          </p>
        </div>

        {/* Home Design */}
        <div>
          <h3 className="text-white font-semibold mb-4">Home Design</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className={linkStyle}>
                Interior Design AI
              </a>
            </li>
            <li>
              <a href="#" className={linkStyle}>
                Exterior Design AI
              </a>
            </li>
            <li>
              <a href="#" className={linkStyle}>
                Garden Design AI
              </a>
            </li>
            <li>
              <a href="#" className={linkStyle}>
                Landscape Design
              </a>
            </li>
          </ul>
        </div>

        {/* Room Design */}
        <div>
          <h3 className="text-white font-semibold mb-4">Room Design</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className={linkStyle}>
                Room Design AI
              </a>
            </li>
            <li>
              <a href="#" className={linkStyle}>
                Bedroom Design AI
              </a>
            </li>
            <li>
              <a href="#" className={linkStyle}>
                Living Room Design AI
              </a>
            </li>
            <li>
              <a href="#" className={linkStyle}>
                Kitchen Design AI
              </a>
            </li>
            <li>
              <a href="#" className={linkStyle}>
                Bathroom Design AI
              </a>
            </li>
            <li>
              <a href="#" className={linkStyle}>
                Office Design AI
              </a>
            </li>
            <li>
              <a href="#" className={linkStyle}>
                Room Planner AI
              </a>
            </li>
            <li>
              <a href="#" className={linkStyle}>
                Room Decorator AI
              </a>
            </li>
            <li>
              <a href="#" className={linkStyle}>
                Room Cleaner AI
              </a>
            </li>
            <li>
              <a href="#" className={linkStyle}>
                3D Home Design AI
              </a>
            </li>
          </ul>
        </div>

        {/* Furniture */}
        <div>
          <h3 className="text-white font-semibold mb-4">Furniture Design</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className={linkStyle}>
                AI Furniture Removal
              </a>
            </li>
            <li>
              <a href="#" className={linkStyle}>
                AI Furniture Replacement
              </a>
            </li>
            <li>
              <a href="#" className={linkStyle}>
                AI Furniture Generator
              </a>
            </li>
            <li>
              <a href="#" className={linkStyle}>
                AI Furniture Editor
              </a>
            </li>
          </ul>
        </div>

        {/* AI Tools */}
        <div>
          <h3 className="text-white font-semibold mb-4">AI Tools</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className={linkStyle}>
                Sketch to Render
              </a>
            </li>
            <li>
              <a href="#" className={linkStyle}>
                Virtual Staging AI
              </a>
            </li>
            <li>
              <a href="#" className={linkStyle}>
                Paint Color Visualizer
              </a>
            </li>
            <li>
              <a href="#" className={linkStyle}>
                AI Wall Design
              </a>
            </li>
            <li>
              <a href="#" className={linkStyle}>
                AI Ceiling Design
              </a>
            </li>
            <li>
              <a href="#" className={linkStyle}>
                AI Flooring Design
              </a>
            </li>
            <li>
              <a href="#" className={linkStyle}>
                Home Door Design
              </a>
            </li>
            <li>
              <a href="#" className={linkStyle}>
                Home Windows Design
              </a>
            </li>
            <li>
              <a href="#" className={linkStyle}>
                Floor Plan Generator
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className={linkStyle}>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className={linkStyle}>
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className={linkStyle}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © 2026 SmartSpace. All rights reserved.
      </div>
    </footer>
  );
}
