import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";

import "./index.scss";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="p-5">
      <h1 className="text-5xl font-bold">Welcome to Cats World Home Page</h1>
      <p className="mt-5">
        Cats are the best animals in the world. They are fluffy, cute, and
        independent. They are also very good at hunting mice and other small
        animals.
      </p>
    </div>
    <Footer />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
