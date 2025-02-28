import { useState, useEffect } from "react";
import { useUser } from "../lib/context/user";
import { useNavigate, useParams } from "react-router-dom";
import StoryForm from "../components/StoryForm";

const EditStory = () => {
	const user = useUser();
	const navigate = useNavigate();
	const { id } = useParams();
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [error, setError] = useState("");

	//get the story in accordance to the id
	useEffect(() => {
		getStory();
	}, []);

	//get the story data from backend
	const getStory = async () => {
		try {
			const response = await fetch(`http://localhost:3000/${id}`);
			const data = await response.json();
			//display the title and body
			setTitle(data.title);
			setBody(data.body);
		} catch (error) {
			console.error("This is an ", error);
		}
	};

	//handle submit
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
				const response = await fetch(`http://localhost:3000/${id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						// Include your data here
						title: title,
						body: body,
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
			<h1>Edit me</h1>
			{/* <StoryForm
				formTitle="Edit Story"
				title={title}
				setTitle={setTitle}
				error={error}
				setError={setError}
				handleSubmit={handleSubmit}
				body={body}
				setBody={setBody}
			/> */}
		</>
	);
};

export default EditStory;
