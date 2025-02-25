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
		<section>
			<h1>Login or register</h1>
			<p>{user.errorInfo}</p>
			<form>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(event) => {
						setEmail(event.target.value);
					}}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(event) => {
						setPassword(event.target.value);
					}}
				/>
				<div>
					<button
						className="button"
						type="button"
						onClick={() => user.login(email, password)}>
						Login
					</button>
					<button
						className="button"
						type="button"
						onClick={() => user.register(email, password)}>
						Register
					</button>
				</div>
			</form>
		</section>
	);
}

export default Login;
