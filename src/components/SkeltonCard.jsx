import React from "react";

function SkeletonCard() {
  return (
    <div
      style={{
        width: 200,
        height: 300,
        backgroundColor: "e0e0e0",
        borderRadius: "8px",
        marginBottom: "1rem",
        animation: "pulse 1.5s infinite",
      }}
    />
  );
}

export default SkeletonCard;
