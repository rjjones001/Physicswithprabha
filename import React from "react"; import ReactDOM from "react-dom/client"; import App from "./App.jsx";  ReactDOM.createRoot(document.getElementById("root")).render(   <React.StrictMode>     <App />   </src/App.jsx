import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const teacherImg =
  "https://res.cloudinary.com/dw28oh9ih/image/upload/v1777126490/copy_of_wcdwxxagx5rmy0cwjf282t98sw_rwfa79_c5dd25.png";

export default function App() {
  const [showPopup, setShowPopup] = useState(false);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  useEffect(() => {
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
    <div style={{ fontFamily: "Arial", background: "#ffffff", minHeight: "100vh" }}>
      
      {/* Particles */}
      <Particles
        init={particlesInit}
        options={{
          particles: {
            number: { value: 40 },
            color: { value: "#f97316" },
            move: { enable: true, speed: 0.8 },
            size: { value: 2 }
          }
        }}
      />

      {/* HERO */}
      <div style={{ textAlign: "center", padding: "50px" }}>
        <img
          src={teacherImg}
          alt="teacher"
          style={{ width: "120px", borderRadius: "50%" }}
        />
        <h1>V. Prabhakaran</h1>
        <p>Physics Educator | NEET & JEE Mentor</p>
        <p>7+ Years Experience | 1000+ Students Mentored</p>

        <div style={{ marginTop: "20px" }}>
          <button onClick={openDemo} style={{ marginRight: "10px" }}>
            Book Free Demo
          </button>
          <button onClick={openWhatsApp}>
            Chat on WhatsApp
          </button>
        </div>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div style={{ background: "white", padding: "20px" }}>
            <h2>Free Demo Class</h2>
            <button onClick={openDemo}>Book Now</button>
            <br /><br />
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
}
