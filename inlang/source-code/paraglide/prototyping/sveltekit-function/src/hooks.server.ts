import type { Handle } from "@sveltejs/kit"
import { setLanguageTag } from "./paraglide/runtime"

export const handle: Handle = async ({ event, resolve }) => {
	const languageTag = "de"
	const response = await resolve(event, {})
	return response
}
