> 8 - December - 2024

## Real Time Google Doc Clone

* ### To Learning Purpose || R&D

### For package install:-

```js
npm i --legacy-peer-deps
```

### For run the project:-

```js
npm run dev
```

### For run the database:-

```js
npx convex dev
```

### Need these config values to run this project:-

```js
CLERK_SECRET_KEY = *****
CONVEX_DEPLOYMENT = *****
LIVEBLOCKS_SECRET_KEY = *****
NEXT_PUBLIC_CONVEX_URL = *****
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = *****
```

### Custom port & auto browser open:-

```js
"scripts": {
  "dev": "npm run browser-open && next dev -p 4000",
  "browser-open": "start http://localhost:4000",
},
```

### Package dependencies list:-

* npx create-next-app@15.0.3
* npx shadcn@2.1.6 init
* npm i @tiptap/pm@2.10.2 --legacy-peer-deps
* npm i @tiptap/react@2.10.2 --legacy-peer-deps
* npm i @tiptap/starter-kit@2.10.2 --legacy-peer-deps
* npm i @tiptap/extension-task-list@2.10.2 --legacy-peer-deps
* npm i @tiptap/extension-task-item@2.10.2 --legacy-peer-deps
* npm i @tiptap/extension-table@2.10.2 --legacy-peer-deps
* npm i @tiptap/extension-table-header@2.10.2 --legacy-peer-deps
* npm i @tiptap/extension-table-row@2.10.2 --legacy-peer-deps
* npm i @tiptap/extension-table-cell@2.10.2 --legacy-peer-deps
* npm i @tiptap/extension-image@2.10.2 --legacy-peer-deps
* npm i @tiptap/extension-underline@2.10.2 --legacy-peer-deps
* npm i @tiptap/extension-text-style@2.10.2 --legacy-peer-deps
* npm i @tiptap/extension-font-family@2.10.2 --legacy-peer-deps
* npm i @tiptap/extension-heading@2.10.2 --legacy-peer-deps
* npm i @tiptap/extension-highlight@2.10.2 --legacy-peer-deps
* npm i @tiptap/extension-color@2.10.2 --legacy-peer-deps
* npm i @tiptap/extension-link@2.10.2 --legacy-peer-deps
* npm i @tiptap/extension-text-align@2.10.2 --legacy-peer-deps
* npm i tiptap-extension-resize-image@1.2.1 --legacy-peer-deps
* npm i react-color@2.19.3 --legacy-peer-deps
* npm i react-icons@5.3.0 --legacy-peer-deps
* npm i nuqs@2.2.3 --legacy-peer-deps
* npm i zustand@5.0.1 --legacy-peer-deps
* npm i convex@1.17.3 --legacy-peer-deps
* npm i @clerk/nextjs@6.5.1 --legacy-peer-deps
* npm i --save-dev @types/react-color@3.0.12 --legacy-peer-deps

### For LiveBlock packages:-

* npm i @liveblocks/client@2.12.2 --legacy-peer-deps
* npm i @liveblocks/react@2.12.2 --legacy-peer-deps
* npm i @liveblocks/react-ui@2.12.2 --legacy-peer-deps
* npm i @liveblocks/react-tiptap@2.12.2 --legacy-peer-deps
* npm i @liveblocks/node@2.12.2 -- legacy-peer-deps
* npm i @tiptap/extension-collaboration@2.10.2 --legacy-peer-deps
* npm i @tiptap/extension-collaboration-cursor@2.10.2 --legacy-peer-deps
* npm i y-protocols@1.0.6 --legacy-peer-deps
* npx create-liveblocks-app@2.20240816.0 --init --framework react

### Learning Points:-

* dynamically get params id's
* layout page do not rerender
* usage of color picker
* image upload dialog open programmatically
* ruler indicator inside allocated area (dynamic calculation)
* dynamically object key selection
* mouse dragging marker selection
* ruler dynamic calculation
* search-param custom hook
* convex db schema system
* usage of carousel system at UI
* usage of clerk auth system at UI
* usage of menu & submenu system at UI
* usage of alert & dialog system at UI
* usage of table data display system at UI

### Resource

* <https://tiptap.dev>
* <https://clerk.com>
* <https://convex.dev>
* <https://logoipsum.com>
* <https://liveblocks.io>

git commit 'feat: notifications system'