"use client";;
import ImageWithFallback from "@/components/shared/image/ImageWithFallback";
import Preview from "@/components/shared/utils/image_preview_option";
import ImagePreviewer from "@/components/shared/utils/images-previewer";
import Empty from "@/components/ui/empty-data";
import { useGetSellerProfileQuery } from "@/redux/api/profileApi";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import SellerProfileSkeleton from "./seller-profile-skeleton";
import ReadMoreText from "@/components/shared/ReadMoreText";

export function SellerProfileCard() {
  const [previewImgIndex, setPreviewImgIndex] = useState(-1);
  const sellerId = useSearchParams().get("seller");
  const { data, isLoading } = useGetSellerProfileQuery(sellerId, {
    skip: !sellerId,
  });
  const user = data?.data;

  if (isLoading) return <SellerProfileSkeleton />;

  if (!user) {
    return <Empty message="Seller profile not found" className="mt-16" />;
  }

  return (
    <>
      <div className="rounded-lg bg-white p-5 shadow-[0_10px_30px_0_rgba(15,23,42,0.05)] sm:p-6 lg:p-8">
        <div className="flex flex-col items-center md:items-start gap-5 sm:flex-row lg:gap-8">
          {/* Avatar */}
          <Preview onClick={() => setPreviewImgIndex(0)}>
            <ImageWithFallback
              src={user?.profile || "/default_user_profile.png"}
              alt={"seller profile avatar"}
              width={1200}
              height={1200}
              className="size-32 shrink-0 rounded-lg object-cover sm:size-36 lg:size-40"
            />
          </Preview>

          {/* Info */}
          <div className="min-w-0 flex-1 flex flex-col justify-between">
            <div>
              <h2 className=" font-semibold text-primary-black text-2xl">
                {user?.name}
              </h2>
              {user?.company && (
                <h5 className="text-xl font-medium text-gray-900 mt-0.5">
                  {user?.company}
                </h5>
              )}
              {user?.bio && (
                <p className="mt-0.5 text-lg text-[#594139]">
                  <ReadMoreText text={user?.bio} wordLimit={50} />
                </p>
              )}
            </div>

            <div>
              {/* Divider */}
              <div className="mb-3 border-t border-gray-200 sm:my-5" />

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-x-10 gap-y-4 sm:gap-x-16">
                <div>
                  <p className="text-xs font-semibold tracking-wide text-[#594139]">
                    ACTIVE LISTINGS
                  </p>
                  <p className="mt-1 text-xl font-semibold text-primary-blue">
                    {user?.activeListing}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-wide text-[#594139]">
                    TOTAL LISTED
                  </p>
                  <p className="mt-1 text-xl font-semibold text-primary-blue">
                    {user?.totalListing}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-wide text-[#594139]">
                    AVG RATING
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-xl font-semibold text-primary-blue text-primary-black sm:text-xl">
                    {user?.avgRating?.toFixed(1)}{" "}
                    <span className="text-primary-blue">★</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {user?.profile && (
        <>
          <ImagePreviewer
            imageUrls={[user?.profile]}
            previewImgIndex={previewImgIndex}
            setPreviewImgIndex={setPreviewImgIndex}
          />
        </>
      )}
    </>
  );
}
