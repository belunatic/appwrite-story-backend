import { useEffect, useState } from "react";
import { useUser } from "../lib/context/user";
import { useNavigate } from "react-router-dom";

export function Login() {
	const user = useUser();
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		console.log(user.current);
		if (user.current) {
			navigate("/");
		}
	}, [user.current]);

	return (
		<section className="flex flex-col w-full h-screen items-center justify-center content-center">
			<h1 className="text-2xl mb-4">Login or register</h1>
			<p className="text-red-500">{user.errorInfo}</p>
			<form>
				<input
					type="email"
					placeholder="Email"
					className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-1 border-black"
					value={email}
					onChange={(event) => {
						setEmail(event.target.value);
					}}
				/>
				<input
					type="password"
					placeholder="Password"
					className="block mt-2 min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-1 border-black"
					value={password}
					onChange={(event) => {
						setPassword(event.target.value);
					}}
				/>
				<div className="mt-2">
					<button
						type="button"
						className="rounded-md bg-green-600 px-3 mr-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
						onClick={() => user.login(email, password)}>
						Login
					</button>
					<button
						type="button"
						className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
						onClick={() => user.register(email, password)}>
						{" "}
						Register
					</button>
				</div>
			</form>
		</section>
	);
}

export default Login;
