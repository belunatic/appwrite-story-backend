import { useEffect, useState } from "react";
import { useUser } from "../lib/context/user";

import { useNavigate, useParams, Link } from "react-router-dom";

const Story = () => {
	const user = useUser();
	const navigate = useNavigate();
	const { id } = useParams();
	const [story, setStory] = useState({});
	const [loading, setLoading] = useState(true);

	//check if user is logged in
	useEffect(() => {
		console.log(user.current);
		if (!user.current) {
			navigate("/login");
		}
	}, [user.current]);

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

	//handleDelete
	const handleDelete = async (id) => {
		const response = await fetch(`http://localhost:3000/${id}`, {
			method: "DELETE",
		});
		console.log(await response.json());
		navigate("/");
	};

	return (
		<>
			{loading ? (
				<p>Loading...</p>
			) : (
				<div className="flex flex-col flex-start">
					<h1 className="font-semibold text-2xl my-4">{story.title}</h1>
					<div>
						<p className="my-4">{story.body}</p>
						<span className="italic my-4">- {story.author}</span>
					</div>
					{user.current.$id === story.userId && (
						<div className="flex flex-row mb-3 mt-2">
							<button className="w-fit bg-blue-400 text-black p-2 rounded-sm mx-l-2">
								<Link to={`/editStory/${story.$id}`}>Edit</Link>
							</button>
							<button
								onClick={() => handleDelete(story.$id)}
								className="w-fit bg-red-500 text-black p-2 rounded-sm mx-2">
								Delete
							</button>
						</div>
					)}
				</div>
			)}
		</>
	);
};

export default Story;
