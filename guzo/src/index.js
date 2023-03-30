import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components/navbar/navbar.css";
import "./components/info-content/info-content.css";
import "./components/prompt-item/prompt-item.css";
import "./components/searchbar/search-bar.css";
import "./pages/home/home.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
reportWebVitals();
