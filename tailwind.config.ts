import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#070A08",
        card: "rgba(255,255,255,0.06)",
        card2: "rgba(255,255,255,0.10)",
        line: "rgba(255,255,255,0.10)",
        lime: "#5CFF7A",
        ink: "#E9EFEA",
        muted: "rgba(233,239,234,0.70)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px rgba(0,0,0,0.55)",
        soft: "0 10px 40px rgba(0,0,0,0.5)",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"],
        display: ["ui-sans-serif", "system-ui", "Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial"],
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 10s linear infinite",
      }
    },
  },
  plugins: [],
} satisfies Config;
