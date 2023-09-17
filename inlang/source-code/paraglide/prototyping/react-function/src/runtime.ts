/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext, useState } from "react"
import * as messages from "./messages"

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

export const m = (id: string, params: any) => {
	const { languageTag } = useParaglide()
	if (id === "loginButton") {
		return /*#__PURE__*/ messages.loginButton(languageTag)
	} else if (id === "goodBye") {
		return /*#__PURE__*/ messages.goodBye(languageTag)
	}
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	return "eee" + params
}
