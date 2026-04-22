export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">Testimonials</h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="border p-6 rounded-lg">
          <p>"Amazing tool for home design."</p>
          <h4 className="mt-4 font-semibold">Rahul</h4>
        </div>

        <div className="border p-6 rounded-lg">
          <p>"AI interior designs are stunning."</p>
          <h4 className="mt-4 font-semibold">Priya</h4>
        </div>
      </div>
    </section>
  );
}
