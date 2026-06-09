import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";

import Dubai from "../assets/Dubai.jpg";
import Maldives from "../assets/Maldives.jpg";
import Paris from "../assets/Paris.jpg";

/* ------------------ SAMPLE DATA (replace with Firebase later) ------------------ */
/* ------------------ PACKAGES DATA ------------------ */

const countries = [
  "Dubai",
  "Maldives",
  "Paris",
  "Bali",
  "Nigeria",
  "United States",
  "Canada",
  "United Kingdom",
  "France",
  "Germany",
  "Italy",
  "Spain",
  "Greece",
  "South Africa",
  "Kenya",
  "Brazil",
  "Mexico",
  "India",
  "China",
  "Japan",
  "Australia",
  "New Zealand",
  "Turkey",
  "Egypt",
];

const packagesData = [
  {
    id: 1,
    title: "Dubai Luxury Escape",
    location: "Dubai",
    duration: "5 Days",
    price: 1500,
    category: "Luxury",
    cardImage: Dubai,
    modalImage: Dubai,
    description:
      "Experience the luxury of Dubai with premium hotels, desert safari, yacht cruise and city tours.",
  },
  {
    id: 2,
    title: "Maldives Honeymoon",
    location: "Maldives",
    duration: "7 Days",
    price: 2200,
    category: "Romantic",
    cardImage: Maldives,
    modalImage: Maldives,
    description:
      "Perfect romantic getaway with overwater villas and crystal-clear beaches.",
  },
  {
    id: 3,
    title: "Paris Adventure",
    location: "Paris",
    duration: "6 Days",
    price: 1800,
    category: "Adventure",
    cardImage: Paris,
    modalImage: Paris,
    description:
      "Explore the city of love, Eiffel Tower, museums and nightlife.",
  },
];


