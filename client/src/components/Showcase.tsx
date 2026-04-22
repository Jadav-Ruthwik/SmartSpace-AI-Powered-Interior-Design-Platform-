"use client";

import ReactCompareImage from "react-compare-image";

export default function Showcase() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          AI Room Transformations
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Compare the original room with the AI redesigned interior.
        </p>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <ReactCompareImage
            leftImage="https://home-design.ai/nuxt_img/index/showcase/modern-minimalist-living-room-before.webp"
            rightImage="https://home-design.ai/nuxt_img/index/showcase/modern-minimalist-living-room-after.webp"
          />
        </div>
      </div>
    </section>
  );
}
