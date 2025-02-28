import PropTypes from "prop-types";

const StoryForm = (props) => {
	return (
		<div>
			<h1>{props.formTitle}</h1>
			<p>{props.error}</p>
			<form onSubmit={props.handleSubmit}>
				<label htmlFor="title">Title</label>
				<input
					type="text"
					name="title"
					id="title"
					value={props.title}
					onChange={(e) => props.setTitle(e.target.value)}
				/>
				<label htmlFor="body">Story</label>
				<textarea
					name="body"
					id="body"
					value={props.body}
					placeholder="So what's up?"
					onChange={(e) => props.setBody(e.target.value)}></textarea>
				<button>Submit</button>
				<button onClick={props.handleCancel}>Cancel</button>
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
