import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css"; // Global default CSS
import AppRoutes from "./routes"; // Import routes from the routes file
import ScrollToTopButton from "./components/ScrollToTopButton"; // Import Scroll-to-Top button
import Preloader from './components/Preloader'; // Preloader
import { usePreloader } from './hooks/usePreloader'; // Custom hook for preloader
import { useDynamicStyles } from './hooks/useDynamicStyles'; // Custom hook for dynamic styles

function App() {
  // const isLoaded = usePreloader(); // Comment out the preloader
  useDynamicStyles(); // Apply dynamic styles based on language

  return (
    <Router>
      <div className="App">
        {/* {!isLoaded && <Preloader />} */}
        {/* Just render the routes for now */}
        <AppRoutes />
        <ScrollToTopButton /> {/* Always show Scroll-to-Top button */}
      </div>
    </Router>
  );
}



export default App;
