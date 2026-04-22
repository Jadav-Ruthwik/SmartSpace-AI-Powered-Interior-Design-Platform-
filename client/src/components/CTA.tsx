import Link from "next/link";

export default function CTA() {
  return (
    <section
      className="relative py-28 text-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1618220179428-22790b461013')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Red overlay */}
      <div className="absolute inset-0 bg-red-600/90"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-6">
          Start Your Home Design Journey
        </h2>

        <p className="text-lg mb-10 text-gray-100">
          Join thousands creating beautiful interiors and exteriors online. No
          experience needed — anyone can design their dream home.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          {/* Start Designing */}
          <a href="#generator">
            <button
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold shadow-md
              hover:bg-gray-100 hover:scale-105 transition duration-300"
            >
              ✨ Start Designing Free
            </button>
          </a>

          {/* Contact Expert (MAIL) */}
          <a
            href="mailto:amilytonto@gmail.com?subject=Home Design Consultation&body=Hi,%0A%0AI would like help with designing my home.%0A%0ARoom Type:%0AStyle Preference:%0A%0AThank you."
            className="border-2 border-white px-8 py-4 rounded-lg font-semibold
            hover:bg-white hover:text-red-600 transition duration-300 inline-block"
          >
            Contact Expert
          </a>
        </div>
      </div>
    </section>
  );
}
