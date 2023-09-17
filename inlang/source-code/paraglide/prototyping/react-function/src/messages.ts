/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

export const loginButton = (tag: any) => {
	switch (tag) {
		case "en":
			return "Login today!"
		case "de":
			return "Logge dich ein!"
		default:
			return "DEFAULT"
	}
}

export const goodBye = (tag: any) => {
	const variants = {
		en: "Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!Login today!",
		de: "Logge dich ein!",
	}
	return variants[tag]
}
