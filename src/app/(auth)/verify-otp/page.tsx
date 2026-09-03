import AuthHeroBanner from "@/components/shared/AuthHeroBanner";
import VerifyOTpForm from "./_components/VerifyOtpForm";

export const metadata = {
  title: "Verify OTP",
  description: "This the official website of Better Off Market",
};

export default function page() {
  return (
    <div className="relative">
      <AuthHeroBanner />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full mx-auto z-50">
        <VerifyOTpForm />
      </div>
    </div>
  );
}
