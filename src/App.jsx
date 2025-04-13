// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App














// // import { useState, useEffect } from "react";
// // import {
// //   GoogleMap,
// //   LoadScript,
// //   Marker,
// //   Polyline,
// //   TrafficLayer,
// //   InfoWindow,
// // } from "@react-google-maps/api";
// // import { useNavigate } from "react-router-dom";
// // import "./App.css";

// // const googleMapsApiKey = "AIzaSyBO2W9PtOL2LWXgUAj0MieNLZa0rsVAFWg"; // Your key

// // const mapContainerStyle = {
// //   width: "100vw",
// //   height: "80vh",
// // };

// // function App() {
// //   const [center, setCenter] = useState({ lat: 25.6100, lng: 85.1376 }); // Patna
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [isLoaded, setIsLoaded] = useState(false);
// //   const [isSearching, setIsSearching] = useState(false);
// //   const [selectedAccident, setSelectedAccident] = useState(null);
// //   const [congestionLevel, setCongestionLevel] = useState("Moderate");
// //   const [currentLocationName, setCurrentLocationName] = useState("Dak Bunglow Chauraha");

// //   const [accidents, setAccidents] = useState([
// //     {
// //       lat: 25.6110,
// //       lng: 85.1386,
// //       desc: "Crash detected at 6:00 PM near Dak Bunglow Chauraha",
// //     },
// //   ]);

// //   const navigate = useNavigate();

