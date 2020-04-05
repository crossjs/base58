import { encode, decode } from "../src/encrypt";

test("encrypt", () => {
  expect(encode(0)).toBe("1");
  expect(decode("1")).toBe(0);
  expect(encode(1)).toBe("2");
  expect(decode("2")).toBe(1);
  expect(encode(12345)).toBe("4fr");
  expect(decode("4fr")).toBe(12345);
  expect(encode(6639914)).toBe("b2pH");
  expect(decode("b2pH")).toBe(6639914);
  expect(encode(Number.MAX_SAFE_INTEGER)).toBe("2DLNrMSKug");
  expect(decode("2DLNrMSKug")).toBe(Number.MAX_SAFE_INTEGER);
});
