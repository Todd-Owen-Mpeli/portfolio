import type {Config} from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				xs: "320px",
				sm: "425px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
			},
			fontSize: {
				xs: ".75rem",
				sm: ".8rem",
				tiny: ".9rem",
				base: "1rem",
				medium: "1.15rem",
				paragraph: "1.05rem",
				lg: "1.25rem",
				xl: "1.5rem",
				"2xl": "1.75rem",
				"3xl": "1.85rem",
				"4xl": "2rem",
				"5xl": "2.25rem",
				"6xl": "2.5rem",
				"7xl": "3rem",
				"8xl": "4rem",
				"9xl": "4rem",
				"10xl": "4.5rem",
				"11xl": "5rem",
				"12xl": "5.5rem",
			},
			colors: {
				// Base colors Variables
				black: "#111",
				grey: "#cecece",
				white: "#ffffff",
				pureBlack: "#000",
				darkGrey: "#8f8f8f",
				lightGrey: "#f7f7f7",
				lightGreyTwo: "#fafafa",

				// Main colors
				primary: {
					default: "#2563eb",
					two: "#3978ff",
					light: "#3d77f3",
					dark: "#09275e",
					darker: "#0d172a",
					darkerTwo: "#061229",
				},
				secondary: {
					default: "#f6ad37",
					two: "#e8b042",
					three: "#fac546",
					light: "#fbbc57",
					dark: "#e4a002",
					darker: "#bc7700",
				},
				accent: {
					default: "#86bc08",
					two: "#74ae00",
					three: "#e39e34",
					dark: "#57a300",
					darkTwo: "#376b13",
				},
				tertiary: {
					default: "#833df4",
					two: "#7736f1",
					three: "#622bc7",
					dark: "#2d2378",
				},
			},
		},
	},
	plugins: [],
};
export default config;
