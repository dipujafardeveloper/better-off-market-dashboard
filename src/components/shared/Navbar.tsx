"use client";
import { Avatar, Badge, Flex } from "antd";
import { IoNotificationsOutline } from "react-icons/io5";
import avatarImg from "@/assets/image/profile.png";

import Link from "next/link";
import { ChevronRight, X } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "../ui/menubar";
import { FaBars } from "react-icons/fa6";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/authSlice";
import { useRouter } from "next/navigation";

type TNavbarProps = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};

const Navbar = ({ collapsed, setCollapsed }: TNavbarProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <div className="flex items-center justify-between w-[97%]">
      {/* Header left side */}
      <Flex align="center" gap={10}>
        <button
          onClick={() => setCollapsed(collapsed ? false : true)}
          className="cursor-pointer hover:bg-gray-300 rounded-full duration-1000 lg:hidden flex items-center justify-center pl-2 sr-only"
        >
          {collapsed ? (
            <X size={28} color="#3A3C3B" />
          ) : (
            <FaBars size={28} color="#3A3C3B" />
          )}
        </button>
        <div className="flex-col px-4 hidden md:flex">
          <h2 className="md:text-xl text-lg  font-medium text-[#3A3C3B]">
            Welcome, Mitchell
            <span className="block  text-xs font-normal">
              Welcome back! Here's what's happening today.
            </span>
          </h2>
        </div>
      </Flex>

      {/* Header right side */}
      <Flex align="center" gap={20}>
        {/* Notification */}
        <Link href={"/notifications"}>
          <div className="flex justify-center items-center size-12  rounded-2xl cursor-pointer relative border ">
            <IoNotificationsOutline size={24} color="#545454" />

            <Badge
              count={1}
              style={{
                border: "none",
                boxShadow: "none",
                backgroundColor: "var(--color-main)",
                color: "#fff",
                position: "absolute",
                top: "-24px",
                right: "-8px",
              }}
            ></Badge>
          </div>
        </Link>

        <Menubar className="py-6 rounded-full">
          <MenubarMenu>
            <MenubarTrigger className="shadow-none px-0 rounded-full py-2">
              <div className="flex items-center gap-x-2  px-2 h-fit">
                <p className="text-black">Mitchell</p>
                <Avatar
                  src={avatarImg.src}
                  size={40}
                  className="size-12"
                ></Avatar>
              </div>
            </MenubarTrigger>

            <MenubarContent className="text-primary-gray">
              <Link href={"/personal-information"}>
                <MenubarItem className="hover:bg-gray-100 cursor-pointer">
                  Profile{" "}
                  <MenubarShortcut>
                    <ChevronRight size={16} />
                  </MenubarShortcut>
                </MenubarItem>
              </Link>
              <MenubarSeparator />

              <MenubarItem
                onClick={() => {
                  dispatch(logout());
                  router.refresh();
                }}
                className="hover:bg-gray-100 cursor-pointer"
              >
                Logout
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </Flex>
    </div>
  );
};

export default Navbar;
