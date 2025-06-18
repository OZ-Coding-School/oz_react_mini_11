function SkeletonBanner() {
  return (
    <div className="relative aspect-[2] animate-pulse">
      <div className="fixed w-full aspect-[2] z-0 bg-gray-800" />
      <div className="flex flex-col gap-6 absolute bottom-[160px] z-20 w-[calc(50%-5vw)] mx-[5vw]">
        <div className="h-10 w-1/2 bg-gray-600 rounded" />
        <div className="h-5 w-3/4 bg-gray-700 rounded" />
        <div className="h-4 w-full bg-gray-700 rounded" />
        <div className="h-4 w-5/6 bg-gray-700 rounded" />
        <div className="flex gap-4">
          <div className="h-12 w-32 bg-gray-600 rounded-xl" />
          <div className="h-12 w-32 bg-gray-600 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default SkeletonBanner;
