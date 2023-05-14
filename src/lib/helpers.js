import { browser } from "$app/environment";
import { get } from "svelte/store";
import { activeTheme, preferredMode } from "./stores";

export const toNiceDate = (dateObject) => {
	// Assuming you have a Date object
	const date = new Date(dateObject);

	// Extract the year, month, and day components
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0"); // Add 1 to the month since it is zero-based
	const day = String(date.getDate()).padStart(2, "0");

	// Format the components into the desired output
	const formattedDate = `${year}-${month}-${day}`;
	return formattedDate;
};

export function activateTheme(theme, override) {
	if (browser) {
		if (!override) {
			activeTheme.set(theme);
		} else {
			activeTheme.set(override);
		}

		document.documentElement.classList = "";

		if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
			if (!get(preferredMode)) {
				preferredMode.set("dark");
			}
		}
		if (get(preferredMode) === "dark") {
			// dark mode
			// console.log("I am dark mode");
			activeTheme.set(get(activeTheme) + "Dark");
			document.documentElement.classList.add(get(activeTheme));
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.add(get(activeTheme));
			document.documentElement.classList.add("light");
		}
		return get(activeTheme);
	}
}
