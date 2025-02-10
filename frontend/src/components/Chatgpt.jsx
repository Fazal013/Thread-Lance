import React from 'react';

const cards = [
  {
    title: "Transform Your Wardrobe",
    description: "Unlock the potential of your unwanted clothes by connecting with talented designers ready to create bespoke pieces that reflect your true style. Join us today!",
    image: "path/to/image1.jpg",
  },
  {
    title: "Sustainable Fashion Revolution",
    description: "Be a part of a movement that not only declutters your closet but also contributes to a more sustainable fashion landscape. Experience the art of reimagining fashion!",
    image: "path/to/image2.jpg",
  },
  {
    title: "Collaborate with Visionary Designers",
    description: "Work hand-in-hand with skilled designers who are passionate about crafting unique pieces from your pre-loved garments. Start your collaboration journey now!",
    image: "path/to/image3.jpg",
  },
  {
    title: "Redefine Your Fashion Journey",
    description: "Elevate your personalized style by giving your old clothes a second life and letting your individuality shine through. Explore our platform today!",
    image: "path/to/image4.jpg",
  },
];

function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Our Exquisite Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-purple-600 mb-2">{card.title}</h2>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
