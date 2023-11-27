# Paraglide NextJS Pages Router Example

This is an example of how to use Paraglide with the NextJS Pages Router.

## Setting up

### Installing Paraglide
After completing the regular NextJS setup, you need to add Paraglide to your project. You can do this by running the following command in your project root:

```bash
npx @inlang/paraglide-js init
npm install
```

This will do a few things:
- Create `project.inlang.json` in your project root. This file contains the configuration for Paraglide.
- Add `@inlang/paraglide-js` as a dev dependency to your project.
- Add a call to the Paraglide CLI to your build script.

You can then add messages to your project by adding & editing files in `./messages/{locale}.json`, or by using the Inlang VSCode extension.

Running `npm run build` will run the Paraglide Compiler, which will output it's results to `./src/paraglide/...` by default. You can change this by adding an `--outdir ./src/new-path` flag to the build script in your `package.json`.

You might want to add a `build:i18n` script to just run the Paraglide Compiler. That way you can run the compiler separately from the regular build script.

### Setting up i18n Routing
NextJS has built-in support for i18n routing with the pages router. You can read more about it [here](https://nextjs.org/docs/advanced-features/i18n-routing).

You can take a look at the `next.config.js` file in this example to see how to set up i18n routing with Paraglide.

All that's left to do is to tell Paraglide to use the locale determined by NextJS. We can do that by adding the following to the `src/pages/_app.tsx` file:

```tsx
import { AvailableLanguageTag, setLanguageTag } from "@/paraglide/runtime"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps, router }: AppProps) {
	setLanguageTag(router.locale as AvailableLanguageTag)
	return <Component {...pageProps} />
}
```

## Using Messages

After you have set up Paraglide, you can use it in your project. Paraglide Messages are just regular javascript functions that return a string, so you can use them anywhere you would use a string.

```ts
import * as m from "@/paraglide/messages"

export default function Home() {
    return (
        <div>
            <h1>{m.helloWorldTitle()}</h1>
            <p>{m.helloWorldTagline()}</p>
        </div>
    )
}
```

Don't worry about the `import * as m`. If you don't use a message on a page, then it will not be included in the build. You can import all messages from a file without worrying about bundle size.