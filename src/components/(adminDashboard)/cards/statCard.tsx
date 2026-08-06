import React from "react";

type TProps = {
  title: string;
  amount: string;
  icon: React.ReactNode;
};

export default function StatCard({
  title,
  amount,
  icon,
}: TProps) {
  return (
    <div className="flex flex-col xl:gap-y-2 gap-y-1  justify-center p-6  flex-1 bg-section-bg rounded-xl ">
      <div className="flex justify-between items-center">
        <h3 className=" xl:text-xl text-base text-[#212529] truncate">{title}</h3>
        <div className="bg-[#1A1A1A1A] border-[#E4E4E7] p-2 rounded-md">{icon}</div>
      </div>
      <p className="xl:text-3xl lg:text-2xl text-xl font-medium ">{amount}</p>
    </div>
  );
}
