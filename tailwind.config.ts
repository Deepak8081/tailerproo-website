import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07130f",
        panel: "#0d1f18",
        "panel-2": "#122a20",
        hairline: "#24402f",
        gold: {
          DEFAULT: "#c9a227",
          light: "#e8cf7a",
          dim: "#8a7020"
        },
        cream: {
          DEFAULT: "#f3ede0",
          dim: "#c9c2ae"
        },
        sage: "#5f7d6a"
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        accent: ["var(--font-cormorant)", "serif"]
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse 900px 500px at 15% -10%, rgba(201,162,39,0.10), transparent 60%), radial-gradient(ellipse 700px 600px at 100% 20%, rgba(95,125,106,0.12), transparent 55%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        marquee: "marquee 26s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
