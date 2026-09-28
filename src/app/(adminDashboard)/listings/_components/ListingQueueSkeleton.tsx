export function ListingQueueSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="w-full animate-pulse">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="h-7 w-44 bg-gray-200 rounded" />
        <div className="h-8 w-40 bg-gray-200 rounded-full" />
      </div>

      {/* Listing rows */}
      <div className="space-y-4">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl bg-[#F8F9FB] p-4"
          >
            {/* Thumbnail */}
            <div className="h-[110px] w-full sm:w-[150px] shrink-0 rounded-xl bg-gray-200" />

            {/* Details */}
            <div className="flex-1 min-w-0 space-y-2.5">
              {/* Title */}
              <div className="h-4 w-full max-w-[560px] bg-gray-200 rounded" />
              {/* Owner name */}
              <div className="h-3.5 w-28 bg-gray-200 rounded" />
              {/* Meta: date, photos, documents */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="h-3 w-32 bg-gray-200 rounded" />
                <div className="h-3 w-20 bg-gray-200 rounded" />
                <div className="h-3 w-24 bg-gray-200 rounded" />
              </div>
              {/* Action buttons */}
              <div className="flex items-center gap-2 pt-1">
                <div className="h-8 w-20 bg-gray-200 rounded-md" />
                <div className="h-8 w-24 bg-gray-300 rounded-md" />
                <div className="h-8 w-20 bg-gray-200 rounded-md" />
              </div>
            </div>

            {/* Price */}
            <div className="h-6 w-16 bg-gray-300 rounded sm:mr-4 self-start sm:self-center" />
          </div>
        ))}
      </div>
    </div>
  );
}