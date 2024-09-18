# case

TypeScript case converter

## Usage

```ts
import { to } from '@yangcurve/case'
```

- `to.camel`
- `to.kebab`
- `to.pascal`
- `to.snake`
- `to.upperKebab`
- `to.upperSnake`

```ts
const snake = to.snake('helloWorld')

type Snake = to.Snake<'helloWorld'>

const snakeObject = to.snake({
  arrayOfNumbers: [1, 2, 3],
  arrayOfObjects: [
    {
      helloWorld: 'hi',
    },
    {
      itWorks: 'great',
    },
  ],
  nestedObject: {
    a1: {
      a2: new Map(),
    },
    b1: {
      b2: new Set(),
    },
  },
})
```
