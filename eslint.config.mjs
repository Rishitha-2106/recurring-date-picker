import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Use just the JS-focused Next.js core web vitals config
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // Disable react-in-jsx-scope since Next.js doesn't need React imported
      "react/react-in-jsx-scope": "off",
      // You can add more custom rules here if needed
    },
  },
];

export default eslintConfig;
