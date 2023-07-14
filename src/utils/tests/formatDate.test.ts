import { describe, test, expect } from "vitest";
import { formatDate } from "$utils";

describe("Testing formatDate utility", () => {
	test("converts a date in the current year to medium style looking date", () => {
		const result = formatDate("2023-01-13");
		expect(result).toBe("Friday, January 13");
	});

	test("converts a date in a previous year to medium style looking date", () => {
		const result = formatDate("2022-07-22");
		expect(result).toBe("July 22, 2022");
	});

	test("converts a date object to medium style looking date", () => {
		const date = new Date(2021, 11, 25);
		const result = formatDate(date);
		expect(result).toBe("December 25, 2021");
	});

	test("converts the current date to medium style looking date", () => {
		const currentDate = new Date();
		const result = formatDate(currentDate);
		expect(result).toMatch(/(\w+), (\w+ \d+)/); // Matches the expected format
	});

	test('returns "Invalid date" for an invalid date string', () => {
		expect(() => formatDate("2023-15-40")).toThrowError(/Invalid/);
	});

	test("converts a date with single digit day to medium style looking date", () => {
		const result = formatDate("2023-02-03");
		expect(result).toBe("Friday, February 3");
	});

	test("converts a date with single digit month to medium style looking date", () => {
		const result = formatDate("2023-11-05");
		expect(result).toBe("Sunday, November 5");
	});

	test("converts a date with single digit day and month to medium style looking date", () => {
		const result = formatDate("2023-03-07");
		expect(result).toBe("Tuesday, March 7");
	});

	test("converts a date on the last day of the month to medium style looking date", () => {
		const result = formatDate("2023-04-30");
		expect(result).toBe("Sunday, April 30");
	});

	test("converts a date with leading zeros to medium style looking date", () => {
		const result = formatDate("2023-06-09");
		expect(result).toBe("Friday, June 9");
	});
});
