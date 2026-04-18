# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run setup        # First-time setup: install deps + prisma generate + migrate
npm run dev          # Start dev server at localhost:3000 (Turbopack)
npm run build        # Production build
npm test             # Run all Vitest tests
npm test -- --watch  # Watch mode
npm test -- src/lib/__tests__/file-system.test.ts  # Run a single test file
npm run db:reset     # Wipe and re-migrate the SQLite database
```

Set `ANTHROPIC_API_KEY` in `.env` to enable real AI generation. Without it, a mock provider returns static code.

## Architecture

The app is a two-panel workspace: a chat panel on the left and a preview/code panel on the right. Users describe React components; Claude generates JSX files into an in-memory virtual file system, which is transpiled and rendered live in an iframe.

### Request flow

1. User submits a message → `ChatProvider` (`src/lib/contexts/chat-context.tsx`) calls `POST /api/chat` via the Vercel AI SDK `useChat` hook, attaching the serialized VFS state and `projectId`.
2. `src/app/api/chat/route.ts` reconstructs a `VirtualFileSystem` from the payload, calls Claude with two tools: `str_replace_editor` and `file_manager`.
3. Claude streams back tool calls. The client intercepts them via `onToolCall` and dispatches to `FileSystemContext.handleToolCall`, which mutates the in-memory VFS and triggers a React re-render.
4. `PreviewFrame` picks up the updated VFS, transpiles JSX with Babel standalone, and injects it into an iframe.
5. On stream finish, the server saves messages and serialized VFS to the `Project` row in SQLite (authenticated users only).

### VirtualFileSystem

`src/lib/file-system.ts` — A plain in-memory tree (no disk I/O). All generated files live here. It serializes/deserializes to plain JSON for DB storage and API payloads. Methods like `replaceInFile`, `insertInFile`, and `createFileWithParents` map directly to the AI tool commands.

### State management

- `FileSystemContext` (`src/lib/contexts/file-system-context.tsx`) — owns the `VirtualFileSystem` instance, selected file, and a `refreshTrigger` counter. Wraps all VFS mutations to trigger re-renders. Also handles incoming AI tool calls.
- `ChatContext` (`src/lib/contexts/chat-context.tsx`) — thin wrapper around Vercel AI SDK `useChat`, wires `fileSystem.serialize()` into every request body.

Both contexts are provided in `MainContent` (`src/app/main-content.tsx`), which is the root client component for both the anonymous landing page and per-project workspace.

### Auth

JWT stored in an httpOnly cookie (`auth-token`), signed with `jose`. `src/lib/auth.ts` is `server-only`. Middleware (`src/middleware.ts`) guards `/api/projects` and `/api/filesystem`. Anonymous users can use the app freely; their work is tracked in `src/lib/anon-work-tracker.ts` and can be migrated on sign-up.

### AI tools

- `src/lib/tools/str-replace.ts` — exposes `str_replace_editor` to Claude (create, str_replace, insert, view commands)
- `src/lib/tools/file-manager.ts` — exposes `file_manager` to Claude (rename, delete, list commands)
- `src/lib/prompts/generation.tsx` — system prompt injected with `cacheControl: ephemeral` (prompt caching)

### Data model

`Project` stores `messages` (JSON-stringified array) and `data` (JSON-stringified VFS snapshot). Both are plain strings in SQLite — no relational structure for file content.

### Testing

Tests are colocated in `__tests__/` subdirectories next to source. Uses Vitest + jsdom + Testing Library. The VFS and JSX transformer have unit tests; components have React Testing Library tests.
