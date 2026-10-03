export function ActivityFeedSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="w-full space-y-3 animate-pulse">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="rounded-xl bg-[#F8F9FB] px-4 py-3.5">
          <div className="h-4 w-3/4 bg-gray-200 rounded mb-2" />
          <div className="h-3 w-40 bg-gray-200 rounded" />
        </div>
      ))}
    </div>
  );
}