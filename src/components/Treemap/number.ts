const FRACTION_DIGITS = 3

export function isNumber(n: unknown): n is number {
  return typeof n === 'number' && !Number.isNaN(n)
}

export function round(n: number, fractionDigits: number): number {
  const factor = Math.pow(10, fractionDigits)
  return Math.round(n * factor) / factor
}

export function noFormatter(n: number): number {
  return n
}

export function standardFormatter(n: number): number {
  return round(n, FRACTION_DIGITS)
}
