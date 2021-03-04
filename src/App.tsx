import "./App.css";
import React, { useState } from "react";

const App = () => {
	const [userInput, setUserInput] = useState("");
	const [numberCount, setNumberCount] = useState(Number);

	const onUserInputCount = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		setUserInput(value);
		setNumberCount(value.trim().split(/\s+/).length);
	};

	return (
		//apparently 'form' has to be enclosed in a div? why is that? it shows up red underline if not
		<div>
			<form>
				<input value={userInput} onChange={onUserInputCount} />
			</form>
			<div>{numberCount}</div>
		</div>
	);
};

export default App;
