/**
 * Converts a date to medium style looking dates. If the date is in the current year,
 * we don't display the year part. Else, we display the year.
 *
 * eg: 1) 2023-01-13 -> 13th January
 *
 *     2) 2022-07-22 -> 22nd July 2022
 */
export const formatDate = (date: Date | string): string => {
	const newDate = new Date(date);
	const currentYear = new Date().getFullYear();
	const inputYear = newDate.getFullYear();
	let dateOptions: Intl.DateTimeFormatOptions;

	if (currentYear === inputYear)
		dateOptions = {
			weekday: "long",
			day: "numeric",
			month: "long"
		};
	else {
		dateOptions = {
			day: "numeric",
			month: "long",
			year: "numeric"
		};
	}
	return Intl.DateTimeFormat("en-US", dateOptions).format(newDate);
};
