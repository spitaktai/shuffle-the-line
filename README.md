# Shuffle the Line

A lightweight, animated queue randomizer that brings fairness and fun to ordering tasks. Built with modern web technologies for a smooth, responsive experience.

## ✨ Features

- **Up to 10 Participants** – Add names in designated input fields with character limits
- **Animated Shuffling** – Visually engaging animation that cycles through random orders before revealing the final lineup
- **Dual Reset Options** – Clear just the ranking or reset everything for a fresh start
- **Real-time Validation** – Live participant count and intelligent button states
- **Responsive Design** – Works seamlessly across desktop and mobile devices
- **Type-safe** – Fully typed with TypeScript for reliability and great DX

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/) (v8 or higher)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/spitaktai/shuffle-the-line.git
cd shuffle-the-line
pnpm install
```

### Development

Start the development server with hot module replacement:

```bash
pnpm dev
```

Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`).

### Production Build

Build the application for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

### Code Quality

Run ESLint to check for code issues:

```bash
pnpm lint
```

## 📖 Usage

1. **Add Participants** – Enter at least 2 names (up to 10) in the input fields
2. **Randomize** – Click the "Randomize order" button to start the shuffle animation
3. **Watch the Magic** – The app cycles through random orders for ~2.5 seconds
4. **View Results** – The final ranking appears with a "Final" badge indicator
5. **Reset Options**:
   - **Reset ranking** – Clears only the shuffle results, keeps your names
   - **Reset names** – Clears everything for a completely fresh start

## 🛠️ Tech Stack

- **[React 19](https://react.dev/)** – UI library with the React Compiler enabled
- **[TypeScript](https://www.typescriptlang.org/)** – Type safety and enhanced DX
- **[Vite](https://vitejs.dev/)** – Lightning-fast build tool and dev server
- **[pnpm](https://pnpm.io/)** – Efficient package management
- **ESLint** – Code linting with React-specific rules

## ⚙️ Configuration

### Customizing Animation Timing

You can adjust the shuffle animation behavior by modifying constants in `src/App.tsx`:

```tsx
const SHUFFLE_DURATION_MS = 2500; // Total shuffle duration (milliseconds)
const SHUFFLE_STEP_MS = 140; // Interval between shuffle updates (milliseconds)
```

### Changing Maximum Participants

Modify the `MAX_PARTICIPANTS` constant in `src/App.tsx`:

```tsx
const MAX_PARTICIPANTS = 10; // Default: 10
```

## 📁 Project Structure

```
shuffle-the-line/
├── src/
│   ├── App.tsx          # Main application component
│   ├── App.css          # Component styles
│   ├── main.tsx         # Application entry point
│   ├── index.css        # Global styles
│   └── assets/          # Static assets
├── public/              # Public assets
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── eslint.config.js     # ESLint configuration
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🔗 Links

- **Repository**: [github.com/spitaktai/shuffle-the-line](https://github.com/spitaktai/shuffle-the-line)
- **Issues**: [Report a bug or request a feature](https://github.com/spitaktai/shuffle-the-line/issues)
