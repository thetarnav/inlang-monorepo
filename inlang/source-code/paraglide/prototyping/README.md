## Usage

```ts

import { setCurrentLanguageTag } from "@inlang/paraglide-js"

// 1. Set the users language tag. 
// Under the hood, the messages for the corresponding language tags are imported. 
// Leading to lazy loading of the messages.
await setCurrentLanguageTag("en")

// 2. Use the messages
//    Your bundler will automatically tree-shake the unused messages.
//    Which means, only the messages that are used will be bundled. 
import * as m from "@inlang/paraglide-js/messages"

console.log(m.helloWorld()) // "Hello World"

```

## How it works

1. Paraglide compiles the inlang project into tree-shakable JavaScript modules and message functions.
2. `setCurrentLanguageTag()` lazy imports the messages for the given language tag.
3. `import * as m` enables bundlers to tree shake the messages. 