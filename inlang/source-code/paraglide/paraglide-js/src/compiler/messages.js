/**
 ** THIS FILE CONTAINS MOCK MESSAGES FOR TESTING AND IS
 ** REPLACED BY THE ACTUAL MESSAGES FILE DURING THE BUILD PROCESS
 */

export const onlyText = () => ({
	en: "Only text",
	de: "Nur Text",
})

export const oneParam = /** @param {{ name: string }} params */ (params) => ({
	en: `Hello ${params.name}!`,
	de: `Hallo ${params.name}!`,
})

export const multipleParams = /** @param {{ name: string, count: string }} params */ (params) => ({
	en: `Hello ${params.name}! You have ${params.count} messages.`,
	de: `Hallo ${params.name}! Du hast ${params.count} Nachrichten.`,
})

export const withMultipleVariants = /** @param {{ name: string, count: string }} params */ (
	params,
) => ({
	selectorOrdering: ["gender", "guestOther"],
	en: [
		{
			match: { gender: "female", count: "1" },
			pattern: `Hello Ms. ${params.name}! You have one message.`,
		},
		{
			match: { gender: "male", count: "1" },
			pattern: `Hello Mr. ${params.name}! You have one message.`,
		},
		{
			match: { gender: "*", guestOther: "*" },
			pattern: `Hello ${params.name}! You have ${params.count} messages.`,
		},
	],
	de: [
		{
			match: { gender: "female", count: "1" },
			pattern: `Hallo Frau ${params.name}! Du hast eine Nachricht.`,
		},
		{
			match: { gender: "male", count: "1" },
			pattern: `Hallo Herr ${params.name}! Du hast eine Nachricht.`,
		},
		{
			match: { gender: "*", guestOther: "*" },
			pattern: `Hallo ${params.name}! Du hast ${params.count} Nachrichten.`,
		},
	],
})
