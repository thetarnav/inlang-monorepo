/* eslint-disable react-hooks/rules-of-hooks */
import { m } from "./runtime"
import { Paraglide, useParaglide, useParaglideState } from "./runtime"

function App() {
	console.log("rendering app")
	return (
		<Paraglide.Provider value={useParaglideState()}>
			<>
				<Component></Component>
				<Component2></Component2>
			</>
		</Paraglide.Provider>
	)
}

function Component() {
	console.log("rendering component 1")
	const { setLanguageTag } = useParaglide()

	return (
		<>
			{/* <p>{languageTag}</p> */}
			<button
				onClick={() => {
					setLanguageTag("de")
				}}
			>
				Change language tag
			</button>
			<p>{m("loginButton", {})}</p>
		</>
	)
}

function Component2() {
	console.log("rendering component 2")

	return (
		<>
			<p>{m("loginButton", {})}</p>
		</>
	)
}

export default App
