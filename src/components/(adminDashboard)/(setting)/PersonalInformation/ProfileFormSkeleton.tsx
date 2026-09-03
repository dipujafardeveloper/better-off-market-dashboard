import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProfileFormSkeleton() {
  return (
    <div className="w-full flex justify-center p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-7xl">
        {/* Left Profile Section */}
        <Card className="flex flex-col items-center py-10 gap-4 ">
          <Skeleton className="h-40 w-40 rounded-full" />
          <Skeleton className="h-6 w-24" />
        </Card>

        {/* Right Form Section */}
        <div className="space-y-6 col-span-2">
          <div className="space-y-2">
            <Label>Name</Label>
            <Skeleton className="h-10 w-full" />
          </div>

          <div className="space-y-2">
            <Label>Email</Label>
            <Skeleton className="h-10 w-full" />
          </div>

          <div className="space-y-2">
            <Label>Phone Number</Label>
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
