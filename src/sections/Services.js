export default function Services() {
  return (
    <section id="services" className="min-h-screen flex flex-col justify-center items-center p-8">
      <h2 className="text-3xl font-bold mb-4">Our Services</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <li className="p-6 shadow rounded-xl bg-white">Service 1</li>
        <li className="p-6 shadow rounded-xl bg-white">Service 2</li>
        <li className="p-6 shadow rounded-xl bg-white">Service 3</li>
      </ul>
    </section>
  );
}
