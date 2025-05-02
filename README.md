# TypeScript Project Setup

This repository provides a modern TypeScript setup with integrated linting, formatting, and development tooling. The configuration is designed for Node.js projects using ES modules, strict type-checking, and best practices for code quality.

## Project Structure

```sh
ts-setup/
├── src/
│   └── index.ts
├── dist/
├── package.json
├── tsconfig.json
├── eslint.config.js
├── .prettierrc.json
├── .prettierignore
├── .gitignore
├── README.md
└── tsconfig.json
```

## Scripts in `package.json`

The [`package.json`](package.json) file defines several scripts to streamline development, type-checking, building, linting, and formatting. Below is a detailed explanation of each script:

### Development Scripts

- **`dev:type-check`**
  
  Runs the TypeScript compiler in watch mode for type-checking only (no output files are emitted). This helps catch type errors as you code.
  
  ```sh
  npm run dev:type-check
  ```

- **`dev:start`**
  
  Starts the project in development mode using [`tsx`](https://github.com/esbuild-kit/tsx), which runs your TypeScript files directly with automatic reload on changes.
  
  ```sh
  npm run dev:start
  ```

### Build and Run Scripts

- **`build`**
  
  Compiles the TypeScript source files in `src` to JavaScript in the `dist/` directory, according to [`tsconfig.json`](tsconfig.json).
  
  ```sh
  npm run build
  ```

- **`start`**
  
  Runs the compiled JavaScript from `dist/index.js` using Node.js.
  
  ```sh
  npm run start
  ```

- **`build-start`**
  
  A convenience script that first builds the project and then starts it. Equivalent to running `npm run build` followed by `npm run start`.
  
  ```sh
  npm run build-start
  ```

### Linting Scripts

- **`lint`**
  
  Runs ESLint on the entire project, enforcing code quality and style rules. The `--max-warnings 0` flag ensures that any warning will cause the script to fail.
  
  ```sh
  npm run lint
  ```

- **`lint:fix`**
  
  Runs ESLint with the `--fix` option to automatically fix problems where possible.
  
  ```sh
  npm run lint:fix
  ```

### Formatting Scripts

- **`format`**
  
  Uses Prettier to automatically format all files in the project according to the rules in `.prettierrc.json`.
  
  ```sh
  npm run format
  ```

- **`format:check`**
  
  Checks if files are formatted according to Prettier rules, but does not modify them. Useful for CI pipelines.
  
  ```sh
  npm run format:check
  ```

## Getting Started

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Start development mode:**

   ```sh
   npm run dev:start
   ```

3. **Type-check in watch mode:**

   ```sh
   npm run dev:type-check
   ```

4. **Build for production:**

   ```sh
   npm run build
   ```

5. **Run the built app:**

   ```sh
   npm run start
   ```

6. **Lint and format code:**

   ```sh
   npm run lint
   npm run lint:fix
   npm run format
   npm run format:check
   ```

## License

This project is licensed under the MIT License. See [`LICENSE`](LICENSE) for details.
