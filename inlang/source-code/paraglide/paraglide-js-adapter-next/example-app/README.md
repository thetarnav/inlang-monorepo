# Paraglide NextJS App Router Example

This is an example of how to set up use and Paraglide in a project with the NextJS App Router.

## Setting up
After doing the regular NextJS setup, you need to add Paraglide to your project. You can do this by running the following command in your project root:

```bash
npx @inlang/paraglide-js init
npm install
```

This will do a few things:
- Create `project.inlang.json` in your project root. This file contains the configuration for Paraglide.
- Add `@inlang/paraglide-js` as a dev dependency to your project.
- Add a call to the Paraglide CLI to your build script.

You can then add messages to your project by adding & editing files in `./messages/{locale}.json`, or by using the Inlang VSCode extension.

Running `npm run build` will run the Paraglide Compiler, which will output it's results to `./src/paraglide/...` by default. You can change this by adding an `--outdir` flag to the build script in your `package.json`.

## Using Messages in your project
TODO