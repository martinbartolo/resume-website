import nextTypescript from "eslint-config-next/typescript";
import js from "@eslint/js";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import configPrettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  ...nextTypescript, // Global ignores (must be first)
  {
    ignores: [
      "next-env.d.ts",
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      "node_modules/**",
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
      ".contentlayer/**",
      "public/**",
      "src/generated/prisma/**",
    ],
  }, // Base JavaScript config
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
    },
  }, // Next.js flat config (core-web-vitals includes base Next config)
  ...nextCoreWebVitals, // JSX Accessibility rules (manual config to avoid plugin redefinition)
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // Key a11y rules not in Next.js defaults
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-has-content": "error",
      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-proptypes": "error",
      "jsx-a11y/aria-role": "error",
      "jsx-a11y/aria-unsupported-elements": "error",
      "jsx-a11y/heading-has-content": "warn",
      "jsx-a11y/html-has-lang": "warn",
      "jsx-a11y/img-redundant-alt": "warn",
      "jsx-a11y/interactive-supports-focus": "warn",
      "jsx-a11y/label-has-associated-control": "warn",
      "jsx-a11y/no-autofocus": "warn",
      "jsx-a11y/role-has-required-aria-props": "error",
      "jsx-a11y/role-supports-aria-props": "error",
    },
  }, // TypeScript - typed and stylistic configs (only for .ts/.tsx files)
  ...tseslint.configs.recommendedTypeChecked.map(config => ({
    ...config,
    files: ["**/*.{ts,tsx}"],
  })),
  ...tseslint.configs.stylisticTypeChecked.map(config => ({
    ...config,
    files: ["**/*.{ts,tsx}"],
  })),
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // Code quality rules
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",

      // TypeScript base rules
      quotes: ["error", "double", { avoidEscape: true }],
      "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: { attributes: false } },
      ],

      // Stricter TypeScript rules
      "@typescript-eslint/prefer-optional-chain": "warn",
      "@typescript-eslint/prefer-nullish-coalescing": "warn",
      "@typescript-eslint/no-unnecessary-condition": "warn",
    },
  }, // Import plugin with recommended rules + custom ordering (aliased to avoid redefinition)
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: { i: importPlugin },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
        },
      },
      react: { version: "detect" },
    },
    rules: {
      // Import plugin recommended rules (with aliased prefix)
      "i/export": "error",
      "i/no-duplicates": "error",

      // Custom import ordering rules
      "sort-imports": [
        "error",
        { ignoreCase: true, ignoreDeclarationSort: true },
      ],
      "i/order": [
        "error",
        {
          groups: [
            ["external", "builtin"],
            "internal",
            ["sibling", "parent"],
            "index",
          ],
          pathGroups: [
            { pattern: "react", group: "external", position: "before" },
            { pattern: "src/**", group: "internal" },
          ],
          pathGroupsExcludedImportTypes: ["internal", "react"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "i/no-unresolved": ["error", { ignore: ["^geist/"] }],
    },
  }, // JavaScript/MJS files - simpler import rules (avoids resolver issues)
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { i: importPlugin },
    rules: {
      // Code quality rules
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",

      // Import rules
      "i/export": "error",
      "i/no-duplicates": "error",
      "sort-imports": [
        "error",
        { ignoreCase: true, ignoreDeclarationSort: true },
      ],
      "i/order": [
        "error",
        {
          groups: [
            ["external", "builtin"],
            "internal",
            ["sibling", "parent"],
            "index",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
    },
  }, // Unused imports
  {
    plugins: { "unused-imports": unusedImports },
    rules: {
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
  }, // Prettier as ESLint rule + disable conflicting formatting rules
  {
    plugins: { prettier: prettierPlugin },
    rules: {
      "prettier/prettier": "error",
    },
  },
  configPrettier,
];
