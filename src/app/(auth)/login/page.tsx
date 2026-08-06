import { LoginForm } from "@/components/(auth)/login/LoginForm";
import { Metadata } from "next";
import Image from "next/image";
import loginPageImage from "@/assets/image/login_page_image.jpg"

export const metadata: Metadata = {
  title: "Admin Login",
  description: "Admin login for the dashboard.",
};

const LoginPage = () => {
  return (
    <div className="bg-[#F8F9FA] flex min-h-screen items-center justify-center gap-10 md:flex-row ">
      <div className="flex-1">
      <Image src={loginPageImage} alt="Login Page Image" className="h-screen object-cover w-full" />
      </div>
      <div  className="flex-1">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
