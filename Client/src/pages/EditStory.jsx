import { useState } from "react";
import { useUser } from "../lib/context/user";
import { useNavigate } from "react-router-dom";
import StoryForm from "../components/StoryForm";

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
		<>
			<StoryForm
				formTitle="Create A Story"
				title={title}
				setTitle={setTitle}
				error={error}
				setError={setError}
				handleSubmit={handleSubmit}
				body={body}
				setBody={setBody}
			/>
		</>
	);
};

export default AddStory;
