import type { Handle } from "@sveltejs/kit"
import { preImportMessages } from "./paraglide/runtime"

await preImportMessages()

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event)
	return response
}
