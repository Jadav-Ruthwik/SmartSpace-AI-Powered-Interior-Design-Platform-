export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 text-center">
      {" "}
      <h2 className="text-3xl font-bold mb-10">How It Works</h2>{" "}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {" "}
        <div>
          {" "}
          <h3 className="font-bold text-xl mb-2">1. Upload Image</h3>{" "}
          <p>Upload your room photo.</p>{" "}
        </div>{" "}
        <div>
          {" "}
          <h3 className="font-bold text-xl mb-2">2. Choose Style</h3>{" "}
          <p>Select the interior style you want.</p>{" "}
        </div>{" "}
        <div>
          {" "}
          <h3 className="font-bold text-xl mb-2">3. Generate</h3>{" "}
          <p>AI generates your redesigned room.</p>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
