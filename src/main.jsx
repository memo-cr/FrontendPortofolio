import React from "react";
import Navbar from "./assets/components/navigation/Navbar";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Background from "./assets/components/background/Background";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <header>
      <Navbar></Navbar>
    </header>
    <App url={"http://127.0.0.1:3000/"} />
    <Background />
  </React.StrictMode>
);
