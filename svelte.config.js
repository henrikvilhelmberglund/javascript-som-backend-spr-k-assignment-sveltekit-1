// use adapter-auto for zero config deployment to Vercel, adapter-static for Github Pages
import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";
// import adapter from "@sveltejs/adapter-static";

const dev = process.argv.includes("dev");

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
	},
	vitePlugin: {
		experimental: {
			inspector: {
				toggleKeyCombo: "shift",
				holdMode: true,
			},
		},
	},
	preprocess: preprocess(),
};

export default config;
