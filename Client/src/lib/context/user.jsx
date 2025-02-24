import { ID } from "appwrite";
import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../appwrite.jsx";
import PropTypes from "prop-types";

const UserContext = createContext();

//custom hook to holed all the user data
export function useUser() {
	return useContext(UserContext);
}

export function UserProvider(props) {
	const [user, setUser] = useState(null);
	const [errorInfo, setErrorInfo] = useState("");

	async function login(email, password) {
		try {
			const loggedIn = await account.createEmailPasswordSession(
				email,
				password
			);
			setUser(loggedIn);
			window.location.replace("/");
		} catch (err) {
			setErrorInfo(err.message);
		}
	}

	async function logout() {
		await account.deleteSession("current");
		setUser(null);
	}

	async function register(email, password) {
		try {
			await account.create(ID.unique(), email, password);
			await login(email, password);
		} catch (err) {
			setErrorInfo(err.message);
		}
	}

	async function init() {
		try {
			const loggedIn = await account.get();
			setUser(loggedIn);
		} catch (err) {
			setUser(null);
		}
	}

	useEffect(() => {
		init();
	}, []);

	return (
		<UserContext.Provider
			value={{ current: user, login, logout, register, errorInfo }}>
			{props.children}
		</UserContext.Provider>
	);
}

UserProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
