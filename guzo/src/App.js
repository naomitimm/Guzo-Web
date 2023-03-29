import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />
				<div className="content">
					<Routes>
						<Route exact path="/" Component={Home} />
						<Route exact path="/travel" Component={Home} />
						<Route exact path="/favorites" Component={Home} />
						<Route exact path="/review" Component={Home} />
						<Route exact path="/profile" Component={Home} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
