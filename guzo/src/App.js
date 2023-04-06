import NavBar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import CountryDetails from "./pages/country-details/CountryDetails";
import AuthPage from "./pages/auth/signup/AuthPage";
import ShowComponent from "./components/show-navbar/ShowNavbar";

function App() {
	return (
		<Router>
			<div className="App">
				<ShowComponent>
					<NavBar />
				</ShowComponent>

				<div className="content">
					<Routes>
						<Route exact path="/" Component={Home} />
						<Route
							exact
							path="/country/:countryName"
							element={<CountryDetails />}
						/>
						<Route exact path="/login" element={<AuthPage />} />
					</Routes>
				</div>
				<ShowComponent>
					<Footer />
				</ShowComponent>
			</div>
		</Router>
	);
}

export default App;
