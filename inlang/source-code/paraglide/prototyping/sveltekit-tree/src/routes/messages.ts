import { derived } from "svelte/store"
import { currentLanguageTag } from "./runtime"

/*@__NO_SIDE_EFFECTS__*/
export const onlyText = derived(currentLanguageTag, ($tag) => {
	switch ($tag) {
		case "en":
			return "Only text"
		case "de":
			return "Nur Text"
		default:
			return `onlyText`
	}
})

/*@__NO_SIDE_EFFECTS__*/
export const oneParam = derived(currentLanguageTag, ($tag) => {
	return (params: { name: string }) => {
		switch ($tag) {
			case "en":
				return `Hello ${params.name}!`
			case "de":
				return `Hallo ${params.name}!`
			default:
				return `oneParam`
		}
	}
})

/*@__NO_SIDE_EFFECTS__*/
export const multipleParams = derived(currentLanguageTag, ($tag) => {
	return (params: { name: string; count: number }) => {
		switch ($tag) {
			case "en":
				return `Hello ${params.name}! You have ${params.count} Messages.`
			case "de":
				return `Hallo ${params.name}! Du hast ${params.count} Nachrichten.`
			default:
				return `multipleParams`
		}
	}
})

/*@__NO_SIDE_EFFECTS__*/
export const x = derived(currentLanguageTag, ($tag) => {
	return () => {
		switch ($tag) {
			case "en":
				return `
export const onlyText = () => "Only text"
export const onlyText = () => "Only text"
export const onlyText = () => "Only text"
export const onlyText = () => "Only text"
export const onlyText = () => "Only text"
export const onlyText = () => "Only text"
export const onlyText = () => "Only text"
export const onlyText = () => "Only text"
export const onlyText = () => "Only text"
export const onlyText = () => "Only text"
export const onlyText = () => "Only text"
export const onlyText = () => "Only text"
export const onlyText = () => "Only text"
export const onlyText = () => "Only text"
export const onlyText = () => "Only text"
export const onlyText = () => "Only text"
`
		}
	}
})
