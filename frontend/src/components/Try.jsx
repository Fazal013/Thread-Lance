import React from 'react';

const GalleryCard = ({ image, title, description }) => (
  <div className="flex flex-col rounded-lg overflow-hidden shadow-lg bg-white">
    <div className="h-64 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-purple-600 font-medium text-lg mb-2">{title}</h3>
      <p className="text-gray-600 flex-1">{description}</p>
    </div>
  </div>
);

const ExquisiteGallery = () => {
  const galleryItems = [
    {
      image: "https://img.freepik.com/free-photo/young-handsome-man-choosing-hat-shop_1303-19835.jpg?t=st=1736873047~exp=1736876647~hmac=a1e9de450f28522a9f9c478e20d25420ac00d505e0d5c14c8f240639b7ea7ad7&w=360",
      title: "Transform Your Wardrobe",
      description: "Unlock the potential of your unwanted clothes by connecting with talented designers ready to create bespoke pieces that reflect your true style. Join us today!"
    },
    {
      image: "/path/to/sustainable-fashion.jpg",
      title: "Sustainable Fashion Revolution",
      description: "Be a part of a movement that not only declutters your closet but also contributes to a more sustainable fashion landscape. Experience the art of reimagining fashion!"
    },
    {
      image: "/path/to/collaborate-designers.jpg",
      title: "Collaborate with Visionary Designers",
      description: "Work hand-in-hand with skilled designers who are passionate about crafting unique pieces from your pre-loved garments. Start your collaboration journey now!"
    },
    {
      image: "/path/to/redefine-fashion.jpg",
      title: "Redefine Your Fashion Journey",
      description: "Elevate your personalized style by giving your old clothes a second life and letting your individuality shine through. Explore our platform today!"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Exquisite Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {galleryItems.map((item, index) => (
          <GalleryCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ExquisiteGallery;