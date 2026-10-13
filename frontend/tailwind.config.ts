import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { paper: "#f8f5ef", ink: "#28251f", clay: "#a7664c", olive: "#7a8065" }, fontFamily: { serif: ["Georgia", "Times New Roman", "serif"] } } }, plugins: [] } satisfies Config;
