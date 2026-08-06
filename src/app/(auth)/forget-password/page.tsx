import { ForgetPassForm } from "@/components/(auth)/forgetPassword/ForgetPassForm";
import { Metadata } from "next";
import Image from "next/image";
import forgetPassImage from "@/assets/image/forget_pass_page_image.png";
export const metadata: Metadata = {
  title: "Forget Password",
};

const ForgetPasswordPage = () => {
  return <div className="bg-[#F8F9FA] flex min-h-screen items-center justify-center gap-10 md:flex-row ">
    <div className="flex-1">
      <Image src={forgetPassImage} alt="Forget Password Page Image" className="h-screen object-cover w-full" />
    </div>
    <div className="flex-1">
      <ForgetPassForm />
    </div>
  </div>;
};

export default ForgetPasswordPage;
