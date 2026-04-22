export default function Hero() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Home Design Made Simple
          </h1>

          <h2 className="text-5xl lg:text-6xl font-bold text-red-600 mt-2">
            Design Your Dream House Online
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Transform your ideas into stunning home designs in seconds. Explore
            interiors, exteriors, and landscapes — all online, all effortless.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            {/* Start Designing */}
            <a href="#generator">
              <button
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold
              hover:bg-red-700 transition duration-300"
              >
                Start Designing Now →
              </button>
            </a>

            <button
              onClick={() =>
                document
                  .getElementById("how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border px-6 py-3 rounded-lg font-semibold text-gray-700
  hover:bg-gray-100 transition duration-300"
            >
              How it Works
            </button>
          </div>

          {/* Features */}
          <div className="flex gap-6 mt-6 text-sm text-gray-600">
            <span className="flex items-center gap-2">✔ 100% Free</span>

            <span className="flex items-center gap-2">
              ✔ No Signup Required
            </span>

            <span className="flex items-center gap-2">✔ Unlimited Designs</span>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <video
            autoPlay
            muted
            loop
            className="rounded-xl shadow-lg"
            src="https://cdn.home-design.ai/home-design/MP4/home-design-index.mp4"
          />
        </div>
      </div>
    </section>
  );
}
