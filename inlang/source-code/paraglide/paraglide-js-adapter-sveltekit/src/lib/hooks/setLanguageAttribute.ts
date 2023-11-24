import type { Handle } from "@sveltejs/kit"

export const setLanguageAttribute: Handle = async ({ event, resolve }) => {
	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace("%lang%", "en"),
	})

	return response
}
