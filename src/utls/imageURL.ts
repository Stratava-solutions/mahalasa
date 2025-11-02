export function imageUrl(path: string) {
  const clean = path.startsWith("/") ? path.slice(1) : path;

  if (typeof window !== "undefined") {
    return `${window.location.origin}/${clean}`;
  }

  return `https://mahalasa.org/${clean}`;
}