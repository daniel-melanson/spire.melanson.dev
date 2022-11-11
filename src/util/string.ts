export function convertToSlug(s: string): string {
  return s.toLowerCase().trim().replaceAll(" ", "-");
}
