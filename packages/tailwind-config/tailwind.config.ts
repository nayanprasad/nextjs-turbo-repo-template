import type {Config} from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    darkMode: "class",
    future: {
        hoverOnlyWhenSupported: true,
    },
    theme: {
        extend: {

        },
    },
    plugins: [],
};

export default config;
