import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client"; // Use createRoot instead of render
import App from "./App.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
