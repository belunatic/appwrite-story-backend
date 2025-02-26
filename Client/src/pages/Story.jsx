import { useEffect } from "react";
import { useUser } from "../lib/context/user";

import { useNavigate } from "react-router-dom";

const Story = () => {
	const user = useUser();
	const navigator = useNavigate();

	//check if user is logged in
	useEffect(() => {
		console.log(user.current);
		if (!user.current) {
			navigator("/login");
		}
	}, [user.current]);

	return <h1>Hello Story</h1>;
};

export default Story;
