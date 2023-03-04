import { useState, useEffect } from "react";

// Define general type for useWindowSize hook, which includes width and height
interface Size {
  width: number | undefined;
  height: number | undefined;
}

// Hook
export default function useWindowSize(): Size {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

// Utilities
export const breakPoints = [
  ["sm", 640] as const,
  ["md", 768] as const,
  ["lg", 1024] as const,
];

export function getBreakPoint(width: Size["width"]) {
  const find = width
    ? breakPoints.find((breakPoint) => {
        if (width < breakPoint[1]) {
          return breakPoint;
        }
      })
    : undefined;

  return (find ?? breakPoints[0])[0];
}
