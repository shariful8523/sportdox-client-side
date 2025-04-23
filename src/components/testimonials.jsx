import React from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "Amateur Golfer",
    image: "https://i.pravatar.cc/100?img=1",
    message:
      "Sportdox has everything I need! Their golf gear quality is top-notch and customer service is amazing.",
  },
  {
    name: "Sara Ali",
    role: "Golf Coach",
    image: "https://i.pravatar.cc/100?img=2",
    message:
      "I always recommend Sportdox to my students. Affordable, reliable and fast delivery!",
  },
  {
    name: "Ravi Sharma",
    role: "Professional Player",
    image: "https://i.pravatar.cc/100?img=3",
    message:
      "I love their wide range of equipment and the easy-to-use website. It's a one-stop solution.",
  },
];

const Testimonials = () => {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full mr-4 border-2 border-lime-500"
              />
              <div>
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">"{t.message}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
