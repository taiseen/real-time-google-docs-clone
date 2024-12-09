> 08 - December - 2024

## Real Time Google Doc Clone

* npx create-next-app@15.0.3
* npx shadcn@2.1.6 init
* npm install @tiptap/pm@2.10.2 --legacy-peer-deps
* npm install @tiptap/react@2.10.2 --legacy-peer-deps
* npm install @tiptap/starter-kit@2.10.2 --legacy-peer-deps
* npm install @tiptap/extension-task-list@2.10.2 --legacy-peer-deps
* npm install @tiptap/extension-task-item@2.10.2 --legacy-peer-deps
* npm install @tiptap/extension-table@2.10.2 --legacy-peer-deps
* npm install @tiptap/extension-table-header@2.10.2 --legacy-peer-deps
* npm install @tiptap/extension-table-row@2.10.2 --legacy-peer-deps
* npm install @tiptap/extension-table-cell@2.10.2 --legacy-peer-deps
* npm install @tiptap/extension-image@2.10.2 --legacy-peer-deps
* npm install tiptap-extension-resize-image@1.2.1 --legacy-peer-deps

```
npm run dev
```

## Learning Points:-

* dynamically get params id's
* layout page do not rerender

## Custom Port & Auto Browser Open

```js
  "scripts": {
    "dev": "npm run browser-open && next dev -p 4000",
    "browser-open": "start http://localhost:4000",
  },
```
