import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { UserProvider } from "./lib/context/user";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	const isLoginPage = window.location.pathname === "/login";

	return (
		<div>
			<UserProvider>
				<Router>
					<Navbar />
					<div>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/login" element={<Login />} />
						</Routes>
					</div>
				</Router>
			</UserProvider>
		</div>
	);
}

export default App;
