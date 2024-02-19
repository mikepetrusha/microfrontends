import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import ErrorBoundary from "./ErrorBoundary";
import Header from "home/Header";
import Footer from "home/Footer";

import "./index.scss";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <ErrorBoundary>
      <Header />
    </ErrorBoundary>
    <div className="p-5">
      <h1 className="text-5xl font-bold">Welcome to Cats World PDP Page</h1>
    </div>
    <Suspense fallback={<div>Loading...</div>}>
      <Footer />
    </Suspense>
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
