import { useEffect } from "react";

/**
 * Odometer counters ko sirf tab animate karta hai jab
 * user scroll karke un section pe aaye (IntersectionObserver).
 */
export default function useOdometer() {
  useEffect(() => {
    let observer = null;
    let interval = null;

    const initOdometer = () => {
      if (typeof window.Odometer === "undefined") return false;

      const elements = document.querySelectorAll(".odometer");
      if (elements.length === 0) return false;

      // Ek hi observer banao saare elements ke liye
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return; // sirf jab viewport mein aaye

            const el = entry.target;
            if (el.dataset.odometerInitialized === "true") return;

            const finalValue = el.getAttribute("data-odometer-final");
            if (!finalValue) return;

            // Naya odometer instance banao
            const od = new window.Odometer({
              el: el,
              value: 0,
              duration: 2000,   // 2 second animation
              format: "d",
            });

            // Value animate karo
            od.update(Number(finalValue));

            // Mark as done — dobara na chale
            el.dataset.odometerInitialized = "true";

            // Is element ko observe karna band kar do
            observer.unobserve(el);
          });
        },
        {
          threshold: 0.3,        // 30% element visible hone pe trigger
          rootMargin: "0px 0px -50px 0px", // thoda pehle trigger
        }
      );

      // Saare odometer elements ko observe karo
      elements.forEach((el) => {
        if (el.dataset.odometerInitialized !== "true") {
          observer.observe(el);
        }
      });

      return true;
    };

    // Agar script already loaded hai to turant init
    if (!initOdometer()) {
      // Warna interval se wait karo (script load hone ka)
      interval = setInterval(() => {
        if (initOdometer()) {
          clearInterval(interval);
          interval = null;
        }
      }, 200);
    }

    // 10 second baad interval band kar do (safety)
    const timeout = setTimeout(() => {
      if (interval) clearInterval(interval);
    }, 10000);

    return () => {
      if (interval) clearInterval(interval);
      if (observer) observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);
}