import type { Config } from "tailwindcss";

export default {
  content: [
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{html,js,ts,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgMain: "var(--bgMain)",
        gray: {
          100: "#f7fafc", // This is the default gray-100. Replace with your desired hex code.
          // You can also add other custom colors here
        },
      },
    },
  },
  darkMode: "class",
} satisfies Config;