// //   const route = [
// //     { lat: 25.6100, lng: 85.1376 }, // Start
// //     { lat: 25.6150, lng: 85.1350 }, // End
// //   ];

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setAccidents((prev) => [
// //         ...prev,
// //         {
// //           lat: 25.6110 + Math.random() * 0.002,
// //           lng: 85.1386 + Math.random() * 0.002,
// //           desc: `New crash near ${currentLocationName}`,
// //         },
// //       ]);

// //       const levels = ["Low", "Moderate", "High"];
// //       setCongestionLevel(levels[Math.floor(Math.random() * levels.length)]);
// //     }, 5000);

// //     return () => clearInterval(interval);
// //   }, [currentLocationName]);

// //   const searchLocation = () => {
// //     if (!searchQuery.trim() || !window.google?.maps) {
// //       alert("Please enter a valid location or wait for the map to load.");
// //       return;
// //     }

// //     setIsSearching(true);
// //     const geocoder = new window.google.maps.Geocoder();
// //     geocoder.geocode({ address: searchQuery }, (results, status) => {
// //       setIsSearching(false);
// //       if (status === "OK" && results[0]) {
// //         const location = results[0].geometry.location;
// //         setCenter({ lat: location.lat(), lng: location.lng() });
// //         setCurrentLocationName(searchQuery);
// //       } else {
// //         alert("Location not found! Please try a different search term.");
// //       }
// //     });
// //   };

// //   const handleTrafficPredictionClick = () => {
// //     navigate("/predict-traffic");
// //   };


// //   return (
// //     <div className="app">
// //       <header>
// //         <h1>Traffic Dashboard - {currentLocationName}</h1>
// //       </header>

// //       <div className="search-container">
// //         <input
// //           type="text"
// //           placeholder="Enter a location (e.g., Patna, Bihar)..."
// //           value={searchQuery}
// //           onChange={(e) => setSearchQuery(e.target.value)}
// //           disabled={isSearching}
// //         />
// //         <button onClick={searchLocation} disabled={isSearching}>
// //           {isSearching ? "Searching..." : "Search"}
// //         </button>
// //       </div>

// //       <div className="traffic-prediction-button">
// //         <button onClick={handleTrafficPredictionClick}>
// //           Traffic Prediction Between Two Locations
// //         </button>
// //       </div>

// //       <div className="congestion-status">
// //         <h3>
// //           Traffic Congestion:{" "}
// //           <span className={congestionLevel.toLowerCase()}>
// //             {congestionLevel}
// //           </span>
// //         </h3>
// //       </div>

// //       <main>
// //         <LoadScript
// //           googleMapsApiKey={googleMapsApiKey}
// //           onLoad={() => setIsLoaded(true)}
// //         >
// //           {isLoaded && (
// //             <GoogleMap
// //               mapContainerStyle={mapContainerStyle}
// //               center={center}
// //               zoom={15}
// //             >
// //               <TrafficLayer autoUpdate />
// //               {window.google?.maps &&
// //                 accidents.map((acc, idx) => (
// //                   <Marker
// //                     key={idx}
// //                     position={{ lat: acc.lat, lng: acc.lng }}
// //                     icon={{
// //                       url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
// //                       scaledSize: new window.google.maps.Size(32, 32),
// //                     }}
// //                     onClick={() => setSelectedAccident(acc)}
// //                   />
// //                 ))}
// //               {selectedAccident && window.google?.maps && (
// //                 <InfoWindow
// //                   position={{
// //                     lat: selectedAccident.lat,
// //                     lng: selectedAccident.lng,
// //                   }}
// //                   onCloseClick={() => setSelectedAccident(null)}
// //                 >
// //                   <div>
// //                     <h3>Accident Alert</h3>
// //                     <p>{selectedAccident.desc}</p>
// //                     <p>
// //                       Coordinates: ({selectedAccident.lat.toFixed(4)},{" "}
// //                       {selectedAccident.lng.toFixed(4)})
// //                     </p>
// //                   </div>
// //                 </InfoWindow>
// //               )}
// //               <Polyline
// //                 path={route}
// //                 options={{
// //                   strokeColor: "#FF0000",
// //                   strokeOpacity: 0.8,
// //                   strokeWeight: 3,
// //                 }}
// //               />
// //             </GoogleMap>
// //           )}
// //         </LoadScript>
// //       </main>
// //     </div>
// //   );
// // }

// // export default App;





















// import { useState, useEffect } from "react";




// import {
//   GoogleMap,
//   LoadScript,
//   Marker,
//   Polyline,
//   TrafficLayer,
//   InfoWindow,
// } from "@react-google-maps/api";
// import { useNavigate } from "react-router-dom";
// import "./App.css";

// const googleMapsApiKey = "AIzaSyBO2W9PtOL2LWXgUAj0MieNLZa0rsVAFWg"; // Your API Key

// const mapContainerStyle = {
//   width: "100vw",
//   height: "80vh",
// };

// function App() {
//   const [center, setCenter] = useState({ lat: 25.6100, lng: 85.1376 }); // Patna
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [isSearching, setIsSearching] = useState(false);
//   const [selectedAccident, setSelectedAccident] = useState(null);
//   const [congestionLevel, setCongestionLevel] = useState("Moderate");
//   const [currentLocationName, setCurrentLocationName] = useState("Dak Bunglow Chauraha");

//   const [accidents, setAccidents] = useState([
//     {
//       lat: 25.6110,
//       lng: 85.1386,
//       desc: "Crash detected at 6:00 PM near Dak Bunglow Chauraha",
//     },
//   ]);

//   const navigate = useNavigate();

//   const route = [
//     { lat: 25.6100, lng: 85.1376 }, // Start
//     { lat: 25.6150, lng: 85.1350 }, // End
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAccidents((prev) => [
//         ...prev,
//         {
//           lat: 25.6110 + Math.random() * 0.002,
//           lng: 85.1386 + Math.random() * 0.002,
//           desc: `New crash near ${currentLocationName}`,
//         },
//       ]);

//       const levels = ["Low", "Moderate", "High"];
//       setCongestionLevel(levels[Math.floor(Math.random() * levels.length)]);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [currentLocationName]);

//   const searchLocation = () => {
//     if (!searchQuery.trim() || !window.google?.maps) {
//       alert("Please enter a valid location or wait for the map to load.");
//       return;
//     }

//     setIsSearching(true);
//     const geocoder = new window.google.maps.Geocoder();
//     geocoder.geocode({ address: searchQuery }, (results, status) => {
//       setIsSearching(false);
//       if (status === "OK" && results[0]) {
//         const location = results[0].geometry.location;
//         setCenter({ lat: location.lat(), lng: location.lng() });
//         setCurrentLocationName(searchQuery);
//       } else {
//         alert("Location not found! Please try a different search term.");
//       }
//     });
//   };

//   const handleTrafficPredictionClick = () => {
//     navigate("/predict-traffic");
//   };

//   return (
//     <div className="app">
//       <header>
//         <h1>Traffic Dashboard - {currentLocationName}</h1>
//       </header>

//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Enter a location (e.g., Patna, Bihar)..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           disabled={isSearching}
//         />
//         <button onClick={searchLocation} disabled={isSearching}>
//           {isSearching ? "Searching..." : "Search"}
//         </button>
//       </div>

//       <div className="traffic-prediction-button">
//         <button onClick={handleTrafficPredictionClick}>
//           Real Time Traffic Between Two Locations
//         </button>
//       </div>

//       <div className="congestion-status">
//         <h3>
//           Traffic Congestion:{" "}
//           <span className={congestionLevel.toLowerCase()}>
//             {congestionLevel}
//           </span>
//         </h3>
//       </div>

//       <main>
//         <LoadScript
//           googleMapsApiKey={googleMapsApiKey}
//           onLoad={() => setIsLoaded(true)}
//         >
//           {isLoaded && (
//             <GoogleMap
//               mapContainerStyle={mapContainerStyle}
//               center={center}
//               zoom={15}
//             >
//               <TrafficLayer autoUpdate />

//               {window.google?.maps &&
//                 accidents.map((acc, idx) => (
//                   <Marker
//                     key={idx}
//                     position={{ lat: acc.lat, lng: acc.lng }}
//                     icon={{
//                       url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
//                       scaledSize: new window.google.maps.Size(32, 32),
//                     }}
//                     onClick={() => setSelectedAccident(acc)}
//                   />
//                 ))}

//               {selectedAccident && window.google?.maps && (
//                 <InfoWindow
//                   position={{
//                     lat: selectedAccident.lat,
//                     lng: selectedAccident.lng,
//                   }}
//                   onCloseClick={() => setSelectedAccident(null)}
//                 >
//                   <div>
//                     <h3>Accident Alert</h3>
//                     <p>{selectedAccident.desc}</p>
//                     <p>
//                       Coordinates: ({selectedAccident.lat.toFixed(4)},{" "}
//                       {selectedAccident.lng.toFixed(4)})
//                     </p>
//                   </div>
//                 </InfoWindow>
//               )}

//               <Polyline
//                 path={route}
//                 options={{
//                   strokeColor: "#FF0000",
//                   strokeOpacity: 0.8,
//                   strokeWeight: 3,
//                 }}
//               />
//             </GoogleMap>
//           )}
//         </LoadScript>
//       </main>
//     </div>
//   );
// }

// export default App;



















// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import "./App.css";
// // import TrafficPredictionPage from "./TrafficPredictionPage";

// // function App() {
// //   const navigate = useNavigate();

// //   const handleTrafficPredictionClick = () => {
// //     navigate("/predict-traffic");
// //   };

// //   return (
// //     <div className="app">
// //       <h1>Traffic & Accident Prediction System 🚦</h1>
// //       <button onClick={handleTrafficPredictionClick}>
// //         Traffic Prediction Between Two Locations
// //       </button>
// //     </div>
// //   );
// // }

// // export default App;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, NavLink } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();
  const [isNavHovered, setIsNavHovered] = useState(false);

  const handleRealtimeRedirect = () => {
    navigate('/predict-traffic');
  };

  const handleAccidentRedirect = () => {
    navigate('/accident-detection');
  };

  const toggleNav = () => {
    console.log('Nav symbol clicked - toggling nav bar:', !isNavHovered);
    setIsNavHovered(!isNavHovered);
  };

  // Debug: Log isNavHovered changes to verify animation pause and card resize
  useEffect(() => {
    console.log('isNavHovered changed:', isNavHovered);
  }, [isNavHovered]);

  const cardVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.4)',
      transition: { duration: 0.3 },
    },
  };

  const headingVariants = {
    animate: {
      x: isNavHovered ? 0 : ['-100%', '100%'],
      transition: {
        x: {
          repeat: isNavHovered ? 0 : Infinity,
          repeatType: 'loop',
          duration: 10,
          ease: 'linear',
        },
      },
    },
  };

  return (
    <div className="app">
      <motion.header
        className="app-header"
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <motion.h1 variants={headingVariants} animate="animate">
          Traffic Prediction and Accident Detection
        </motion.h1>
        <div
          className="nav-symbol"
          onMouseEnter={() => {
            console.log('Nav symbol hovered - showing nav bar');
            setIsNavHovered(true);
          }}
          onMouseLeave={() => {
            console.log('Nav symbol left - hiding nav bar');
            setIsNavHovered(false);
          }}
          onClick={toggleNav}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`nav-bar ${isNavHovered ? 'visible' : ''}`}>
          <ul>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/predict-traffic"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Traffic
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/accident-detection"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Accident
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </motion.header>

      <main className="card-container">
        {/* Row 1: Real-Time Traffic */}
        <div className="card-row">
          <motion.div
            className="card card-realtime"
            variants={cardVariants}
            whileHover="hover"
            data-nav-hovered={isNavHovered}
          >
            <div className="card-content">
              <h2 className="card-headline">Real-Time Traffic and Prediction</h2>
              <p className="card-description">
                Monitor live traffic conditions with up-to-date data.
              </p>
              <button
                className="card-button"
                onClick={handleRealtimeRedirect}
                aria-label="Explore real-time traffic prediction"
              >
                Traffic Prediction Web App
              </button>
            </div>
            <div className="card-image-placeholder">
              <img
                src= "traffic.jpg"
                alt="Illustration of real-time traffic conditions"
                onError={(e) => (e.target.src = '/fallback-traffic.jpg')}
              />
            </div>
          </motion.div>
        </div>

        {/* Row 2: Accident Detection */}
        <div className="card-row">
          <motion.div
            className="card card-accident"
            variants={cardVariants}
            whileHover="hover"
            data-nav-hovered={isNavHovered}
          >
            <div className="card-content">
              <h2 className="card-headline">Accident Detection</h2>
              <p className="card-description">
                Identify accidents based on CCTV surveillance footage.
              </p>
              <button
                className="card-button"
                onClick={handleAccidentRedirect}
                aria-label="Explore accident detection"
              >
                Accident Detection Web App
              </button>
            </div>
            <div className="card-image-placeholder">
              <img
                src= "../accident.jpg"
                alt="CCTV footage for accident detection"
                onError={(e) => (e.target.src = '/fallback-accident.jpg')}
              />
            </div>
          </motion.div>
        </div>
      </main>
      <div className="bottom-spacer"></div>
    </div>
  );
}

export default App;
