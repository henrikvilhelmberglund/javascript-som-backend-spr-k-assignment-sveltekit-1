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