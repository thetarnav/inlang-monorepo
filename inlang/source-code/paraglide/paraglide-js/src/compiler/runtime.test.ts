import { it, expect } from "vitest"
import { m, setCurrentLanguageTag } from "./runtime.js"

await setCurrentLanguageTag("en")

it("should return the correct message", () => {
	expect(m("onlyText", {})).toBe("Only text")
	expect(m("oneParam", { name: "John" })).toBe("Hello John!")
	expect(m("multipleParams", { name: "John", count: 5 })).toBe("Hello John! You have 5 messages.")
})
