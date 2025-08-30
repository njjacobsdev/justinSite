export default function Pictures() {
  return (
    <section id="pictures" className="min-h-screen flex flex-col justify-center items-center p-8 bg-gray-50">
      <h2 className="text-3xl font-bold mb-4">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <img src="/sample1.jpg" alt="Sample 1" className="w-full h-40 object-cover rounded-lg" />
        <img src="/sample2.jpg" alt="Sample 2" className="w-full h-40 object-cover rounded-lg" />
        <img src="/sample3.jpg" alt="Sample 3" className="w-full h-40 object-cover rounded-lg" />
        <img src="/sample4.jpg" alt="Sample 4" className="w-full h-40 object-cover rounded-lg" />
      </div>
    </section>
  );
}
