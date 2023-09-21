import { derived } from "svelte/store"
import { currentLanguageTag } from "../runtime"
import * as de from "./de"
import * as en from "./en"

export const onlyText: any = derived(currentLanguageTag, ($tag) => {
	switch ($tag) {
		case "en":
			return en.onlyText
		case "de":
			return de.onlyText
		default:
			throw new Error(`Unknown language tag: ${$tag}`)
	}
})

export const multipleParams: any = derived(currentLanguageTag, ($tag) => {
	switch ($tag) {
		case "en":
			return en.multipleParams
		case "de":
			return de.multipleParams
		default:
			throw new Error(`Unknown language tag: ${$tag}`)
	}
})
