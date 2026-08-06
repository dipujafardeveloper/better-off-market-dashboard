interface ActivityItem {
  id: string | number;
  title: string;
  time: string;
  location: string;
}

interface ActivityFeedProps {
  title?: string;
  activities?: ActivityItem[];
}

export function ActivityFeed({
  title = "Recent activity feed",
  activities = [
    {
      id: 1,
      title: "James B. registered as a new buyer",
      time: "2 hours ago",
      location: "Hamilton County",
    },
    {
      id: 2,
      title: "New offer of $298,000 on Nashville duplex",
      time: "5 hours ago",
      location: "Hamilton County",
    },
    {
      id: 3,
      title: "James B. registered as a new buyer",
      time: "2 hours ago",
      location: "Hamilton County",
    },
    {
      id: 4,
      title: "James B. registered as a new buyer",
      time: "2 hours ago",
      location: "Hamilton County",
    },
  ],
}: ActivityFeedProps) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] ">
      <h2 className="mb-5 text-xl font-bold text-primary-black">{title}</h2>

      <div className="space-y-3">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="rounded-2xl bg-gray-50 p-4"
          >
            <p className="font-semibold text-primary-black">
              {activity.title}
            </p>
            <p className="mt-1 text-sm text-gray-400">
              {activity.time} · {activity.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}