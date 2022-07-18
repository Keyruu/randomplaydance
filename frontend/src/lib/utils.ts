export function getMinuteDisplay(seconds: number): string {
  return `${Math.floor(seconds / 60).toLocaleString(undefined, { minimumIntegerDigits: 2 })}:${(seconds % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 })}`
}