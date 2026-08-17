# nest-react-template

Starter for a NestJS api + Vite/React frontend in one pnpm workspace.

Both apps are pretty much straight out of their generators (`nest new`, `create vite`). Only two tweaks:

- api is served under `/api`
- web's dev server proxies `/api` to the nest server, so no CORS headaches

## running it

```bash
pnpm install
pnpm dev
```

That runs both at once - api on :3000, web on :5173. Or separately:

```bash
pnpm dev:api
pnpm dev:web
```

`pnpm build`, `pnpm lint`, `pnpm test` all run across both apps too.

## sharing code between them

`packages/shared` is a small workspace package both apps depend on (`shared: workspace:*`). It needs building before it's usable, which `pnpm dev`/`pnpm build` already do for you (`pnpm --filter shared build`).
