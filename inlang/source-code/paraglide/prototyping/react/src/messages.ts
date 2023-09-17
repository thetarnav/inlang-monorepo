/* eslint-disable react-hooks/rules-of-hooks */
import { useParaglide } from "./runtime"

export const loginButton = () => {
	const { languageTag } = useParaglide()
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
	const { languageTag } = useParaglide()
	switch (languageTag) {
		case "en":
			return "Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!"
		case "de":
			return "Logge dich ein!"
		default:
			return "DEFAULT"
	}
}

