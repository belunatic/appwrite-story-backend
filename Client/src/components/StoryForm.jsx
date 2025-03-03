import PropTypes from "prop-types";

const StoryForm = (props) => {
	return (
		<div>
			<h1 className="text-2xl font-bold">{props.formTitle}</h1>
			<p>{props.error}</p>
			<form onSubmit={props.handleSubmit} className="flex flex-col mt-4">
				<label
					htmlFor="title"
					className="block text-sm/6 font-medium text-gray-900">
					Title
				</label>
				<input
					type="text"
					name="title"
					id="title"
					className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-1 border-black"
					value={props.title}
					onChange={(e) => props.setTitle(e.target.value)}
				/>
				<label
					htmlFor="body"
					className="block text-sm/6 font-medium text-gray-900 mt-2">
					Story
				</label>
				<textarea
					name="body"
					id="body"
					value={props.body}
					placeholder="So what's up?"
					className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-1 border-black"
					onChange={(e) => props.setBody(e.target.value)}></textarea>
				<div className="mt-6 flex items-center justify-start gap-x-6">
					<button className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
						Submit
					</button>
					<button
						onClick={props.handleCancel}
						className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

//props validation
StoryForm.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string,
	formTitle: PropTypes.string,
	setTitle: PropTypes.func,
	setBody: PropTypes.func,
	handleSubmit: PropTypes.func,
	handleCancel: PropTypes.func,
	error: PropTypes.string,
	setError: PropTypes.func,
};

export default StoryForm;