/* ------------------ COMPONENT ------------------ */
export default function Packages() {

  const navigate = useNavigate();

  /* STATES */
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const [selectedCountry, setSelectedCountry] = useState("");

  const dropdownRef = useRef(null);

  /* CLOSE DROPDOWN OUTSIDE CLICK */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* RESET PAGE ONLY WHEN FILTER CHANGES */
  useEffect(() => {
    setPage(1);
  }, [search, selectedCountry]);

  /* ------------------ FILTER (FIXED LOGIC) ------------------ */
  const filtered = packagesData.filter((pkg) => {
    const searchLower = search.toLowerCase().trim();
    const countryLower = selectedCountry.toLowerCase().trim();

    const matchesSearch =
      searchLower === "" ||
      pkg.title.toLowerCase().includes(searchLower) ||
      pkg.category.toLowerCase().includes(searchLower);

    const matchesCountry =
      countryLower === "" ||
      pkg.location.toLowerCase() === countryLower;

    return matchesSearch && matchesCountry;
  });

  /* ------------------ PAGINATION (FIXED STABLE VERSION) ------------------ */
  const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));

  const safePage = Math.min(page, totalPages);

  const start = (safePage - 1) * itemsPerPage;

  const paginated = filtered.slice(start, start + itemsPerPage);

  /* ------------------ FAVORITES ------------------ */
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((f) => f !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="bg-slate-50 min-h-screen">

      <Navbar />

      {/* HERO + SEARCH */}
      <section className="bg-gradient-to-r from-purple-900 via-purple-700 to-orange-500 text-white py-24 text-center px-4 mt-[40px]">

        <h1 className="text-5xl font-bold">Explore Travel Packages</h1>

        {/* SEARCH DROPDOWN */}
        <div ref={dropdownRef} className="mt-8 max-w-2xl mx-auto relative">

          <input
            className="w-full p-4 rounded-full text-black outline-none border-[3px] border-white"
            placeholder="Search destination country..."
            value={search}
            onFocus={() => setShowDropdown(true)}
            onChange={(e) => {
              const value = e.target.value;

              setSearch(value);
              setShowDropdown(true);
              setPage(1);

              /* dropdown filter */
              setFilteredCountries(
                countries.filter((country) =>
                  country.toLowerCase().includes(value.toLowerCase())
                )
              );
            }}
          />

          {/* DROPDOWN */}
          {showDropdown && (
            <div className="absolute w-full bg-white mt-2 rounded-2xl shadow-lg max-h-60 overflow-y-auto z-50">

              {filteredCountries.length > 0 ? (
                filteredCountries.map((country, i) => (
                  <div
                    key={i}
                   onClick={() => {
  const packageExists = packagesData.some(
    (pkg) =>
      pkg.location.toLowerCase() === country.toLowerCase()
  );

  if (packageExists) {
    setSelectedCountry(country);
  } else {
    setSelectedCountry("");
  }

  setSearch(country);
  setShowDropdown(false);
  setPage(1);
  setFilteredCountries(countries);
}}
                    className="p-3 hover:bg-purple-100 cursor-pointer text-black"
                  >
                    🌍 {country}
                  </div>
                ))
              ) : (
                <div className="p-4 text-gray-500">
                  No country found
                </div>
              )}

            </div>
          )}

        </div>
      </section>

      {/* PACKAGES */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <AnimatePresence>
            {paginated.map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden relative"
              >

                <img
                  src={pkg.cardImage}
                  className="h-56 w-full object-cover"
                  alt={pkg.title}
                />

                {/* FAVORITE */}
                <button
                  onClick={() => toggleFavorite(pkg.id)}
                  className="absolute top-4 right-4 text-2xl"
                >
                  {favorites.includes(pkg.id) ? "❤️" : "🤍"}
                </button>

                {/* CONTENT */}
                <div className="p-5">
                  <h2 className="text-xl font-bold">{pkg.title}</h2>
                  <p className="text-gray-500">{pkg.location}</p>
                  <p className="text-sm mt-1">{pkg.duration}</p>

                  <div className="flex justify-between items-center mt-4">
                    <p className="text-purple-700 font-bold text-xl">
                      ${pkg.price}
                    </p>

                    <button
                      onClick={() => setSelectedPackage(pkg)}
                      className="bg-gradient-to-r from-purple-700 to-orange-500 text-white px-4 py-2 rounded-full"
                    >
                      View Details
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>

        </div>

        {/* PAGINATION */}
        <div className="flex justify-center mt-10 gap-3">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 rounded-full ${
                page === i + 1 ? "bg-purple-700 text-white" : "bg-white"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedPackage && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white max-w-lg w-full rounded-3xl overflow-hidden"
            >

              <img
                src={selectedPackage.modalImage}
                className="h-60 w-full object-cover"
                alt={selectedPackage.title}
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold">
                  {selectedPackage.title}
                </h2>

                <p className="mt-2 text-gray-600">
                  {selectedPackage.description}
                </p>

                <p className="mt-3 font-bold text-purple-700 text-xl">
                  ${selectedPackage.price}
                </p>

                <button
                  onClick={() => setSelectedPackage(null)}
                  className="mt-5 w-full bg-orange-500 text-white py-3 rounded-full"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TESTIMONIALS */}
      <section className="bg-white py-20 text-center">
        <h2 className="text-3xl font-bold">What Our Clients Say</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">

          {["Amazing experience!", "Best travel agency!", "Highly recommended!"].map(
            (text, i) => (
              <div key={i} className="bg-purple-50 p-6 rounded-2xl">
                ⭐⭐⭐⭐⭐
                <p className="mt-3">{text}</p>
              </div>
            )
          )}

        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>

        {[
          {
            q: "Are flights included?",
            a: "Some packages include flights, check details.",
          },
          {
            q: "Can I customize my trip?",
            a: "Yes, all packages are customizable.",
          },
          {
            q: "Is payment secure?",
            a: "Yes, all payments are encrypted.",
          },
        ].map((faq, i) => (
          <details
            key={i}
            className="mb-4 p-4 bg-white rounded-xl shadow"
          >
            <summary className="font-bold cursor-pointer">
              {faq.q}
            </summary>
            <p className="mt-2 text-gray-600">{faq.a}</p>
          </details>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-800 to-orange-500 text-white text-center py-20 mb-[80px]">
        <h2 className="text-4xl font-bold">
          Ready to Travel the World?
        </h2>
        <button onClick={() => navigate("/Contact")}
  className="mt-6 bg-white text-purple-700 px-8 py-3 rounded-full font-bold">
  Book Now
 </button>
      </section>
      
       <Footer/>

    </div>
  );
}