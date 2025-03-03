import { useUser } from "../lib/context/user";
import { Link } from "react-router-dom";

const Navbar = () => {
	const user = useUser();

	return (
		<div>
			<nav className="font-semibold flex flex-row text-blue-500 ">
				<div className="flex flex-row w-full justify-between">
					{user.current ? (
						<>
							<div>
								<Link to="/" className="hover:text-green-500 hover:underline">
									Home
								</Link>
								<Link
									to={`/userStories/${user.current.$id}`}
									className="mx-4 hover:text-green-500 hover:underline">
									My Story
								</Link>
								<Link
									to="/addStory"
									className="mx-4 hover:text-green-500 hover:underline">
									Add Story
								</Link>
							</div>
							<div>
								<button
									type="button"
									onClick={() => {
										user.logout();
										user.setLoading(true);
									}}
									className="bg-black p-2 rounded-sm cursor-pointer">
									Logout
								</button>
							</div>
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
