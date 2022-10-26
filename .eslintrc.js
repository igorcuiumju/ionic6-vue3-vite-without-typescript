export const root = true;
export const env = {
  es2021: true,
};

export const parserOptions = {
  ecmaVersion: 2020,
};
export const rules = {
  "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
  "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  "vue/no-deprecated-slot-attribute": "off",
  "vue/multi-word-component-names": "off",
};
export const overrides = [
  {
    files: [
      "**/__tests__/*.{j,t}s?(x)",
      "**/tests/unit/**/*.spec.{j,t}s?(x)",
    ],
    env: {
      jest: true,
    },
  },
];
