import { useEffect, useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";

// Paper's WebGL mesh shader. The colors move independently across the viewport;
// grain and swirl are disabled so no texture or flower-like focal point appears.
const COLORS = [
  "#c8d3ef",
  "#7797dc",
  "#d4ddf2",
  "#a38de0",
  "#d7cef0",
  "#83b7dc",
  "#b39bdd",
  "#8aa6de",
];

export default function ShaderBackground() {
  const [reduceMotion, setReduceMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <div className="shader-background" aria-hidden="true">
      <MeshGradient
        width="100%"
        height="100%"
        colors={COLORS}
        distortion={0.8}
        swirl={0.1}
        scale={0.78}
        grainMixer={0}
        grainOverlay={0}
        speed={reduceMotion ? 0 : 0.25}
        frame={0}
        minPixelRatio={1}
        maxPixelCount={2_600_000}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
