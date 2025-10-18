import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import unusedImports from "eslint-plugin-unused-imports"; // Add this import

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  // Add this new entry for the unused imports plugin
  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      // Disable standard rules to avoid conflicts
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      // Enable plugin rules for auto-removal (set to 'error' or 'warn' as needed)
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
    // Apply to TypeScript/JSX files
    files: ["**/*.{ts,tsx}"],
  },
];

export default eslintConfig;
