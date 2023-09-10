import { it, expect } from "vitest"
import { m } from "./runtime.js"

it("should return the correct message", () => {
	expect(m("onlyText", {})).toBe("Login")
	expect(m("oneParam", { name: "John" })).toBe("Hello John!")
	expect(m("multipleParams", { name: "John", count: 5 })).toBe("Hello John! You have 5 messages.")
})
