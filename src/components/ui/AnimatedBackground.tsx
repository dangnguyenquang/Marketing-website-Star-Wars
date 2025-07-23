"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const rafRef = useRef<number>(1);
  const mouseRef = useRef({ x: 50, y: 50 });
  const targetRef = useRef({ x: 50, y: 50 });

  const updateMousePosition = useCallback(() => {
    const dx = targetRef.current.x - mouseRef.current.x;
    const dy = targetRef.current.y - mouseRef.current.y;

    mouseRef.current.x += dx * 0.08;
    mouseRef.current.y += dy * 0.08;

    setMousePosition({
      x: mouseRef.current.x,
      y: mouseRef.current.y,
    });

    if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
      rafRef.current = requestAnimationFrame(updateMousePosition);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      };

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(updateMousePosition);
      }
    };

    let throttleTimer: NodeJS.Timeout;
    const throttledMouseMove = (e: MouseEvent) => {
      if (!throttleTimer) {
        throttleTimer = setTimeout(() => {
          handleMouseMove(e);
        }, 16);
      }
    };

    window.addEventListener("mousemove", throttledMouseMove);

    return () => {
      window.removeEventListener("mousemove", throttledMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (throttleTimer) {
        clearTimeout(throttleTimer);
      }
    };
  }, [updateMousePosition]);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black transition-all duration-1000 ease-out"></div>

      <div
        className="absolute inset-0 opacity-30 transition-all duration-700 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(250, 204, 21, 0.15) 0%, rgba(250, 204, 21, 0.08) 25%, rgba(59, 130, 246, 0.05) 50%, transparent 70%)`,
          filter: "blur(1px)",
        }}
      />

      <div
        className="absolute inset-0 opacity-20 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(ellipse at ${100 - mousePosition.x}% ${
            100 - mousePosition.y
          }%, rgba(59, 130, 246, 0.1) 0%, transparent 60%)`,
        }}
      />

      <div className="absolute inset-0">
        {[...Array(500)].map((_, i) => {
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const randomDelay = Math.random() * 8;
          const randomDuration = 3 + Math.random() * 6;
          const randomSize = 1 + Math.random() * 2;

          return (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-70"
              style={{
                left: `${randomX}%`,
                top: `${randomY}%`,
                width: `${randomSize}px`,
                height: `${randomSize}px`,
                animation: `twinkle ${randomDuration}s ease-in-out ${randomDelay}s infinite alternate`,
                willChange: "opacity",
              }}
            />
          );
        })}
      </div>

      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${15 + Math.random() * 20}s ease-in-out ${
                Math.random() * 10
              }s infinite`,
              willChange: "transform",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
