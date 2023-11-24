import type { Handle } from "@sveltejs/kit"
import { setLanguageAttribute } from "$lib/hooks/setLanguageAttribute.js"

export const handle: Handle = setLanguageAttribute
