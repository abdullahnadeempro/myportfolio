import { useEffect } from "react";

const SCRIPTS = [
  "/assets/js/jquery-3.7.1.min.js",
  "/assets/js/bootstrap.bundle.min.js",
  "/assets/js/jquery.nice-select.min.js",
  "/assets/js/jquery.magnific-popup.min.js",
  "/assets/js/swiper-bundle.min.js",
  "/assets/js/viewport.jquery.js",
  "/assets/js/odometer.min.js",
  "/assets/js/vanilla-tilt.min.js",
  "/assets/js/phosphor-icon.js",
  "/assets/js/ScrollTrigger.min.js",
  "/assets/js/SplitText.min.js",
  "/assets/js/ScrollToPlugin.min.js",
  "/assets/js/ScrollSmoother.min.js",
  "/assets/js/gsap.min.js",
  "/assets/js/chroma.min.js",
  "/assets/js/main.js",
];

export default function useScripts() {
  useEffect(() => {
    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const s = document.createElement("script");
        s.src = src;
        s.async = false;
        s.onload = resolve;
        s.onerror = () => reject(new Error("Failed to load " + src));
        document.body.appendChild(s);
      });

    (async () => {
      for (const src of SCRIPTS) {
        try {
          await loadScript(src);
        } catch (e) {
          console.error("Script load error:", src, e);
        }
      }
    })();

    const yearEl = document.getElementById("copyrightYear");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }, []);
}