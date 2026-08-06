import { Metadata } from "next";
import { ResetPasswordForm } from "@/components/(auth)/setNewPassword/ResetPasswordForm";
import Image from "next/image";
import resetPassImage from "@/assets/image/reset_pass_page_image.jpg";

export const metadata: Metadata = {
  title: "Reset Password",
};

const ResetPassword = () => {
  return <div className="bg-[#F8F9FA] flex min-h-screen items-center justify-center gap-10 md:flex-row ">
    <div className="flex-1">
      <Image
        src={resetPassImage} alt="Reset Password Page Image" className="h-screen object-cover w-full" />
    </div>
    <div className="flex-1">
      <ResetPasswordForm />
    </div>
  </div>


    ;
};

export default ResetPassword;
