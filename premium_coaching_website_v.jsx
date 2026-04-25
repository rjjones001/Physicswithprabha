import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const teacherImg = "https://res.cloudinary.com/dw28oh9ih/image/upload/v1777126490/copy_of_wcdwxxagx5rmy0cwjf282t98sw_rwfa79_c5dd25.png";

export default function CoachingWebsite() {
  const [particlesLoaded, setParticlesLoaded] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  useEffect(() => {
    setParticlesLoaded(true);

    // 🔥 Lead popup after 5 sec
    const timer = setTimeout(() => setShowPopup(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const openDemo = () => {
    window.open(
      "https://forms.zohopublic.in/jonesrjs2004gm1/form/Requestacallback/formperma/vH9x9EKQHUjJCBhFdYTqSDwRYQtKqPl0k11pcOHc7mY",
      "_blank"
    );
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/919585347191?text=Hello%20Sir%2C%20I%20want%20to%20join%20your%20Physics%20class",
      "_blank"
    );
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen overflow-x-hidden relative">

      {/* PARTICLES */}
      {particlesLoaded && (
        <Particles
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            particles: {
              number: { value: 40 },
              color: { value: "#f97316" },
              links: { enable: true, color: "#f97316", distance: 120, opacity: 0.3 },
              move: { enable: true, speed: 0.8 },
              size: { value: { min: 1, max: 2 } },
              opacity: { value: 0.4 }
            }
          }}
          className="absolute inset-0 -z-10"
        />
      )}

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
        <h1 className="font-bold text-lg">V. Prabhakaran</h1>
        <div className="flex gap-3">
          <button onClick={openDemo} className="bg-orange-500 text-white px-4 py-2 rounded-lg">Book Demo</button>
          <button onClick={openWhatsApp} className="bg-green-500 text-white px-4 py-2 rounded-lg">WhatsApp</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.img src={teacherImg} alt="Educator" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="w-[120px] h-[120px] rounded-full border-4 border-orange-500 mb-4" />

        <h1 className="text-4xl font-bold mb-2">V. Prabhakaran</h1>
        <p className="text-orange-500 mb-2">Physics Educator | NEET & JEE Mentor</p>
        <p className="text-gray-600 mb-6">7+ Years Experience | 1000+ Students Mentored</p>

        <div className="flex gap-4">
          <button onClick={openDemo} className="bg-orange-500 text-white px-6 py-3 rounded-xl">Book Free Demo</button>
          <button onClick={openWhatsApp} className="bg-green-500 text-white px-6 py-3 rounded-xl">Chat on WhatsApp</button>
        </div>
      </section>

      {/* RESULTS (HIGH CONVERSION) */}
      <section className="py-16 px-6 bg-orange-50 text-center">
        <h2 className="text-2xl font-bold mb-6">Student Results</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-orange-500">NEET</h3>
            <p>Top Score: 650+</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-orange-500">JEE Main</h3>
            <p>Top Rankers Produced</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-orange-500">Success Rate</h3>
            <p>90% Students Improved</p>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-8">Courses Offered</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="font-bold text-lg mb-2">NEET Physics</h3>
            <p>Complete syllabus + mock tests</p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="font-bold text-lg mb-2">JEE Coaching</h3>
            <p>Advanced problems & rank strategy</p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="font-bold text-lg mb-2">Crash Course</h3>
            <p>Quick revision & scoring tricks</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-8">Student Feedback</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-gray-100 rounded-xl">"Improved my marks drastically!"</div>
          <div className="p-6 bg-gray-100 rounded-xl">"Best Physics mentor!"</div>
          <div className="p-6 bg-gray-100 rounded-xl">"Concept clarity amazing"</div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 text-center bg-orange-50">
        <h2 className="text-2xl font-bold mb-4">Limited Seats Available</h2>
        <p className="text-gray-600 mb-6">Book your free demo now</p>
        <button onClick={openDemo} className="bg-orange-500 text-white px-8 py-3 rounded-xl">Book Free Demo</button>
      </section>

      {/* FLOATING WHATSAPP */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-5 right-5 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg z-50"
      >
        WhatsApp
      </button>

      {/* POPUP LEAD */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl text-center max-w-sm">
            <h2 className="text-xl font-bold mb-3">Get Free Demo Class</h2>
            <p className="mb-4">Limited seats available. Register now!</p>
            <button onClick={openDemo} className="bg-orange-500 text-white px-6 py-2 rounded-lg mb-2">Book Now</button>
            <br />
            <button onClick={() => setShowPopup(false)} className="text-gray-500">Close</button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500">
        © 2026 V. Prabhakaran. All rights reserved.
      </footer>

    </div>
  );
}
