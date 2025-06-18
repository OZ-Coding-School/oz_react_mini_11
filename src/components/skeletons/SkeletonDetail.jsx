function SkeletonDetail() {
  return (
    <div className="flex flex-col md:flex-row gap-[5vw] px-[5vw] py-[80px] animate-pulse">
      <div className="w-1/3 aspect-[0.7] max-h-[calc(100vh-120px)] bg-gray-700 rounded" />

      <div className="flex flex-col w-[calc(66%-10vw)]">
        <div className="h-10 bg-gray-700 rounded w-2/3" />
        <div className="flex gap-4 mt-3">
          <div className="h-4 bg-gray-600 rounded w-12" />
          <div className="h-4 bg-gray-600 rounded w-12" />
          <div className="h-4 bg-gray-600 rounded w-12" />
        </div>
        <div className="h-4 my-10 bg-gray-600 rounded w-1/2" />

        <div className="flex flex-col gap-2 w-full">
          <div className="h-7 mb-4 bg-gray-700 w-24 rounded" />
          <div className="h-4 bg-gray-600 rounded w-full" />
          <div className="h-4 bg-gray-600 rounded w-full" />
          <div className="h-4 bg-gray-600 rounded w-full" />
          <div className="h-4 bg-gray-600 rounded w-4/6" />
        </div>

        <div>
          <div className="h-7 my-10 mb-4 bg-gray-700 w-24 rounded" />
          <div className="h-40 bg-gray-700 rounded md:w-[300px]" />
        </div>
      </div>
    </div>
  );
}

export default SkeletonDetail;
