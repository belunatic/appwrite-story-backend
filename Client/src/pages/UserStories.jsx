import { useEffect, useState } from "react";
import { useUser } from "../lib/context/user";
import { Link, useNavigate } from "react-router-dom";

// We'll complete this component later
export function UserStories() {
	const user = useUser();
	const navigate = useNavigate();

	//state
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	//check if user is logged in
	useEffect(() => {
		console.log(user.current);
		if (!user.current) {
			navigate("/login");
		}
	}, [user.current]);

	useEffect(() => {
		getData();
	}, []);

	//get the data from backend
	const getData = async () => {
		try {
			const response = await fetch(
				`http://localhost:3000/userStories/${user.current.$id}`
			);
			const data = await response.json();
			console.log("This is the data", data);
			setData(data.documents);
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
		setData(data.filter((story) => story.$id !== id));
	};

	return (
		<>
			<h1 className="text-2xl">My Stories</h1>
			{loading ? (
				<p>Loading...</p>
			) : (
				data.map((item) => (
					<div
						key={item.$id}
						className="flex flex-col flex-start border-b-2 border-green-800">
						<h2 className="font-semibold text-2xl my-4">{item.title}</h2>
						<p className="my-4">{item.body}</p>
						<span className="italic my-4">- {item.author}</span>
						<div className="flex flex-row mb-3">
							{item.userId === user.current.$id && (
								<>
									<button className="w-fit bg-green-500 text-black p-2 rounded-sm mx-2">
										<Link to={`/editStory/${item.$id}`}>Edit</Link>
									</button>
									<button
										className="w-fit bg-red-500 text-black p-2 rounded-sm mx-2"
										onClick={() => handleDelete(item.$id)}>
										Delete
									</button>
								</>
							)}
						</div>
					</div>
				))
			)}
		</>
	);
}

export default UserStories;
