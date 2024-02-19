import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import ErrorBoundary from "./ErrorBoundary";
import Header from "home/Header";
import Footer from "home/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.scss";
import { PDPContent } from "./PDPContent";

const App = () => (
  <Router>
    <div className="max-w-6xl mx-auto text-3xl">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <div className="p-5">
        <h1 className="text-5xl font-bold">Welcome to Cats World PDP Page</h1>
      </div>
      <Routes>
        <Route path="/product/:id" element={<PDPContent />} />
      </Routes>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  </Router>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
