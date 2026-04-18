# Claude Code Course — Hands-on Project

A hands-on walkthrough of the Claude Code course, covering MCP servers, GitHub Actions automation, hooks, and the Claude Agent SDK.

## Projects

### `uigen/` — React Component Generator
A web app that generates React + Tailwind UI components using Claude.

**What was built:**
- Design philosophy prompt in `uigen/src/lib/prompts/generation.tsx` — spacing, color, typography guidelines
- Generated components: `PricingCard` (3-tier toggle), `SaaSLanding` (full landing page)
- GitHub Actions CI/CD with `anthropics/claude-code-action@v1`
- MCP Playwright integration for browser automation (CLI mode)
- Prettier auto-format hook and Vitest auto-run hook on every file write

**Run locally:**
```bash
cd uigen
npm run setup
npm run dev      # http://localhost:3000
```

### `queries/` — E-commerce Query Utilities (TypeScript + SQLite)
A database query library for an e-commerce system with Claude-powered hooks and SDK usage.

**What was built:**
- `hooks/read_hook.js` — PreToolUse hook that blocks Claude from reading `.env` files (exit 2)
- `hooks/query_hook.js` — PreToolUse hook using Claude Agent SDK to detect duplicate query functions before writes
- `.claude/settings.json` — wires both hooks into Claude Code for this project
- `sdk.ts` — standalone SDK script that analyzes `src/queries/` for duplicate functions

**Run the SDK script:**
```bash
cd queries
npm run setup
npm run sdk      # analyzes all query files for duplicates
```

## Hooks

### Global (`~/.claude/settings.json`)
| Event | Matcher | Action |
|-------|---------|--------|
| PostToolUse | `Write\|Edit` | Auto-format with Prettier |
| PostToolUse | `Write\|Edit` | Auto-run Vitest for test files |
| PreToolUse | `Read\|Grep` | Block `.env` file access |

### queries project (`.claude/settings.json`)
| Event | Matcher | Action |
|-------|---------|--------|
| PreToolUse | `Read\|Grep` | `read_hook.js` — block `.env` reads |
| PreToolUse | `Write\|Edit\|MultiEdit` | `query_hook.js` — detect duplicate queries via SDK |
| PostToolUse | `Write\|Edit\|MultiEdit` | Prettier format + TypeScript check |

## GitHub Actions

| Workflow | Trigger | What it does |
|----------|---------|--------------|
| `claude.yml` | `@claude` in issues/PRs | Claude Code responds and makes code changes |
| `claude-code-review.yml` | PR opened/updated | Automatic code review on `uigen/src/**` changes |

## Claude Agent SDK

`queries/sdk.ts` uses `@anthropic-ai/claude-agent-sdk` to run Claude as an agent that reads the `src/queries/` directory and produces a duplicate-function analysis report.

```ts
import { query } from "@anthropic-ai/claude-agent-sdk";

for await (const message of query({ prompt })) {
  if (message.type === "result" && message.subtype === "success") {
    console.log(message.result);
  }
}
```
