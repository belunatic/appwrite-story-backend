import { useUser } from "../lib/context/user";
import { Link } from "react-router-dom";

const Navbar = () => {
	const user = useUser();

	return (
		<div>
			<nav>
				<div>
					{user.current ? (
						<>
							<span>{user.current.email}</span>
							<Link to="/">Home</Link>
							<Link to="/addStory">Add Story</Link>
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
