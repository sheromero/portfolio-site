import { useEffect, useRef } from "react";

const NUM_DOTS = 75;

type Dot = {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
};

export default function FloatingDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dots = useRef<Dot[]>([]);

  function getDotColors() {
    const root = document.documentElement;
    const isDark = root.classList.contains("dark");

    const color = isDark
      ? getComputedStyle(root).getPropertyValue("--color-foreground").trim() || "#f4f1ed"
      : "#8a6b45";

    return [color];
  }

  function updateDotColors() {
    const colors = getDotColors();
    dots.current.forEach((dot, i) => {
      dot.color = colors[i % colors.length];
    });
  }

  function hexToRgb(hex: string): string {
    hex = hex.trim().replace(/^#/, "");
    if (hex.length === 3) {
      hex = hex.split("").map((x) => x + x).join("");
    }
    const bigint = parseInt(hex, 16);
    if (isNaN(bigint) || hex.length !== 6) {
      return "0,0,0"; // fallback
    }
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r},${g},${b}`;
  }

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animationFrameId: number;

    function init() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      const colors = getDotColors();
      dots.current = [];

      for (let i = 0; i < NUM_DOTS; i++) {
        const color = colors[i % colors.length];
        dots.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.4 + 0.6,
          color,
        });
      }
    }

    function animate() {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      for (const dot of dots.current) {
        dot.x += dot.speedX;
        dot.y += dot.speedY;

        if (dot.x < 0) dot.x = width;
        else if (dot.x > width) dot.x = 0;
        if (dot.y < 0) dot.y = height;
        else if (dot.y > height) dot.y = 0;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${hexToRgb(dot.color)}, ${dot.opacity})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    init();
    animate();

    function onResize() {
      init(); // Okay to reset on resize
    }

    window.addEventListener("resize", onResize);

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.attributeName === "class") {
          updateDotColors(); // Only change color, preserve motion
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: -1,
        width: "100vw",
        height: "100vh",
      }}
    />
  );
}
