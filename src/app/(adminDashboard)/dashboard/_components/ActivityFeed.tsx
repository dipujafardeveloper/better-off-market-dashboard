"use client";

import { INotification } from "@/components/(adminDashboard)/Notifications/NotificationContainer";
import NotificationListSkeleton from "@/components/(adminDashboard)/Notifications/NotificationListSkeleton";
import { useGetNotificationQuery } from "@/redux/api/notificationApi";
import Link from "next/link";
import { ActivityFeedSkeleton } from "./ActivityFeedSkeleton";
import Empty from "@/components/ui/empty-data";

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
  const { data, isLoading } = useGetNotificationQuery({ limit: 4 });
  return (
    <div className="rounded-3xl bg-white p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] ">
      <h2 className="mb-5 text-xl font-bold text-primary-black">{title}</h2>

      {data?.meta?.total === 0 && !isLoading && (
          <Empty message="No activity found" className="mt-10" />
        )}


      <div className="space-y-3">
        {data?.meta?.total !== 0 && isLoading ? (
          <div className="xl:mt-8 mt-6  text-text-color">
            <ActivityFeedSkeleton />
          </div>
        ) : (
          data?.data?.map((activity: INotification) => (
            <Link
              key={activity._id}
              href={activity.link ? `${activity.link}` : `#`}
              className="rounded-2xl bg-gray-50 p-4 block"
            >
              <p className="font-semibold text-primary-black line-clamp-1">
                {activity.message}
              </p>
              <p className="mt-1 text-sm text-gray-400 line-clamp-1">
                {activity.description}
              </p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
