export default function Features() {
  const features = [
    {
      title: "AI Interior Design",
      description:
        "Generate beautiful room designs instantly using advanced AI models.",
    },
    {
      title: "Upload Your Room",
      description: "Simply upload a photo of your room and let AI redesign it.",
    },
    {
      title: "Multiple Styles",
      description:
        "Choose from modern, minimalist, luxury and many more styles.",
    },
    {
      title: "Instant Results",
      description: "Get redesigned interiors within seconds.",
    },
    {
      title: "Before & After Compare",
      description: "Compare your original room with the AI generated design.",
    },
    {
      title: "Download Designs",
      description: "Save and download the generated designs for inspiration.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">
          Powerful AI Design Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>

              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
