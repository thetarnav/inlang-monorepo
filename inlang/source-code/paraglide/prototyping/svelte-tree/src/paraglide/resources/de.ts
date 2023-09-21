export const onlyText = () => `Dies ist eine simple Nachricht.`

export const oneParam = (params: any) => `Guten Tag ${params.name}!`

export const multipleParams = (params: any) =>
	`Hallo ${params.name}! Du has ${params.count} Nachrichten.`
