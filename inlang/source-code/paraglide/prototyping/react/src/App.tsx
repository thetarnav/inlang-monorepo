/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext, useState } from "react"
import * as m from "./messages"

const useParaglideState = () => {
	const [languageTag, setLanguageTag] = useState("en")
	return { languageTag, setLanguageTag }
}

export const Paraglide = createContext(
	{} as {
		languageTag: string
		setLanguageTag: (tag: string) => void
	},
)

export const setCurrentLanguageTag = (tag: string) => {
	const ctx = useContext(Paraglide)
	ctx.setLanguageTag(tag)
}

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
	const { setLanguageTag } = useContext(Paraglide)
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
			<p>{m.loginButton()}</p>
		</>
	)
}

function Component2() {
	console.log("rendering component 2")

	return (
		<>
			<p>hello from 2</p>
			<p>{m.loginButton()}</p>
		</>
	)
}

export default App
