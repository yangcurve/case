# case

## Usage

```ts
import { to } from '@yangcurve/case'

const c = to.camel.case('hello_world') // helloWorld
const s = to.snake.case('helloWorld') // hello_world

const co = to.camel.caseKeys({ hello_world: 'hi'}) // { helloWorld: 'hi' }
const so = to.snake.caseKeys({ helloWorld: 'hi' }) // { hello_world: 'hi' }

type C = to.camel.Case<'hello_world'> // 'helloWorld'
type S = to.snake.Case<'helloWorld'> // 'hello_world'

type CO = to.camel.CaseKeys<{ hello_world: 'hi' }> // { helloWorld: 'hi' }
type SO = to.snake.CaseKeys<{ helloWorld: 'hi' }> // { hello_world: 'hi' }
```

To install dependencies:

```bash
bun install
```

To run tests:

```bash
bun test
```

This project was created using `bun init` in bun v1.1.26. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
