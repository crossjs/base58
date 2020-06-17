import { encode, decode } from "../src/encrypt";

test("encrypt", () => {
  expect(encode(0)).toBe("1");
  expect(decode("1")).toBe(0);
  expect(decode("11")).toBe(0);
  expect(decode("111")).toBe(0);
  expect(decode("1111")).toBe(0);
  expect(decode("11111")).toBe(0);
  expect(decode("111111")).toBe(0);
  expect(decode("1111111")).toBe(0);
  expect(decode("11111111")).toBe(0);
  expect(decode("111111111")).toBe(0);
  expect(decode("1111111111")).toBe(0);
  expect(encode(1)).toBe("2");
  expect(decode("2")).toBe(1);
  expect(decode("12")).toBe(1);
  expect(encode(12345)).toBe("4fr");
  expect(decode("4fr")).toBe(12345);
  expect(decode("14fr")).toBe(12345);
  expect(encode(6639914)).toBe("b2pH");
  expect(decode("b2pH")).toBe(6639914);
  expect(decode("1b2pH")).toBe(6639914);
  expect(encode(Number.MAX_SAFE_INTEGER)).toBe("2DLNrMSKug");
  expect(decode("2DLNrMSKug")).toBe(Number.MAX_SAFE_INTEGER);
  expect(decode("12DLNrMSKug")).toBe(Number.MAX_SAFE_INTEGER);
});
