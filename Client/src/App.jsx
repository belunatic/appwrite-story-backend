import Login from "./pages/Login";
import Home from "./pages/Home";
import Story from "./pages/Story";
import { UserProvider } from "./lib/context/user";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStory from "./pages/AddStory";
import EditStory from "./pages/EditStory";
import UserStories from "./pages/UserStories";
import NotFound from "./pages/NotFound";

function App() {
	// const isLoginPage = window.location.pathname === "/login";

	return (
		<div>
			<UserProvider>
				<Router>
					<Navbar />
					<div>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/login" element={<Login />} />
							<Route path="/story/:id" element={<Story />} />
							<Route path="/userStories/:id" element={<UserStories />} />
							<Route path="/addStory" element={<AddStory />} />
							<Route path="/editStory/:id" element={<EditStory />} />
							{/* Catch-all route */}
							<Route path="*" element={<NotFound />} />
						</Routes>
					</div>
				</Router>
			</UserProvider>
		</div>
	);
}

export default App;
