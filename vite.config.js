import { sveltekit } from "@sveltejs/kit/vite";
import UnoCSS from "unocss/vite";
import presetUno from "@unocss/preset-uno";
import presetWebFonts from "@unocss/preset-web-fonts";
import presetIcons from "@unocss/preset-icons";
import transformerDirectives from "@unocss/transformer-directives";
import { defineConfig } from "vite";
import presetTheme from "unocss-preset-theme";
import { presetHeroPatterns } from "@julr/unocss-preset-heropatterns";
import { colors } from "@unocss/preset-mini";
import { createSafeList } from "./safelist";

export default defineConfig({
	plugins: [
		UnoCSS({
			shortcuts: {
				"btn-primary":
					"bg-primary-400 outline-primary-500 outline-2 text-base-100 dark:bg-primary-700 dark:active:(bg-primary-600 translate-y-1) transition-transform active:(bg-primary-100 translate-y-1) dark:hover:bg-primary-600 hover:bg-primary-200 p-2 rounded-lg shadow-md",
				"btn-secondary":
					"bg-secondary-400 outline-secondary-500 outline-2 text-base-100 dark:bg-secondary-700 dark:active:(bg-secondary-600 translate-y-1)  transition-transform active:(bg-secondary-100 translate-y-1)  dark:hover:bg-secondary-600 hover:bg-secondary-200 p-2 rounded-lg shadow-md",
      },
			safelist: [
				// ...Array.from({ length: 26 }, (_, i) => String.fromCharCode("a".charCodeAt(0) + i)).map(
				// 	(char) => `font-${char}`
				// ),
				// ...Array.from({ length: 101 }, (_, i) => `top-[${i}%]`),
				// ...createSafeList(),
				// `font-thin font-extralight font-light font-normal font-medium font-semibold font-bold font-extrabold font-black
        //     btn-primary btn-secondary`,
			],
			theme: {},
			presets: [
				presetUno(),
				presetTheme({
					theme: {
						blue: {
							colors: {
								base: {
									50: colors.dark["900"],
									100: colors.dark["700"],
									200: colors.dark["500"],
									300: colors.dark["200"],
									400: colors.dark["50"],
									500: colors.light["900"],
									600: colors.light["700"],
									700: colors.light["500"],
									800: colors.light["200"],
									900: colors.light["50"],
								},
								primary: {
									50: colors.blue["50"],
									100: colors.blue["100"],
									200: colors.blue["200"],
									300: colors.blue["300"],
									400: colors.blue["400"],
									500: colors.blue["500"],
									600: colors.blue["600"],
									700: colors.blue["700"],
									800: colors.blue["800"],
									900: colors.blue["900"],
								},
								secondary: {
									50: colors.purple["50"],
									100: colors.purple["100"],
									200: colors.purple["200"],
									300: colors.purple["300"],
									400: colors.purple["400"],
									500: colors.purple["500"],
									600: colors.purple["600"],
									700: colors.purple["700"],
									800: colors.purple["800"],
									900: colors.purple["900"],
								},
								gray: {
									50: colors.slate["50"],
									100: colors.slate["100"],
									200: colors.slate["200"],
									300: colors.slate["300"],
									400: colors.slate["400"],
									500: colors.slate["500"],
									600: colors.slate["600"],
									700: colors.slate["700"],
									800: colors.slate["800"],
									900: colors.slate["900"],
								},
							},
						},
						blueDark: {
							colors: {
								base: {
									50: colors.light["50"],
									100: colors.light["200"],
									200: colors.light["500"],
									300: colors.light["700"],
									400: colors.light["900"],
									500: colors.dark["50"],
									600: colors.dark["200"],
									700: colors.dark["500"],
									800: colors.dark["700"],
									900: colors.dark["900"],
								},
								primary: {
									50: colors.blue["50"],
									100: colors.blue["100"],
									200: colors.blue["200"],
									300: colors.blue["300"],
									400: colors.blue["400"],
									500: colors.blue["500"],
									600: colors.blue["600"],
									700: colors.blue["700"],
									800: colors.blue["800"],
									900: colors.blue["900"],
								},
								secondary: {
									50: colors.purple["50"],
									100: colors.purple["100"],
									200: colors.purple["200"],
									300: colors.purple["300"],
									400: colors.purple["400"],
									500: colors.purple["500"],
									600: colors.purple["600"],
									700: colors.purple["700"],
									800: colors.purple["800"],
									900: colors.purple["900"],
								},
								gray: {
									50: colors.slate["50"],
									100: colors.slate["100"],
									200: colors.slate["200"],
									300: colors.slate["300"],
									400: colors.slate["400"],
									500: colors.slate["500"],
									600: colors.slate["600"],
									700: colors.slate["700"],
									800: colors.slate["800"],
									900: colors.slate["900"],
								},
							},
						},
						yellow: {
							colors: {
								base: {
									50: colors.dark["900"],
									100: colors.dark["700"],
									200: colors.dark["500"],
									300: colors.dark["200"],
									400: colors.dark["50"],
									500: colors.light["900"],
									600: colors.light["700"],
									700: colors.light["500"],
									800: colors.light["200"],
									900: colors.light["50"],
								},
								primary: {
									50: colors.yellow["50"],
									100: colors.yellow["100"],
									200: colors.yellow["200"],
									300: colors.yellow["300"],
									400: colors.yellow["400"],
									500: colors.yellow["500"],
									600: colors.yellow["600"],
									700: colors.yellow["700"],
									800: colors.yellow["800"],
									900: colors.yellow["900"],
								},
								secondary: {
									50: colors.rose["50"],
									100: colors.rose["100"],
									200: colors.rose["200"],
									300: colors.rose["300"],
									400: colors.rose["400"],
									500: colors.rose["500"],
									600: colors.rose["600"],
									700: colors.rose["700"],
									800: colors.rose["800"],
									900: colors.rose["900"],
								},
								gray: {
									50: colors.gray["50"],
									100: colors.gray["100"],
									200: colors.gray["200"],
									300: colors.gray["300"],
									400: colors.gray["400"],
									500: colors.gray["500"],
									600: colors.gray["600"],
									700: colors.gray["700"],
									800: colors.gray["800"],
									900: colors.gray["900"],
								},
							},
						},
						yellowDark: {
							colors: {
								base: {
									50: colors.light["50"],
									100: colors.light["200"],
									200: colors.light["500"],
									300: colors.light["700"],
									400: colors.light["900"],
									500: colors.dark["50"],
									600: colors.dark["200"],
									700: colors.dark["500"],
									800: colors.dark["700"],
									900: colors.dark["900"],
								},
								primary: {
									50: colors.yellow["50"],
									100: colors.yellow["100"],
									200: colors.yellow["200"],
									300: colors.yellow["300"],
									400: colors.yellow["400"],
									500: colors.yellow["500"],
									600: colors.yellow["600"],
									700: colors.yellow["700"],
									800: colors.yellow["800"],
									900: colors.yellow["900"],
								},
								secondary: {
									50: colors.rose["50"],
									100: colors.rose["100"],
									200: colors.rose["200"],
									300: colors.rose["300"],
									400: colors.rose["400"],
									500: colors.rose["500"],
									600: colors.rose["600"],
									700: colors.rose["700"],
									800: colors.rose["800"],
									900: colors.rose["900"],
								},
								gray: {
									50: colors.gray["50"],
									100: colors.gray["100"],
									200: colors.gray["200"],
									300: colors.gray["300"],
									400: colors.gray["400"],
									500: colors.gray["500"],
									600: colors.gray["600"],
									700: colors.gray["700"],
									800: colors.gray["800"],
									900: colors.gray["900"],
								},
							},
						},
					},
				}),
				presetHeroPatterns(),
				presetWebFonts({
					provider: "none", // default provider
					fonts: {
						// these will extend the default theme
						sans: "Roboto",
						mono: ["Fira Code", "Fira Mono:400,700"],
						// custom ones
						lobster: "Lobster",
						lato: [
							{
								name: "Lato",
								weights: ["400", "700"],
								italic: true,
							},
							{
								name: "sans-serif",
								provider: "none",
							},
						],
						inknut: "Inknut Antiqua",
						almendra: "Almendra",
					},
				}),
				presetIcons({
					extraProperties: {
						display: "inline-block",
						"vertical-align": "middle",
						// ...
					},
				}),
			],
			mode: "svelte-scoped",
			transformers: [transformerDirectives()],
		}),
		sveltekit(),
	],
});
