// src/components/Services.js
export default function Services() {
  const services = [
    {
      title: "Appliance Repair",
      img: "/images/square_appliance.jpg",
      desc: "Fast and reliable repairs for washers, dryers, refrigerators, ovens, and more to keep your home running smoothly.",
    },
    {
      title: "Remodeling",
      img: "/images/square_remodel.jpg",
      desc: "Transform kitchens, bathrooms, and basements with professional updates that increase comfort and value.",
    },
    {
      title: "Painting",
      img: "/images/square_paint.jpg",
      desc: "Interior and exterior painting with clean lines, durable finishes, and attention to detail that brightens any space.",
    },
    {
      title: "Plumbing",
      img: "/images/plumbing_square.jpg",
      desc: "From fixing leaks and clogs to installing new fixtures, we handle plumbing jobs big and small with expertise.",
    },
    {
      title: "Carpentry",
      img: "/images/carpentry_square.jpg",
      desc: "Custom woodworking, trim installation, shelving, and repairs that add beauty and functionality to your home.",
    },
    {
      title: "Lawn Care",
      img: "/images/lawncare_square.jpg",
      desc: "Regular mowing, trimming, and seasonal yard maintenance to keep your property looking its best year-round.",
    },
  ];

  return (
    <section id="services" className="bg-white pt-0 pb-16">
      {/* Full-width Banner */}
      <div
        className="w-full h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/wood_floor_banner_resized.jpg')" }}
      >
        <h2 className="text-5xl font-extrabold text-white drop-shadow-lg">
          Our Services
        </h2>
      </div>

      {/* Content Container */}
      <div className="flex flex-col items-center px-8">
        {/* Announcement */}
        <p className="text-center font-semibold text-xl max-w-3xl mx-auto mt-12 mb-12 leading-relaxed">
          These are just a few of the services we provide.  
          If you don’t see what you’re looking for, feel free to ask —  
          we handle many other home repair and improvement projects.
        </p>


        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl w-full mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Title & Description */}
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.desc}</p>

              {/* Fixed-size Image Wrapper */}
              <div
                className="w-full overflow-hidden rounded-xl bg-gray-200"
                style={{ aspectRatio: "1 / 1" }} // Square ratio
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
