// components/skeleton/ConversationListSkeleton.tsx
export default function ConversationListSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="space-y-3 animate-pulse">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="flex items-center justify-between gap-4 rounded-xl bg-white p-5"
        >
          <div className="space-y-2">
            <div className="h-5 w-40 rounded bg-gray-200" />
            <div className="h-3.5 w-32 rounded bg-gray-200" />
          </div>
          <div className="h-9 w-20 shrink-0 rounded-lg bg-gray-200" />
        </div>
      ))}
    </div>
  );
}