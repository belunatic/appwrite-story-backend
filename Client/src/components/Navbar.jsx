import { useUser } from "../lib/context/user";
import { Link } from "react-router-dom";

const Navbar = () => {
	const user = useUser();

	return (
		<div>
			<nav className="font-semibold flex flex-row">
				<div>
					{user.current ? (
						<>
							<Link to="/">Home</Link>
							<Link to="/userStories" className="mx-4">
								My Story
							</Link>
							<Link to="/addStory" className="mx-4">
								Add Story
							</Link>
							<button type="button" onClick={() => user.logout()}>
								Logout
							</button>
						</>
					) : (
						<Link to="/login">Login</Link>
					)}
				</div>
			</nav>
		</div>
	);
};
export default Navbar;
