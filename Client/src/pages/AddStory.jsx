import { useEffect, useState } from "react";
import { useUser } from "../lib/context/user";
import { data, useNavigate } from "react-router-dom";

const AddStory = () => {
	const user = useUser();
	const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!title) {
			setError("Title is empty");
		}
		if (!body) {
			setError("Body is empty");
		}
		if (body && title) {
			try {
				setError("");
				const response = await fetch("http://localhost:3000/addStory", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						// Include your data here
						title: title,
						body: body,
						userId: user.current.$id,
					}),
				});
				const data = await response.json();
				setTitle("");
				setBody("");
				setError("");
				//navigate to the story you created
				navigate(`/story/${data.$id}`);
			} catch (err) {
				console.log(err);
			}
		}
	};

	return (
		<div>
			<h1>Create a story</h1>
			<p>{error}</p>
			<form onSubmit={handleSubmit}>
				<label htmlFor="title">Title</label>
				<input
					type="text"
					name="title"
					id="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label htmlFor="body">Story</label>
				<textarea
					name="body"
					id="body"
					value={body}
					placeholder="So what's up?"
					onChange={(e) => setBody(e.target.value)}></textarea>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default AddStory;
