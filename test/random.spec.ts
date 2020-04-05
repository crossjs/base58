import { random } from "../src/random";

test("random()", () => {
  const v: any = {};
  for (let i = 0; i < 10000; i++) {
    const r = random();
    v[r] = 1;
  }
  expect(Object.keys(v).length).toBe(10000);
});
