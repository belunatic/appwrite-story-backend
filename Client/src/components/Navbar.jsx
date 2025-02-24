import { useUser } from "../lib/context/user";
import { Link } from "react-router-dom";

const Navbar = () => {
	const user = useUser();

	return (
		<div>
			<nav>
				<Link to="/">Idea tracker</Link>
				<div>
					{user.current ? (
						<>
							<span>{user.current.email}</span>
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
