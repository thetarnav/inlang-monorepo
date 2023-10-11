import { test, expect, vi } from "vitest"
import { nameOfLanguageTag } from "./nameOfLanguageTag.js"

test("it should warn if the language tag is unknown and return 'undefined'", () => {
	const mockWarn = vi.spyOn(console, "warn")
	expect(nameOfLanguageTag("unknown")).toBe("undefined")
	expect(mockWarn).toHaveBeenCalledOnce()
})
