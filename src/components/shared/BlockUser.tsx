"use client";

import {
  useUserBlockMutation,
  useUserUnBlockMutation,
} from "@/redux/api/userApi";
import { message, Popconfirm, PopconfirmProps } from "antd";
import { toast } from "sonner";

export default function BlockUser({ id, isActive }: any) {
  const [blockUser] = useUserBlockMutation();
  const [unBlockedUser] = useUserUnBlockMutation();

  const confirmBlock: PopconfirmProps["onConfirm"] = async () => {
    try {
      if (isActive) {
        await blockUser(id).unwrap();
        message.success("Blocked the user");
      } else {
        await unBlockedUser(id).unwrap();
        message.success("Unblocked the user");
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong");
    }
  };
  return (
    <Popconfirm
      title={isActive ? "Block the user" : "Unblock the user"}
      description={
        isActive
          ? "Are you sure to block this user?"
          : "Are you sure to unblock this user?"
      }
      onConfirm={confirmBlock}
      okText="Yes"
      cancelText="No"
    >
      {isActive ? (
        <button className="text-red-600 transition-transform duration-300 hover:scale-105">
          Block
        </button>
      ) : (
        <button className="text-green-600 transition-transform duration-300 hover:scale-105">
          Unblock
        </button>
      )}
    </Popconfirm>
  );
}
