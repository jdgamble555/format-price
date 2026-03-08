import { formatPrice } from "./index.js";
import { test, expect } from "vitest";

test("formatPrice", () => {
    expect(formatPrice(1234.56)).toBe("$1,234.56");
});

test("formatPrice with small value", () => {
    expect(formatPrice(65)).toBe("$5.00");
});