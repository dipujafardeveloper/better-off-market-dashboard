import { cn } from "@/lib/utils";
import { Avatar, Modal } from "antd";
import Link from "next/link";
import { RiCloseLargeLine } from "react-icons/ri";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
  userType: string;
};

const UserDetails = ({ open, setOpen, userType }: TPropsType) => {
  return (
    <Modal
      open={open}
      footer={null}
      centered={true}
      onCancel={() => setOpen(false)}
      closeIcon={false}
      style={{
        minWidth: "max-content",
        position: "relative",

      }}
    >
      <div className="pb-5">
        <div className="flex justify-between items-center  ">
          <div></div>
          <div
            className="w-10 h-10 bg-[#e9cbcb]  rounded-full flex justify-center items-center cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <RiCloseLargeLine size={18} color="#E12728" className="" />
          </div>
        </div>

        {/* --------------------- user details information ---------------------------- */}
        <div className="w-fit mx-auto relative">
          <Avatar src="/user_image.png" size={150} />
        </div>

        <div className="mt-5">
          <div className="flex justify-between bg-[#23232314]  py-3 px-2">
            <h4>User name :</h4>
            <p className="font-medium">Ahmad Zain</p>
          </div>
          <div className="flex justify-between   py-3 px-2">
            <h4>Email :</h4>
            <p className="font-medium">aliabdi@gmail.com</p>
          </div>

          <div className="flex justify-between bg-[#23232314]  py-3 px-2">
            <h4>Contact Number :</h4>
            <p className="font-medium">+92121514321</p>
          </div>
          <div className="flex justify-between   py-3 px-2">
            <h4>Location :</h4>
            <p className="font-medium">Tripoli, Libya</p>
          </div>
          <div className="flex justify-between bg-[#23232314]  py-3 px-2">
            <h4>Gender :</h4>
            <p className="font-medium">Male</p>
          </div>
          <div className="flex justify-between   py-3 px-2">
            <h4>Account Type :</h4>
            <p className="font-medium">{userType === "Rider" ? "Rider" : "Driver"}</p>
          </div>

          {userType === "Driver" && <>
            <div className="flex justify-between bg-[#23232314]  py-3 px-2">
              <h4>Documents:</h4>
              <div className="flex items-center gap-x-1">
                <Link href="/images.png" target="_blank" className="bg-black text-white hover:text rounded px-2">
                  NID
                </Link>
                <Link href="/images.png" target="_blank" className="bg-black text-white hover:text rounded px-2">
                  License
                </Link>
              </div>
            </div>
          </>
          }

          <div className={cn("flex justify-between  py-3 px-2", userType !== "Driver" && "bg-[#23232314]")}>
            <h4>Date of Join :</h4>
            <p className="font-medium">10 May, 2026</p>
          </div>



        </div>
      </div>
    </Modal>
  );
};

export default UserDetails;
