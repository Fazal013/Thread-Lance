import React, { useState, useEffect } from 'react';

const Navbar = ({ isScrolled }) => (
  <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-purple-600' : 'text-white'}`}>
          Fashion Reimagined
        </div>
        <div className="flex items-center space-x-4">
          <button className={`px-4 py-2 transition-colors duration-300 ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'}`}>
            Sign In
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-200">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-lg w-full p-6 transform transition-all duration-300">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const galleryItems = [
    {
      title: "Transform Your Wardrobe",
      description: "Unlock the potential of your unwanted clothes by connecting with talented designers ready to create bespoke pieces that reflect your true style. Join us today!",
      image: "https://img.freepik.com/free-photo/playful-shy-woman-hiding-shopping-pack-laughing-timid-cute-woman-smiling-happy-through-hands-black-hat-grey-coat-black-dress-autumn-clothes-warm-winter-style_343629-161.jpg?t=st=1736873092~exp=1736876692~hmac=956873fdceb36ac9aed80612acd1aac6c7939214c5529a2a4353fb45e4288846&w=996",
      stats: { designers: 150, projects: 1200, rating: 4.8 }
    },
    {
      title: "Sustainable Fashion Revolution",
      description: "Be a part of a movement that not only declutters your closet but also contributes to a more sustainable fashion landscape. Experience the art of reimagining fashion!",
      image: "https://www.dressyzone.com/cdn/shop/files/p14769-embroidered-bridal-maxi-dress_580x.jpg?v=1719467167",
      stats: { impact: "2.5 tons CO₂ saved", items: 5000, communities: 45 }
    },
    {
      title: "Collaborate with Visionary Designers",
      description: "Work hand-in-hand with skilled designers who are passionate about crafting unique pieces from your pre-loved garments. Start your collaboration journey now!",
      image: "https://image.made-in-china.com/202f0j00UaIchrpERjkg/Wholesale-Baby-Clothing-Good-Quality-Children-Wear-New-Design-Kids-Clothes-Girl-Princess-Dress.jpg",
      stats: { designers: 200, styles: 15, satisfaction: "98%" }
    },
    {
      title: "Redefine Your Fashion Journey",
      description: "Elevate your personalized style by giving your old clothes a second life and letting your individuality shine through. Explore our platform today!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQF_oWBWrkoOwmudRlp9B75NMPw6EYiP6SvA&s",
      stats: { transformations: 3000, styles: 25, rating: 4.9 }
    }
  ];

  return (
    <div className="min-h-screen ">
     

      

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
              onClick={() => {
                setSelectedItem(item);
                setIsModalOpen(true);
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-600 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-200">
                    Learn More
                  </button>
                  <div className="text-gray-400 group-hover:text-purple-600 transition duration-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search Overlay */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isSearchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`fixed top-0 left-0 right-0 bg-white p-4 shadow-md transform transition-transform duration-300 ${isSearchOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="max-w-3xl mx-auto flex items-center">
            <input
              type="text"
              placeholder="Search for designs, designers, or styles..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button
              onClick={() => setIsSearchOpen(false)}
              className="ml-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Search Button */}
      <button
        onClick={() => setIsSearchOpen(true)}
        className="fixed bottom-4 right-4 p-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition duration-200 z-30"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>

      {/* Details Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedItem && (
          <div>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-purple-600 mb-2">{selectedItem.title}</h2>
            <p className="text-gray-600 mb-4">{selectedItem.description}</p>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(selectedItem.stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-xl font-bold text-blue-600">{value}</div>
                  <div className="text-sm text-gray-500 capitalize">{key}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default HomePage;