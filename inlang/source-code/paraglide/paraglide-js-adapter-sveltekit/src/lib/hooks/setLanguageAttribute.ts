import { Handle } from "@sveltejs/kit"

export const setLanguageAttribute: Handle = ({ event, resolve }) => {
	return resolve(event)
}
