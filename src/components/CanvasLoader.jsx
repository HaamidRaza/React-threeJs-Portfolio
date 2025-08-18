import React from "react";
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* Simple spinner */}
      <div
        style={{
          width: 32,
          height: 32,
          border: "3px solid rgba(255,255,255,0.3)",
          borderTop: "3px solid #E97451", // accent color
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />

      {/* Smooth loading text */}
      <p
        style={{
          fontSize: 13,
          color: "#f1f1f1",
          fontWeight: 600,
          marginTop: 12,
        }}
      >
        {progress < 100 ? `Loading ${progress.toFixed(0)}%` : "Ready!"}
      </p>

      {/* Inline keyframes */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </Html>
  );
};

export default CanvasLoader;
