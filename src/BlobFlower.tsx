import { useState, useEffect } from "react";

export default function BlobFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set initial position to center of screen on component mount
    setMousePosition({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      {isLoaded && (
        <div
          className="absolute pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
        >
          <div className="w-48 h-48 rounded-full bg-orange-300 opacity-40 blur-3xl"></div>
        </div>
      )}
    </div>
  );
}
