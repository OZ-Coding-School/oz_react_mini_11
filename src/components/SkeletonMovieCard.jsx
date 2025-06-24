import React, { useEffect } from "react";

const SkeletonMovieCard = ({ darkMode, large = false }) => {
  useEffect(() => {
    const styleId = "skeleton-pulse-animation";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = `
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.4; }
          100% { opacity: 1; }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const width = large ? "240px" : "180px";
  const height = large ? "360px" : "300px";

  const styles = {
    card: {
      width,
      height,
      borderRadius: "16px",
      backgroundColor: darkMode ? "#1f2937" : "#e5e7eb",
      overflow: "hidden",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column",
      animation: "pulse 1.5s ease-in-out infinite",
    },
    imagePlaceholder: {
      height: "60%",
      backgroundColor: darkMode ? "#374151" : "#d1d5db",
    },
    content: {
      padding: "12px",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    title: {
      height: "16px",
      width: "70%",
      backgroundColor: darkMode ? "#4b5563" : "#cbd5e1",
      borderRadius: "8px",
    },
    rating: {
      height: "12px",
      width: "40%",
      backgroundColor: darkMode ? "#4b5563" : "#cbd5e1",
      borderRadius: "8px",
    },
  };

  return (
    <div style={styles.card}>
      <div style={styles.imagePlaceholder}></div>
      <div style={styles.content}>
        <div style={styles.title}></div>
        <div style={styles.rating}></div>
      </div>
    </div>
  );
};

export default SkeletonMovieCard;
