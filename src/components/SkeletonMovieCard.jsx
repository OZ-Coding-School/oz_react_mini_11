import React from "react";

function SkeletonMovieCard() {
  const baseStyle = {
    borderRadius: "12px",
    width: "100%",
    height: "300px",
    backgroundColor: "#e5e7eb",
    animation: "pulse 1.5s ease-in-out infinite",
    overflow: "hidden",
  };

  const imageStyle = {
    height: "75%",
    backgroundColor: "#d1d5db",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
  };

  const textContainerStyle = {
    padding: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };

  const textLineStyle1 = {
    height: "16px",
    backgroundColor: "#d1d5db",
    borderRadius: "8px",
    width: "75%",
  };

  const textLineStyle2 = {
    height: "12px",
    backgroundColor: "#d1d5db",
    borderRadius: "8px",
    width: "50%",
  };
  
    return (
      <>
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }
      `}</style>
        <div baseStyle>
          <div style={imageStyle} />
          <div style={textContainerStyle}>
            <div style={textLineStyle1} />
            <div style={textLineStyle2} />
          </div>
        </div>
      </>
    )
} 

export default SkeletonMovieCard;