import * as m from "./paraglide/messages/en"

function App() {
	return (
		<>
			<p>{m.multiple_params({ name: "Samuel", count: 5 })}</p>
		</>
	)
}

export default App
