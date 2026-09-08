import { useEffect, useRef, useState } from "react";

const hasWindow = typeof window !== "undefined";
const hasIO = hasWindow && typeof IntersectionObserver !== "undefined";

/**
 * [ref, inView] — inView становится true, когда элемент доскроллили до вьюпорта.
 * Триггеры: IntersectionObserver + запасная проверка на scroll/resize.
 * Без таймеров, которые показывали бы блок заранее.
 */
export const useInView = ({ offset = 0.12 } = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(!hasWindow);

  useEffect(() => {
    const el = ref.current;
    if (inView || !el || !hasWindow) return;

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      cleanup();
      setInView(true);
    };

    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * (1 - offset) && r.bottom > 0) reveal();
    };

    let observer;
    if (hasIO) {
      observer = new IntersectionObserver(
        (entries) => entries[0].isIntersecting && reveal(),
        { threshold: 0, rootMargin: `0px 0px -${Math.round(offset * 100)}% 0px` },
      );
      observer.observe(el);
    }
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check, { passive: true });

    function cleanup() {
      observer?.disconnect();
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    }

    check();
    return cleanup;
  }, [inView, offset]);

  return [ref, inView];
};
