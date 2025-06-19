import React from "react";

function SkeletonMovieCard() {
    return (
    <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-xl w-full h-[300px]">
    <div className="h-[75%] bg-gray-300 dark:bg-gray-600 rounded-t-xl" />
    <div className="p-3 space-y-2">
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4" />
      <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2" />
    </div>
  </div>
    )
} 

export default SkeletonMovieCard;