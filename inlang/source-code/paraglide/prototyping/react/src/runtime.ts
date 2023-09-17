import { createContext, useContext, useState } from "react"

export const Paraglide = createContext(
	{} as {
		languageTag: string
		setLanguageTag: (tag: string) => void
	},
)

export const useParaglideState = () => {
	const [languageTag, setLanguageTag] = useState("en")
	return { languageTag, setLanguageTag }
}

export const useParaglide = () => {
	return useContext(Paraglide)
}

export const setCurrentLanguageTag = (tag: string) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const ctx = useContext(Paraglide)
	ctx.setLanguageTag(tag)
}
