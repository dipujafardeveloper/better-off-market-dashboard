import { OtpVerificationForm } from "@/components/(auth)/verifyEmail/VerifyForm";
import { Metadata } from "next";
import Image from "next/image";
import forgetPassImage from "@/assets/image/verify_email_image.png";

export const metadata: Metadata = {
  title: "Verify Email",
};

const verifyEmail = () => {
  return (
    <div className="bg-[#F8F9FA] flex min-h-screen items-center justify-center gap-10 md:flex-row ">
      <div className="flex-1">
        <Image
          src={forgetPassImage} alt="Verify Email Page Image" className="h-screen object-cover w-full" />
      </div>
      <div className="flex-1">
        <OtpVerificationForm />
      </div>
    </div>
  );
};

export default verifyEmail;
