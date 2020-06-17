import { encode } from "./encrypt";

const base = 7427658739644928;
const seed = 1569540515096064;

export function random(): string {
  return encode(base + Math.floor(Math.random() * seed) + Date.now());
}
