"use client";
import { useEffect, useState } from "react";

export interface PageSection {
  _id: string;
  key: string;
  title: string;
  subtitle: string;
  body: string;
  imageUrl: string;
  imageAlt: string;
  order: number;
}

export function usePageContent(page: string) {
  const [sections, setSections] = useState<PageSection[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(`/api/public/page-content?page=${encodeURIComponent(page)}`)
      .then((r) => r.json())
      .then((data) => { if (Array.isArray(data)) setSections(data); })
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, [page]);

  function get(key: string): PageSection | undefined {
    return sections.find((s) => s.key === key);
  }

  function img(key: string, fallback: string): string {
    const s = get(key);
    return s?.imageUrl || fallback;
  }

  function text(key: string, fallback: string): string {
    const s = get(key);
    return s?.body || fallback;
  }

  function title(key: string, fallback: string): string {
    const s = get(key);
    return s?.title || fallback;
  }

  return { sections, loaded, get, img, text, title };
}
