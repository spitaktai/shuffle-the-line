# Shuffle the Line

A lightweight queue randomizer built with Vite, React, TypeScript, and pnpm. Add up to ten names, trigger the shuffle animation, and see who ends up first in line.

## Features

- Ten name inputs with live validation.
- Animated shuffle that cycles through random orders before locking the final list.
- Two reset options: clear just the ranking or clear both names and ranking.
- Responsive layout with polished styling.

## Getting Started

Install dependencies with pnpm:

```bash
pnpm install
```

### Useful scripts

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `pnpm dev`     | Start the Vite dev server with HMR.  |
| `pnpm build`   | Type-check and build for production. |
| `pnpm preview` | Preview the production build.        |
| `pnpm lint`    | Run ESLint on the project.           |

## How to use

1. Run `pnpm dev` and open the printed local URL.
2. Fill in at least two of the name fields (up to ten).
3. Click **Randomize order** to start the shuffle animation. After a couple of seconds the final ranking is revealed with a “Final” badge.
4. Use **Reset ranking** to clear only the ordering, or **Reset names** to wipe everything for a fresh round.

Tweak the timing constants in `src/App.tsx` if you want the shuffle animation to run for longer or shorter.
