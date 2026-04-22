export default function Tools() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Our Tools</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="border p-6 rounded-lg">
          <h3 className="font-semibold text-xl mb-2">AI Design</h3>
          <p>Create interiors using AI in seconds.</p>
        </div>

        <div className="border p-6 rounded-lg">
          <h3 className="font-semibold text-xl mb-2">Style Generator</h3>
          <p>Choose modern, luxury, minimalist styles.</p>
        </div>

        <div className="border p-6 rounded-lg">
          <h3 className="font-semibold text-xl mb-2">Room Ideas</h3>
          <p>Get inspiration for your dream home.</p>
        </div>
      </div>
    </section>
  );
}
