// components/skeleton/NotificationListSkeleton.tsx
export default function NotificationListSkeleton({ count = 10 }: { count?: number }) {
  return (
    <div className="space-y-4 animate-pulse">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4"
        >
          <div className="h-10 w-10 shrink-0 rounded-full bg-gray-200" />

          <div className="flex-1 space-y-2">
            <div className="h-4 w-40 rounded bg-gray-200" />
            <div className="h-3.5 w-64 rounded bg-gray-200" />
          </div>

          <div className="h-3.5 w-20 shrink-0 rounded bg-gray-200" />
        </div>
      ))}
    </div>
  );
}