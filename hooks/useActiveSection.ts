"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type UseActiveSectionOptions = {
  rootMargin?: string;
};

export function useActiveSection(count: number, options: UseActiveSectionOptions = {}) {
  const { rootMargin = "-35% 0px -35% 0px" } = options;
  const [active, setActive] = useState(0);
  const ratiosRef = useRef<Map<number, number>>(new Map());
  const refs = useRef<(HTMLElement | null)[]>([]);

  const setRef = useCallback(
    (index: number) => (node: HTMLElement | null) => {
      refs.current[index] = node;
    },
    [],
  );

  useEffect(() => {
    const ratios = ratiosRef.current;
    ratios.clear();

    const pickActive = () => {
      let bestIndex = 0;
      let bestRatio = -1;
      ratios.forEach((ratio, index) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestIndex = index;
        }
      });
      setActive(bestIndex);
    };

    const observers = refs.current.map((node, index) => {
      if (!node) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          ratios.set(index, entry.intersectionRatio);
          pickActive();
        },
        { threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1], rootMargin },
      );

      observer.observe(node);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
      ratios.clear();
    };
  }, [count, rootMargin]);

  return { active, setRef };
}
