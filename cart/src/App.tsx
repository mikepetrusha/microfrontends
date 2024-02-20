import React from "react";
import ReactDOM from "react-dom/client";
import Header from "home/Header";
import Footer from "home/Footer";
import CartContent from "./CartContent";
import "remixicon/fonts/remixicon.css";
import "./index.scss";

const App = () => (
  <div className="max-w-6xl mx-auto">
    <Header />
    <div className="my-10">
      <CartContent />
    </div>
    <Footer />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
