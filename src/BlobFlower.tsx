import { useState, useEffect, useRef } from "react";

export default function BlobFollower() {
  // Store position in state
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // Ref to track the animation frame request, initialized to null
  const requestRef = useRef<number | null>(null);
  // Ref to store the latest mouse position without causing re-renders on every move
  const mousePosition = useRef({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set initial position and mark as loaded
    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    setPosition({ x: initialX, y: initialY });
    mousePosition.current = { x: initialX, y: initialY };
    setIsLoaded(true);

    // Track latest mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop using requestAnimationFrame for performance
    const animate = () => {
      // Update state towards the target mouse position (simple lerp can be added for smoother follow)
      // For now, just directly set to the latest tracked position
      setPosition(mousePosition.current);
      requestRef.current = requestAnimationFrame(animate);
    };
    // Start the animation loop
    requestRef.current = requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {isLoaded && (
        <div
          className="absolute pointer-events-none transition-transform duration-300 ease-out" // Use transition-transform
          style={{
            // Apply position using transform for hardware acceleration
            transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
            willChange: "transform", // Hint to the browser
          }}
        >
          {/* The visual blob */}
          <div className="w-48 h-48 rounded-full bg-orange-300 opacity-40 blur-3xl"></div>
        </div>
      )}
    </div>
  );
}
