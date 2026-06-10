import type { Metadata } from "next";

/** Relative canonical path for the current route (works with layout metadataBase). */
export function pageMetadata(
  title: string,
  description: string,
  pathname: string
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: pathname },
  };
}
