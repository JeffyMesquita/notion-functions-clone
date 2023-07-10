# Starting a ReactJs project with vite using `pnpm`

## Create a new project

```bash
pnpm create vite
```

## Install dependencies

```bash
pnpm install
```

## Run the project

```bash
pnpm dev
```

## Build the project

```bash
pnpm build
```

## Instal tailwindcss

```bash
pnpm i -D tailwindcss postcss autoprefixer
```

## Init tailwindcss

```bash
pnpm tailwindcss init -p
```

## Edit tailwindcss config file

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  //...
};
```

## index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Using tailwindcss typography

```bash
pnpm i -D @tailwindcss/typography
```

go to `tailwind.config.js` and add the plugin

```js
plugins: [require("@tailwindcss/typography")],
```

and now go to element and add the class `prose` to the element and `prose-violet` to change the color

```tsx
<div className="prose prose-violet">
  <h1>My title</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
    voluptatibus, quibusdam, quia, voluptatum voluptatem quod quos voluptates
    dolorum quae quas natus. Quisquam voluptatibus, quibusdam, quia, voluptatum
    voluptatem quod quos voluptates dolorum quae quas natus.
  </p>
</div>
```

## Using tiptap editor

```bash
pnpm i @tiptap/react @tiptap/starter-kit @tiptap/pm
```

## Adding tiptap extensions

```bash
pnpm i lowlight @tiptap/extension-code-block-lowlight highlight.js
```

```bash
pnpm i @tiptap/extension-bubble-menu
```

```bash
pnpm i @tiptap/extension-floating-menu
```

## Install react-icons

```bash
pnpm i react-icons
```
