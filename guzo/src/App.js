import NavBar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import CountryDetails from "./pages/country-details/CountryDetails";
import AuthPage from "./pages/auth/signup/AuthPage";

function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />
				<div className="content">
					<Routes>
						<Route exact path="/" Component={Home} />
						<Route
							exact
							path="/country/:countryName"
							element={<CountryDetails />}
						/>
						<Route exact path="/signup" element={<AuthPage />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
