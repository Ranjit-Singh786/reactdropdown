import React from "react";
import Routes from "./router/index.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
