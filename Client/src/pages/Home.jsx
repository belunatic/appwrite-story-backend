import { useEffect, useState } from "react";
import { useUser } from "../lib/context/user";
import { Link, useNavigate } from "react-router-dom";

// We'll complete this component later
export function Home() {
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
			const response = await fetch("http://localhost:3000/");
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
		navigate("/");
	};

	return (
		<>
			<h1>Home</h1>
			{loading ? (
				<p>Loading...</p>
			) : (
				data.map((item) => (
					<div key={item.$id}>
						<h2>{item.title}</h2>
						<p>{item.body}</p>
						<span>- {item.author}</span>
						<button>
							<Link to={`/story/${item.$id}`}>Read more</Link>
						</button>
						{item.userId === user.current.$id && (
							<>
								<button>
									<Link to={`/editStory/${item.$id}`}>Edit</Link>
								</button>
								<button onClick={() => handleDelete(item.$id)}>Delete</button>
							</>
						)}
					</div>
				))
			)}
		</>
	);
}

export default Home;
