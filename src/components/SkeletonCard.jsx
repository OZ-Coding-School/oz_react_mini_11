function SkeletonCard() {
  return (
    <div className="animate-pulse flex flex-col w-[120px] space-y-2">
      <div className="aspect-[0.7] bg-gray-700 rounded-md" />
      <div className="h-4 bg-gray-700 rounded w-full" />
      <div className="h-4 bg-gray-600 rounded w-1/2" />
    </div>
  );
}

export default SkeletonCard;
