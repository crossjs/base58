const chars = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
const radix = chars.length;

export function encode(num: number): string {
  let str = "";
  while (num >= radix) {
    const remainder = num % radix;
    str = `${chars.charAt(remainder)}${str}`;
    num = (num - remainder) / radix;
  }
  return `${chars.charAt(num)}${str}`;
}

export function decode(str: string): number {
  const len = str.length;
  let num = 0;
  for (let i = 0; i < len; i++) {
    num += chars.indexOf(str.charAt(len - i - 1)) * radix ** i;
  }
  return num;
}
