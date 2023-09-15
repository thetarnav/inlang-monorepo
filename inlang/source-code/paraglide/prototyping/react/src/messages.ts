/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react"
import { Paraglide } from "./App"

export const loginButton = () => {
	const { languageTag } = useContext(Paraglide)
	switch (languageTag) {
		case "en":
			return "Login today!"
		case "de":
			return "Logge dich ein!"
		default:
			return "DEFAULT"
	}
}

export const goodBye = () => {
	const { languageTag } = useContext(Paraglide)
	switch (languageTag) {
		case "en":
			return "Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!"
		case "de":
			return "Logge dich ein!"
		default:
			return "DEFAULT"
	}
}

