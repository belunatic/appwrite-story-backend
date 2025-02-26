import { useEffect, useState } from "react";
import { useUser } from "../lib/context/user";

import { useNavigate, useParams } from "react-router-dom";

const Story = () => {
	const user = useUser();
	const navigator = useNavigate();
	const { id } = useParams();
	const [story, setStory] = useState({});
	const [loading, setLoading] = useState(true);

	// //check if user is logged in
	// useEffect(() => {
	// 	console.log(user.current);
	// 	if (!user.current) {
	// 		navigator("/login");
	// 	}
	// }, [user.current]);

	//get the story in accordance to the id
	useEffect(() => {
		getStory();
	}, []);

	//get the story data from backend
	const getStory = async () => {
		try {
			const response = await fetch(`http://localhost:3000/${id}`);
			const data = await response.json();
			setStory(data);
			setLoading(false);
		} catch (error) {
			console.error("This is an ", error);
		}
	};

	return (
		<>
			{loading ? (
				<p>Loading...</p>
			) : (
				<div>
					<h1>{story.title}</h1>
					<div>
						<p>{story.body}</p>
						<span>- {story.author}</span>
					</div>
				</div>
			)}
		</>
	);
};

export default Story;
